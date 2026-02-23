import { staticPath } from "../utils/staticPath";

type Props = {
	title: string;
	logoSrc: string;
	logoHeight?: string;
};

export default function Header({
	title,
	logoSrc,
	logoHeight = "h-12!",
}: Props) {
	return (
		<>
			<nav className="mxd-nav__wrap" data-lenis-prevent="">
				<div className="mxd-nav__contain loading__fade">
					<a href="#0" className="mxd-nav__hamburger" aria-label="Menu">
						<div className="hamburger__base"></div>
						<div className="hamburger__line"></div>
						<div className="hamburger__line"></div>
					</a>
				</div>

				<div className="mxd-menu__wrapper">
					<div className="mxd-menu__base"></div>

					<div className="mxd-menu__contain">
						<div className="mxd-menu__inner">
							<div className="mxd-menu__left">
								<p className="mxd-menu__caption menu-fade-in">
									Proyectos de innovación tecnológica que transforman Paraguay
								</p>
								<div className="main-menu">
									<nav className="main-menu__content">
										<ul id="main-menu" className="main-menu__accordion">
											<li className="main-menu__item">
												<a
													className="main-menu__link btn btn-anim"
													href={staticPath("/proyectos/guarania")}
												>
													<span className="btn-caption">GuaranIA</span>
												</a>
											</li>
											<li className="main-menu__item">
												<a
													className="main-menu__link btn btn-anim"
													href={staticPath("/proyectos/proteia")}
												>
													<span className="btn-caption">ProteIA</span>
												</a>
											</li>
											<li className="main-menu__item">
												<a
													className="main-menu__link btn btn-anim"
													href={staticPath("/proyectos/cofar")}
												>
													<span className="btn-caption">Cofar</span>
												</a>
											</li>
											<li className="main-menu__item">
												<a
													className="main-menu__link btn btn-anim"
													href={staticPath("/proyectos/bootcamp")}
												>
													<span className="btn-caption">Bootcamp</span>
												</a>
											</li>
											<li className="main-menu__item">
												<a
													className="main-menu__link btn btn-anim"
													href={staticPath("/proyectos/covida")}
												>
													<span className="btn-caption">Covida</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>

							<div className="mxd-menu__right">
								<div className="menu-promo">
									<div className="menu-promo__content">
										<div className="menu-promo__caption menu-fade-in px-6!">
											<div className="flex justify-end!">
												<img
													src={staticPath("/assets/img/logo-white.svg")}
													alt="Cidit"
													className="w-auto! h-10!"
												/>
											</div>

											<p className="text-white text-xl leading-tight! text-right mt-5!">
												Proyectos de desarrollo y formación tecnológica
											</p>
										</div>
										<div className="menu-promo__video">
											<video
												className="menu-video"
												id="inner-video"
												preload="auto"
												autoPlay
												loop
												muted
												poster={staticPath(
													"/projects/video/540x310_video-01.webp"
												)}
											>
												<source
													type="video/mp4"
													src={staticPath(
														"/projects/video/540x310_video-01.mp4"
													)}
												/>
												<source
													type="video/webm"
													src={staticPath(
														"/projects/video/540x310_video-01.webm"
													)}
												/>
												<source
													type="video/ogv"
													src={staticPath(
														"/projects/video/540x310_video-01.ogv"
													)}
												/>
											</video>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<header id="header" className="mxd-header">
				<div className="mxd-header__logo loading__fade">
					<h1 className="mxd-logo">
						{logoSrc.length && (
							<img src={logoSrc} alt={title} className={logoHeight} />
						)}

						<span className="sr-only">{title}</span>
					</h1>
				</div>

				<div className="mxd-header__controls loading__fade">
					<a
						className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up w-70!"
						href={staticPath("/")}
						aria-label="Cidit"
					>
						<img
							src={staticPath("/assets/img/logo-black.svg")}
							alt="Cidit"
							className="w-36! h-8!"
						/>

						<span className="sr-only">Cidit</span>
						<i className="ph-bold ph-arrow-up-right"></i>
					</a>
				</div>
			</header>
		</>
	);
}
