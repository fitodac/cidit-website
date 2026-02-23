import { staticPath } from "../../utils/staticPath";

export default function PageHeader() {
	return (
		<div className="tp-breadcrumb-s10-style z-1 black-bg relative overflow-hidden">
			<div data-speed=".4" className="inset-x-0 top-0 absolute">
				<img
					src={staticPath("assets/img/48e9ffa018291b1d20245ce3c339461d.avif")}
					alt="hero background"
					className="w-full opacity-50 object-cover"
				/>
			</div>

			<div className="container position-relative">
				<span
					className="tp-breadcrumb-s10-shape-2 d-none d-xl-block"
					data-speed="1.1"
				>
					<svg
						width="48"
						height="44"
						viewBox="0 0 48 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0.214844 0H47.7824V41.6216L0.214844 0Z" fill="#F5F7F5" />
						<path
							d="M0.214844 23.7838H22.8094V44L0.214844 23.7838Z"
							fill="#C9F31D"
						/>
					</svg>
				</span>

				<div className="row">
					<div className="col-12">
						<div className="tp-breadcrumb-s10-wrap text-center">
							<h2 className="tp-breadcrumb-s10-title mb-25 tp-split-title">
								Publicaciones
							</h2>
							<div className="tp_fade_anim" data-delay=".5">
								<p className="tp-breadcrumb-s10-subtitle">
									Accedé al repositorio de documentos del CIDIT: boletines,
									informes, guías y materiales descargables.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
