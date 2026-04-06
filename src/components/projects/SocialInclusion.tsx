import { staticPath } from "../../utils/staticPath";

export default function SocialInnovation() {
	return (
		<div className="ds-team-ptb pt-30 lg:pt-145 tp-fixed-title-wrap-3 pb-40 lg:pb-100 hidden lg:block">
			<div className="container container-1510">
				<div className="row">
					<div className="col-lg-5">
						<div className="ds-team-heading lg:tp-fixed-title-3 pb-30 px-4 lg:px-0 text-center lg:text-start">
							<div className="tp_fade_anim" data-delay=".3">
								<p className="text-lg lg:text-2xl!">Nuestros proyectos basados en</p>
							</div>
							<h3 className="tp-section-title text-4xl lg:text-7xl! tl-unbounded mb-20 tp-split-title">
								Inclusión <br className="hidden lg:block" />
								Social
							</h3>
						</div>
					</div>

					<div className="col-lg-7 px-4 lg:px-0">
						<div className="ds-team-wrapper">
							<Card
								{...{
									image_src: "assets/img/projects/bootcamp.avif",
									url: "proyectos/bootcamp",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type CardProps = {
	image_src: string;
	url: string;
};

const Card = ({ image_src, url }: CardProps) => {
	return (
		<div
			className="ds-team-item mb-50 tp_fade_anim not-hide-cursor"
			data-delay=".3"
			data-cursor="Ver<br>Proyecto"
		>
			<div className="ds-team-item-thumb p-relative">
				<a href={staticPath(url)} className="d-block cursor-hide">
					<img src={staticPath(image_src)} alt="Portada de proyecto" />
				</a>
			</div>
		</div>
	);
};
