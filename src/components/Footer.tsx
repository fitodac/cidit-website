import { staticPath } from "../utils/staticPath";

export default function Footer() {
	return (
		<footer className="tp-footer-7-area pt-110" data-bg-color="#010103">
			<div className="tp-footer-7-main-wrap pb-80">
				<div className="container container-1510">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div
								className="tp-footer-widget mb-40 tp-footer-3-col-2 tp_fade_anim"
								data-delay=".4"
							>
								<h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-30">
									quick links
								</h4>
								<div className="tp-footer-widget-menu">
									<ul>
										<li>
											<a className="tp-hover-line-white border-up" href={staticPath("/")}>
												Inicio
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/cursos")}
											>
												Cursos
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/proyectos")}
											>
												Proyectos
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/publicaciones")}
											>
												Publicaciones
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/nosotros")}
											>
												Nosotros
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/contacto")}
											>
												Contacto
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div
								className="tp-footer-widget mb-40 tp-footer-3-col-3 tp_fade_anim"
								data-delay=".5"
							>
								<h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-30">
									Proyectos
								</h4>
								<div className="tp-footer-widget-menu">
									<ul>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/proyectos/guarania")}
											>
												GuaranIA
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/proyectos/proteia")}
											>
												ProteIA
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/proyectos/cofar")}
											>
												Cofar
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/proyectos/bootcamp")}
											>
												Bootcamp
											</a>
										</li>
										<li>
											<a
												className="tp-hover-line-white border-up"
												href={staticPath("/proyectos/covida")}
											>
												Covida
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6"></div>

						<div className="col-lg-3 col-md-6 tp_fade_anim" data-delay=".6">
							<div className="tp-footer-widget mb-40 tp-footer-3-col-4">
								<h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-40">
									Suscríbete a nuestro newsletter
								</h4>
								<div className="tp-footer-widget-input p-relative">
									<input type="text" placeholder="Email" />
									<div className="tp-footer-widget-input-remember">
										<input id="remember" type="checkbox" />
										<label htmlFor="remember">
											Mantenemos todos tus datos confidenciales y no los
											compartiremos con terceros.
										</label>
									</div>
									<button className="tp-btn-green input-hover">
										Suscribirme
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tp-footer-7-bottom-wrap">
				<div className="container container-1510">
					<div className="tp-footer-7-bottom">
						<div className="row align-items-center">
							<div className="col-md-8">
								<div
									className="tp-footer-7-logo mb-40 tp_fade_anim"
									data-delay=".3"
									data-fade-from="bottom"
									data-ease="bounce"
								>
									<img
										src={staticPath("assets/img/logo-white.svg")}
										alt="CIDIT logo"
										className="w-2/3"
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div
									className="ds-footer-btn z-index-1 text-md-end mb-40 tp_fade_anim"
									data-delay=".5"
									data-fade-from="bottom"
									data-ease="bounce"
								>
									<a className="tp-btn-circle shadow-circle" href={staticPath("/contacto")}>
										<span>
											<svg
												width="16"
												height="14"
												viewBox="0 0 16 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 13L13 2L3.85071 3.35308"
													stroke="currentcolor"
													strokeWidth="1.5"
												></path>
											</svg>
										</span>
										Contáctanos
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tp-footer-3-copyright-area">
				<div className="container container-1510">
					<div className="ds-copyright-wrap">
						<div className="row">
							<div className="col-xl-12">
								<div className="tp-footer-3-copyright-text text-center">
									<p>
										2026{" "}
										<a className="tp-line-black" href="#">
											CIDIT
										</a>
										.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
