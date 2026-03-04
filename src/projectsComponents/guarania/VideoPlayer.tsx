import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";

interface VideoPlayerProps {
	src: string;
	onReady?: () => void;
	onPlay?: (player: any) => void;
	onVolumeChange?: (volume: number, muted: boolean) => void;
}

export default function VideoPlayer({
	src,
	onReady,
	onPlay,
	onVolumeChange,
}: VideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		let player: any;

		const loadPlyr = async () => {
			const PlyrModule = await import("plyr");
			const Plyr = PlyrModule.default || PlyrModule;

			if (videoRef.current) {
				player = new Plyr(videoRef.current, {
					controls: [
						"play-large",
						"play",
						"progress",
						"current-time",
						"mute",
						"volume",
						"fullscreen",
					],
					volume: 0.7, // Default volume
					muted: false,
				});

				player.on("play", () => {
					if (onPlay) onPlay(player);
				});

				player.on("volumechange", () => {
					if (onVolumeChange) {
						onVolumeChange(player.volume, player.muted);
					}
				});

				// Trigger layout updates on various events that might affect size
				const triggerLayout = () => {
					if (onReady) onReady();
				};

				player.on("ready", triggerLayout);
				player.on("loadedmetadata", triggerLayout);
				player.on("enterfullscreen", triggerLayout);
				player.on("exitfullscreen", triggerLayout);

				if (onReady) {
					// Wait a tick for DOM updates just in case
					setTimeout(onReady, 0);
				}
			}
		};

		loadPlyr();

		return () => {
			if (player) player.destroy();
		};
	}, []);

	return (
		<div
			className="plyr-wrapper w-full"
			style={
				{
					"--plyr-color-main": "#1daaba",
				} as React.CSSProperties
			}
		>
			<video
				ref={videoRef}
				className="plyr-video w-full h-auto object-cover"
				playsInline
				controls
			>
				<source src={src} type="video/mp4" />
			</video>
		</div>
	);
}
