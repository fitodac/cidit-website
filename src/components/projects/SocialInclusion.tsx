import { staticPath } from "../../utils/staticPath";

export default function SocialInnovation() {
	return (
		<div className="ds-team-ptb pt-145 tp-fixed-title-wrap-3 pb-100">
			<div className="container container-1510">
				<div className="row">
					<div className="col-lg-5">
						<div className="ds-team-heading tp-fixed-title-3 pb-30">
							<div className="tp_fade_anim" data-delay=".3">
								<p className="text-2xl!">Nuestros proyectos basados en</p>
							</div>
							<h3 className="tp-section-title tl-unbounded mb-20 tp-split-title">
								Inclusión <br />
								Social
							</h3>
						</div>
					</div>

					<div className="col-lg-7">
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
