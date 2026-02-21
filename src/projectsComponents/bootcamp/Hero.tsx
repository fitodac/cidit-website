export default function Hero() {
	return (
		<div className="mxd-section bg-[#00C77F]">
			<div className="mxd-hero-09 pt-30! pb-100!">
				<div className="mxd-hero-09__wrap loading-wrap">
					<div className="mxd-hero-09__headline">
						<div className="hero-09-headline__title loading__item w-1/3">
							<h2 className="text-[10rem]! leading-none!">
								Proyecto Desarrollo Jóven
							</h2>
						</div>

						<div className="hero-09-headline__caption loading__item w-1/3 mt-20!">
							<p>
								Award-winning creative projects, over ten years of digital
								experience.
							</p>
						</div>

						<div className="hero-09-headline__tags loading__fade">
							<span className="tag tag-default tag-outline">Midjourney</span>
							<span className="tag tag-default tag-outline">AI</span>
							<span className="tag tag-default tag-outline">Editorial</span>
							<span className="tag tag-default tag-outline">
								Interactive design
							</span>
							<span className="tag tag-default tag-outline">
								Web experience
							</span>
							<span className="tag tag-default tag-outline">Web design</span>
							<span className="tag tag-default tag-outline">Branding</span>
							<span className="tag tag-default tag-outline">UI</span>
							<span className="tag tag-default tag-outline">UX</span>
							<span className="tag tag-default tag-outline">HTML</span>
							<span className="tag tag-default tag-outline">Frontend</span>
							<span className="tag tag-default tag-outline">Motion design</span>
							<span className="tag tag-default tag-outline">3d modeling</span>
							<span className="tag tag-default tag-outline">Video editing</span>
						</div>
					</div>
					<div className="mxd-hero-09__objects">
						<div className="hero-09-objects__image loading__item">
							<img
								src="/projects/img/bootcamp/hero.avif"
								alt="Hero Image"
								className="mxd-move w-auto! h-200! max-w-screen -translate-x-1/4"
							/>
						</div>
						<div className="hero-09-objects__item item-01 loading__item">
							<div className="mxd-counter horizontal">
								<p
									id="stats-counter-1"
									className="mxd-counter__number mxd-stats-number xsmall"
								>
									0
								</p>
								<p className="mxd-counter__descr t-140 t-bright t-small">
									Years of
									<br />
									experience
								</p>
							</div>
						</div>
						<div className="hero-09-objects__item item-02 loading__item">
							<div className="mxd-counter horizontal">
								<p
									id="stats-counter-2"
									className="mxd-counter__number mxd-stats-number xsmall"
								>
									0
								</p>
								<p className="mxd-counter__descr t-140 t-bright t-small">
									Successful
									<br />
									projects
								</p>
							</div>
						</div>
						<div className="hero-09-objects__item item-03 loading__item">
							<div className="mxd-hero__mark">
								<span className="mark-icon"></span>
								<span className="mark-text">Available for freelance</span>
							</div>
						</div>
					</div>
					{/* scroll for more */}
					<div className="mxd-hero-09__more loading__fade">
						<a
							className="btn btn-line-default btn-anim slide-down"
							href="#projects"
						>
							<span className="btn-caption">Conoce más</span>
							<i className="ph-bold ph-arrow-elbow-right-down"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
