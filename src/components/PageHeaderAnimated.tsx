type Props = {
	headline: string;
};

export default function PageHeaderAnimated({ headline }: Props) {
	return (
		<div className="sa-hero-ptb service-3-hero-wrap fix pt-190 pb-20">
			<div className="sa-hero-text-wrapper hover-reveal-item p-relative mb-90">
				<div className="swiper-container tp-text-2-slider-active fix">
					<div className="swiper-wrapper slide-transtion">
						<div className="swiper-slide">
							<div className="sa-hero-text-item">
								<h3 className="sa-hero-text-title">{headline}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
