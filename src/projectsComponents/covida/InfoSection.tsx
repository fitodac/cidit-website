import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type Props = {
	title?: string;
	children?: ReactNode;
	orientation?: "right" | "left";
	mediaLarge: { type: "video" | "image"; src: string };
	mediaSmall: { type: "video" | "image"; src: string };
};

export default function InfoSection({
	title,
	children,
	orientation = "right",
	mediaLarge = { type: "image", src: "" },
	mediaSmall = { type: "image", src: "" },
}: Props) {
	const isLeft = orientation === "left";

	return (
		<div className="mxd-block">
			<div className="mxd-values loading__fade">
				<div className="container-fluid p-0">
					<div className="row g-0 d-flex">
						<div
							className={cn(
								"col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin animate-card-2",
								isLeft ? "order-3 order-xl-3" : "order-1 order-xl-2"
							)}
						>
							<div className="mxd-values__lists fullheight-xl">
								<div className="container-fluid p-0 fullheight-xl">
									<div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between"></div>
								</div>
							</div>
						</div>

						<div
							className={cn(
								"col-12 col-xl-4 mxd-values__item mxd-grid-item no-margin animate-card-2 [&>div]:rounded-[50px]!",
								isLeft ? "order-3 order-xl-2" : "order-1 order-xl-2"
							)}
						>
							{mediaLarge.type === "video" ? (
								<video
									src={mediaLarge.src}
									autoPlay
									loop
									muted
									playsInline
									className="parallax-img-small aspect-9/16 w-full"
								/>
							) : (
								<div
									className="mxd-values__image image-large-desktop parallax-img-small"
									style={{ backgroundImage: `url(${mediaLarge.src})` }}
								/>
							)}
						</div>

						<div
							className={cn(
								"col-12 col-xl-6 mxd-values__item mobile-reverse mxd-grid-item no-margin animate-card-2 [&>div]:rounded-[50px]!",
								isLeft ? "order-1 order-xl-1" : "order-3 order-xl-3"
							)}
						>
							{mediaSmall.type === "video" ? (
								<video
									src={mediaSmall.src}
									autoPlay
									loop
									muted
									playsInline
									className="parallax-img-small aspect-video w-full"
								/>
							) : (
								<div
									className="mxd-values__image image-small-desktop parallax-img-small"
									style={{ backgroundImage: `url(${mediaSmall.src})` }}
								/>
							)}

							<div className="mxd-values__descr has-top-list anim-uni-in-up">
								{title && (
									<h3 className="t-title anim-uni-in-up text-6xl! leading-none!">
										{title}
									</h3>
								)}
								{children && (
									<div className="t-bright reveal-type mt-7! [&_*]:text-3xl!">
										{children}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
