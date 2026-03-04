import { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import VideoPlayer from "./VideoPlayer";
import { staticPath } from "../../utils/staticPath";

interface VideoGalleryProps {
	videos: { path: string }[];
	galleryName: string;
}

export default function VideoGallery({
	videos,
	galleryName,
}: VideoGalleryProps) {
	const masonryRef = useRef<Masonry | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const playingRef = useRef<any>(null);
	const volumeRef = useRef({ volume: 0.7, muted: false });
	const layoutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleLayout = () => {
		if (layoutTimeoutRef.current) {
			clearTimeout(layoutTimeoutRef.current);
		}
		layoutTimeoutRef.current = setTimeout(() => {
			const msnry = masonryRef.current;
			if (msnry) {
				msnry.layout?.();
			}
		}, 100);
	};

	const handlePlay = (player: any) => {
		if (playingRef.current && playingRef.current !== player) {
			playingRef.current.pause();
		}

		// Apply stored volume preference
		player.volume = volumeRef.current.volume;
		player.muted = volumeRef.current.muted;

		playingRef.current = player;
	};

	const handleVolumeChange = (volume: number, muted: boolean) => {
		volumeRef.current = { volume, muted };
	};

	useEffect(() => {
		if (containerRef.current && !masonryRef.current) {
			masonryRef.current = new Masonry(containerRef.current, {
				itemSelector: ".mxd-project-item",
				percentPosition: true,
			});
		}

		return () => {
			if (layoutTimeoutRef.current) {
				clearTimeout(layoutTimeoutRef.current);
			}
			const msnry = masonryRef.current;
			if (msnry) {
				msnry.destroy?.();
				masonryRef.current = null;
			}
		};
	}, []);

	return (
		<div className="container-fluid p-0">
			<div className="row g-0 mxd-projects-masonry__gallery" ref={containerRef}>
				{videos.map((video, index) => (
					<div
						key={index}
						className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item"
					>
						<div className="mxd-project-item__preview masonry-preview h-auto!">
							<VideoPlayer
								src={staticPath(
									`projects/gallery/guarania/${galleryName}/${video.path}`
								)}
								onReady={handleLayout}
								onPlay={handlePlay}
								onVolumeChange={handleVolumeChange}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
