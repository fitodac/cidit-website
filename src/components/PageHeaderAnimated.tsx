type Props = {
	headline: string;
};

export default function PageHeaderAnimated({ headline }: Props) {
	return (
		<div className="sa-hero-ptb service-3-hero-wrap fix pt-30 lg:pt-190 pb-20 px-4 lg:px-0">
			<div className="sa-hero-text-wrapper hover-reveal-item p-relative mb-20 lg:mb-90">
				<div className="swiper-container tp-text-2-slider-active fix">
					<div className="swiper-wrapper slide-transtion">
						<div className="swiper-slide">
							<div className="sa-hero-text-item">
								<h3 className="sa-hero-text-title text-5xl lg:text-[10rem] leading-tight!">
									{headline}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
