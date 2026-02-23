import { useEffect } from "react";
import { cn } from "../utils/cn";
import { staticPath } from "../utils/staticPath";

type Props = {
	baseLogoColor: "white" | "black";
	baseMenuLight: boolean;
	pathname?: string;
};

export default function Header({
	baseLogoColor,
	baseMenuLight,
	pathname,
}: Props) {
	return (
		<div
			id="header-sticky"
			className="tp-header-area tp-header-ptb tp-header-blur sticky-white-bg header-transparent"
		>
			<div className="w-full px-6!">
				<div className="flex justify-between gap-10 md:gap-20 md:justify-center">
					<div className="flex items-center">
						<div className="tp-header-logo">
							<a href={staticPath("/")}>
								<img
									data-width="150"
									src={staticPath(`assets/img/logo-${baseLogoColor}.svg`)}
									alt=""
									className="main-logo"
								/>
							</a>
						</div>
					</div>

					<div className="hidden lg:flex">
						<div className="tp-header-box text-center">
							<div
								className={cn(
									"tp-header-menu tp-header-dropdown dropdown-white-bg",
									!baseMenuLight && "tp-header-5-menu"
								)}
							>
								<nav className="tp-mobile-menu-active">
									<ul>
										<li>
											{pathname === "/" ? (
												<span>Inicio</span>
											) : (
												<a href={staticPath("/")}>Inicio</a>
											)}
										</li>
										<li>
											{pathname === "/cursos" ? (
												<span>Cursos</span>
											) : (
												<a href={staticPath("/cursos")}>Cursos</a>
											)}
										</li>
										<li>
											{pathname === "/proyectos" ? (
												<span>Proyectos</span>
											) : (
												<a href={staticPath("/proyectos")}>Proyectos</a>
											)}
										</li>
										<li>
											{pathname === "/publicaciones" ? (
												<span>Publicaciones</span>
											) : (
												<a href={staticPath("/publicaciones")}>Publicaciones</a>
											)}
										</li>
										<li>
											{pathname === "/nosotros" ? (
												<span>Nosotros</span>
											) : (
												<a href={staticPath("/nosotros")}>Nosotros</a>
											)}
										</li>
										<li>
											{pathname === "/contacto" ? (
												<span>Contacto</span>
											) : (
												<a href={staticPath("/contacto")}>Contacto</a>
											)}
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
