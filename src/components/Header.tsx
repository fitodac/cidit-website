export default function Header() {
	return (
		<div
			id="header-sticky"
			className="tp-header-area tp-header-ptb tp-header-blur sticky-white-bg header-transparent"
		>
			<div className="w-full px-6!">
				<div className="flex justify-between gap-10 md:gap-20 md:justify-center">
					<div className="flex items-center">
						<div className="tp-header-logo">
							<a href="/">
								<img
									data-width="150"
									src="/assets/img/logo-white.svg"
									alt=""
									className="main-logo"
								/>
							</a>
						</div>
					</div>

					<div className="hidden lg:flex">
						<div className="tp-header-box text-center">
							<div className="tp-header-menu tp-header-dropdown dropdown-white-bg">
								<nav className="tp-mobile-menu-active">
									<ul>
										<li>
											<a href="/">Inicio</a>
										</li>
										<li>
											<a href="/cursos">Cursos</a>
										</li>
										<li>
											<a href="/proyectos">Proyectos</a>
										</li>
										<li>
											<a href="/publicaciones">Publicaciones</a>
										</li>
										<li>
											<a href="/nosotros">Nosotros</a>
										</li>
										<li>
											<a href="/contacto">Contacto</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-6 lg:hidden">
						<div className="tp-header-right d-flex align-items-center justify-content-end">
							<div className="tp-header-14-bar-wrap">
								<button className="tp-header-8-bar tp-offcanvas-open-btn inline-flex">
									<span>Menu</span>
									<span>
										<svg
											width="24"
											height="8"
											viewBox="0 0 24 8"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M0 0H14V1.5H0V0Z" fill="currentcolor" />
											<path d="M0 6H24V7.5H0V6Z" fill="currentcolor" />
										</svg>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
