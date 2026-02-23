import { staticPath } from "../../utils/staticPath";
import { cn } from "../../utils/cn.ts";

export default function Hero() {
	return (
		<div className="mxd-section mxd-section-inner-headline padding-s-text-pre-block bg-gn-primary-600! relative overflow-hidden">
			<img
				src={staticPath("projects/img/guarania/iso-2.svg")}
				alt="Iso"
				className="w-auto h-230! top-1/2 -right-145 absolute -translate-y-1/3 opacity-15 rotate-30"
			/>

			<div className="mxd-container grid-container">
				<div className="mxd-block loading-wrap">
					<div className="container-fluid px-0">
						<div className="row gx-0">
							<div className="col-12 col-xl-2 mxd-grid-item no-margin" />

							<div className="col-12 col-xl-8 mxd-grid-item no-margin">
								<div className="mxd-block__content">
									<div className="mxd-block__inner-headline">
										<h2
											className={cn(
												"inner-headline__title headline-img-before headline-img-02 loading__item text-white!",
												"before:hidden! before:rounded-full! lg:before:w-80! lg:before:h-40! lg:before:inline-flex!",
												'before:bg-[url("projects/img/guarania/tupi-guarani.jpg")]!'
											)}
										>
											Integrando el idioma guaraní en el ámbito digital
										</h2>
										<p className="inner-headline__text t-large t-bright loading__item text-white!">
											Un proyecto que busca llevar el idioma guaraní al mundo
											digital mediante herramientas basadas en inteligencia
											artificial para ayudar a poblaciones guaraní-hablantes a
											acceder a productos y servicios que mejoren su calidad de
											vida
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="h-141" />
		</div>
	);
}
