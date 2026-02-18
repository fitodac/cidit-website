export default function Blog() {
	return (
		<div className="mxd-section padding-blog">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-section-title pre-grid">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-5 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrtitle">
										<h2 className="reveal-type anim-uni-in-up">My journal</h2>
									</div>
								</div>
								<div className="col-12 col-xl-4 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrdescr">
										<p className="anim-uni-in-up">
											Inspiring ideas, creative insights, and the latest in
											design and tech. Fueling innovation for your digital
											journey.
										</p>
									</div>
								</div>
								<div className="col-12 col-xl-3 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrcontrols anim-uni-in-up">
										<a
											className="btn btn-anim btn-default btn-outline slide-right-up"
											href="blog-standard.html"
										>
											<span className="btn-caption">All Articles</span>
											<i className="ph-bold ph-arrow-up-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mxd-block">
					<div className="mxd-blog-preview">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
									<a
										className="mxd-blog-preview__media"
										href="blog-article.html"
									>
										<div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small"></div>
										<div className="mxd-preview-hover">
											<i className="mxd-preview-hover__icon">
												<img src="/projects/img/icons/icon-eye.svg" alt="Eye Icon" />
											</i>
										</div>
										<div className="mxd-blog-preview__tags">
											<span className="tag tag-default tag-permanent">
												Concept
											</span>
											<span className="tag tag-default tag-permanent">
												Editorial
											</span>
										</div>
									</a>
									<div className="mxd-blog-preview__data">
										<a className="anim-uni-in-up" href="blog-article.html">
											<span>Frontend innovations</span> and user journeys
										</a>
									</div>
								</div>

								<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
									<a
										className="mxd-blog-preview__media"
										href="blog-article.html"
									>
										<div className="mxd-blog-preview__image blog-preview-image-2 parallax-img-small"></div>
										<div className="mxd-preview-hover">
											<i className="mxd-preview-hover__icon">
												<img src="/projects/img/icons/icon-eye.svg" alt="Eye Icon" />
											</i>
										</div>
										<div className="mxd-blog-preview__tags">
											<span className="tag tag-default tag-permanent">
												UI/UX
											</span>
											<span className="tag tag-default tag-permanent">
												Development
											</span>
										</div>
									</a>
									<div className="mxd-blog-preview__data">
										<a className="anim-uni-in-up" href="blog-article.html">
											Branding in creating
											<span>digital experiences</span>
										</a>
									</div>
								</div>

								<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
									<a
										className="mxd-blog-preview__media"
										href="blog-article.html"
									>
										<div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small"></div>
										<div className="mxd-preview-hover">
											<i className="mxd-preview-hover__icon">
												<img src="/projects/img/icons/icon-eye.svg" alt="Eye Icon" />
											</i>
										</div>
										<div className="mxd-blog-preview__tags">
											<span className="tag tag-default tag-permanent">
												News
											</span>
											<span className="tag tag-default tag-permanent">AI</span>
										</div>
									</a>
									<div className="mxd-blog-preview__data">
										<a className="anim-uni-in-up" href="blog-article.html">
											Elevating <span>digital workshops</span> with engaging
											design
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
