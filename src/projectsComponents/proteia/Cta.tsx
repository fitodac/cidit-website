export default function Cta() {
	return (
		<div className="mxd-section overflow-hidden">
			<div className="mxd-container">
				<div className="mxd-block">
					<div className="mxd-promo">
						<div className="mxd-promo__inner anim-zoom-out-container">
							<div className="mxd-promo__bg"></div>
							<div className="mxd-promo__content">
								<p className="mxd-promo__title anim-uni-in-up">
									<span className="mxd-promo__icon">
										<img src="/projects/img/icons/300x300_obj-cta-01.webp" alt="Icon" />
									</span>
									<span className="mxd-promo__caption reveal-type">
										Let's talk about your project!
									</span>
								</p>
								<div className="mxd-promo__controls anim-uni-in-up">
									<a
										className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
										href="contact.html"
									>
										<span className="btn-caption">Contact Us</span>
										<i className="ph-bold ph-arrow-up-right"></i>
									</a>
								</div>
							</div>
							<div className="mxd-promo__images">
								<img
									className="promo-image promo-image-1"
									src="/projects/img/illustrations/cta-img-01.webp"
									alt="Image"
								/>
								<img
									className="promo-image promo-image-2"
									src="/projects/img/illustrations/cta-img-02.webp"
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
