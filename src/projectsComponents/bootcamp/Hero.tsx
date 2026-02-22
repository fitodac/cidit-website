export default function Hero() {
	return (
		<div className="mxd-section bg-[#00C77F]">
			<div className="mxd-hero-09 pt-20! pb-100!">
				<div className="mxd-hero-09__wrap loading-wrap xl:h-[90vh]!">
					<div className="mxd-hero-09__headline">
						<div className="hero-09-headline__title loading__item w-200">
							<h2 className="text-[10rem]! leading-none!">
								Bootcamp Desarrollo Jóven
							</h2>
						</div>

						<div className="hero-09-headline__caption loading__item w-200 mt-20!">
							<p>
								Proyecto de formación tecnológica con alcance nacional, enfocado
								en el desarrollo de talento joven.
							</p>
						</div>

						<div className="hero-09-headline__tags loading__fade">
							<span className="tag tag-default tag-outline">Itapúa</span>
							<span className="tag tag-default tag-outline">Alto Paraná</span>
							<span className="tag tag-default tag-outline">Caaguazú</span>
							<span className="tag tag-default tag-outline">Central</span>
							<span className="tag tag-default tag-outline">Asunción</span>
						</div>
					</div>

					<div className="mxd-hero-09__objects top-60!">
						<div className="hero-09-objects__image loading__item">
							<img
								src="/projects/img/bootcamp/hero.avif"
								alt="Hero Image"
								className="mxd-move w-auto! h-200! max-w-screen -translate-x-1/4"
							/>
						</div>

						<div className="hero-09-objects__item item-01 loading__item top-100!">
							<div className="mxd-counter horizontal">
								<p
									id="stats-counter-1"
									className="mxd-counter__number mxd-stats-number xsmall"
								>
									1047
								</p>
								<p className="mxd-counter__descr t-140 t-bright t-small">
									Participantes
								</p>
							</div>
						</div>

						<div className="hero-09-objects__item item-02 loading__item top-130!">
							<div className="mxd-counter horizontal">
								<p
									id="stats-counter-2"
									className="mxd-counter__number mxd-stats-number xsmall"
								>
									485
								</p>
								<p className="mxd-counter__descr t-140 t-bright t-small">
									Seleccionados
								</p>
							</div>
						</div>

						<div className="hero-09-objects__item item-03 loading__item top-160! -right-20!">
							<div className="mxd-counter horizontal">
								<p
									id="stats-counter-2"
									className="mxd-counter__number mxd-stats-number xsmall"
								>
									223
								</p>
								<p className="mxd-counter__descr t-140 t-bright t-small">
									Egresados
								</p>
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
