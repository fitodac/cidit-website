import { staticPath } from "../utils/staticPath";

type Props = {
	title: string;
	logoSrc: string;
};

export default function Footer({ title, logoSrc }: Props) {
	return (
		<footer id="mxd-footer" className="mxd-footer">
			<div className="mxd-footer__text-wrap">
				<div className="fullwidth-text__tl-trigger"></div>
				<div className="mxd-footer__fullwidth-text personal anim-top-to-bottom">
					<img
						src={logoSrc}
						alt={title}
						className="w-full! h-auto! opacity-5 lg:max-h-81!"
					/>
				</div>
			</div>

			<div className="mxd-footer__footer-blocks">
				<div className="footer-blocks__column animate-card-3 h-auto!">
					<div className="footer-blocks__card fullheight-card">
						<div className="footer-blocks__nav">
							<ul className="footer-nav gap-16! md:flex-row! md:justify-center">
								<li className="footer-nav__item anim-uni-in-up">
									<a
										href={staticPath("/proyectos/guarania")}
										className="footer-nav__link btn-anim"
									>
										<span className="btn-caption">GuaranIA</span>
									</a>
								</li>
								<li className="footer-nav__item anim-uni-in-up">
									<a
										href={staticPath("/proyectos/proteia")}
										className="footer-nav__link btn-anim"
									>
										<span className="btn-caption">ProteIA</span>
									</a>
								</li>
								<li className="footer-nav__item anim-uni-in-up">
									<a
										href={staticPath("/proyectos/cofar")}
										className="footer-nav__link btn-anim"
									>
										<span className="btn-caption">Cofar</span>
									</a>
								</li>
								<li className="footer-nav__item anim-uni-in-up">
									<a
										href={staticPath("/proyectos/bootcamp")}
										className="footer-nav__link btn-anim"
									>
										<span className="btn-caption">Bootcamp</span>
									</a>
								</li>
								<li className="footer-nav__item anim-uni-in-up">
									<a
										href={staticPath("/proyectos/covida")}
										className="footer-nav__link btn-anim"
									>
										<span className="btn-caption">Covida</span>
									</a>
								</li>
							</ul>
						</div>

						<div className="footer-blocks__links anim-uni-in-up">
							<div></div>
							<a
								className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
								href={staticPath("/")}
							>
								<span className="btn-caption">CIDIT</span>
								<i className="ph ph-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
