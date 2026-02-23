import { staticPath } from "../../utils/staticPath";

export default function Projects_old() {
	return (
		<div className="sa-work-ptb pt-150 mb-200">
			<div className="container container-1510">
				<div className="row">
					<div className="col-lg-12">
						<div className="sa-work-title-box text-center mb-70">
							<h4 className="tp-section-title tp-split-title text-gray-300! lg:text-[10rem]! xl:text-[12rem]!">
								Proyectos
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="sa-work-wrap">
				{/* GuaranIA */}
				<div
					className="sa-work-item sa-work-panel p-relative not-hide-cursor mb-60"
					data-cursor="Ver<br>Proyecto"
				>
					<div className="sa-work-portfolio-thumb">
						<a
							className="d-block cursor-hide"
							href={staticPath("/proyectos/guarania")}
						>
							<img
								src={staticPath("assets/img/home/projects/guarania.webp")}
								alt="GuaranIA"
							/>
						</a>
					</div>
				</div>
				{/* Proteia */}
				<div
					className="sa-work-item sa-work-panel p-relative not-hide-cursor mb-60"
					data-cursor="Ver<br>Proyecto"
				>
					<div className="sa-work-portfolio-thumb">
						<a
							className="d-block cursor-hide"
							href={staticPath("/proyectos/proteia")}
						>
							<img
								src={staticPath("assets/img/home/projects/proteia.webp")}
								alt="Proteia"
							/>
						</a>
					</div>
				</div>
				{/* Cofar */}
				<div
					className="sa-work-item sa-work-panel p-relative mb-60"
					data-cursor="Ver<br>Proyecto"
				>
					<div className="sa-work-portfolio-thumb">
						<a
							className="d-block cursor-hide"
							href={staticPath("/proyectos/cofar")}
						>
							<img
								src={staticPath("assets/img/home/projects/cofar.webp")}
								alt=""
							/>
						</a>
					</div>
				</div>
				{/* Bootcamp */}
				<div
					className="sa-work-item sa-work-panel p-relative mb-60"
					data-cursor="Ver<br>Proyecto"
				>
					<div className="sa-work-portfolio-thumb">
						<a
							className="d-block cursor-hide"
							href={staticPath("/proyectos/bootcamp")}
						>
							<img
								src={staticPath("assets/img/home/projects/bootcamp.webp")}
								alt=""
							/>
						</a>
					</div>
				</div>
				{/* Covida */}
				<div
					className="sa-work-item sa-work-panel p-relative mb-60"
					data-cursor="Ver<br>Proyecto"
				>
					<div className="sa-work-portfolio-thumb">
						<a
							className="d-block cursor-hide"
							href={staticPath("/proyectos/covida")}
						>
							<img
								src={staticPath("assets/img/home/projects/covida.webp")}
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
