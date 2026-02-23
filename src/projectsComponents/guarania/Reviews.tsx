import { Fragment } from "react";

export default function Reviews() {
	return (
		<div className="mxd-section padding-grid-pre-mtext">
			<div className="mxd-container no-padding-container">
				<div className="mxd-block">
					<div className="container-fluid px-0">
						<div className="row gx-0">
							<div className="col-12 col-xl-5">
								<div className="mxd-container grid-container">
									<div className="mxd-block">
										<div className="mxd-section-title no-margin-desktop">
											<div className="container-fluid p-0">
												<div className="row g-0">
													<div className="col-12 mxd-grid-item no-margin">
														<div className="mxd-section-title__title anim-uni-in-up">
															<h2 className="reveal-type">Testimonios</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-xl-7">
								<div className="testimonials-slider overflow-hidden anim-uni-in-up">
									<div className="swiper-testimonials">
										<div className="swiper-wrapper">
											{Array.from({ length: 6 }).map((e, idx) => (
												<Fragment key={idx}>
													<ReviewCard
														{...{
															name: "Wilfrido Martínez",
															picture_src:
																"projects/img/testimonials/wilfrido.avif",
														}}
													/>
													<ReviewCard
														{...{
															name: "Miguelina Martínez",
															picture_src:
																"projects/img/testimonials/miguelina.avif",
														}}
													/>
												</Fragment>
											))}
										</div>

										<div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev animate-card-2">
											<a
												className="btn btn-round btn-round-small btn-outline slide-left anim-no-delay"
												href="#0"
												aria-label="Previous Slide"
											>
												<i className="ph ph-arrow-left"></i>
											</a>
										</div>
										<div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next animate-card-2">
											<a
												className="btn btn-round btn-round-small btn-outline slide-right anim-no-delay"
												href="#0"
												aria-label="Next Slide"
											>
												<i className="ph ph-arrow-right"></i>
											</a>
										</div>
									</div>
									<div className="testimonials-slider__shadow"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type ReviewCardProp = {
	name: string;
	picture_src: string;
};

const ReviewCard = ({ name, picture_src }: ReviewCardProp) => {
	return (
		<div className="swiper-slide">
			<div className="mxd-testimonials-card bg-base-tint radius-m">
				<div className="mxd-testimonials-card__content">
					<div className="mxd-testimonials-card__media anim-uni-in-up">
						<div className="mxd-testimonials-card__photo">
							<img src={picture_src} alt={name} />
						</div>
					</div>
					<div className="mxd-testimonials-card__author">
						<p className="mxd-testimonials-card__name anim-uni-in-up">{name}</p>
						<p className="mxd-testimonials-card__position t-small anim-uni-in-up mt-5!">
							<a
								className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up"
								href="#0"
							>
								<span className="btn-caption">Ver video</span>
								<i className="ph ph-arrow-up-right"></i>
							</a>
						</p>
					</div>
					<div className="mxd-testimonials-card__text w-200">
						{/* <p className="anim-uni-in-up">
							Working with Rayo team was an absolute pleasure! They took the
							time to understand our business needs and translated them into a
							beautifully designed, user-friendly website.
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};
