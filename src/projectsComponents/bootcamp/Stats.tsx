import { Fragment } from "react";

export default function Stats() {
	return (
		<Fragment>
			<div className="mxd-section padding-mtext-pre-grid pt-40!">
				<div className="mxd-container fullwidth-container">
					<div className="mxd-block">
						<div className="marquee marquee-right--gsap muted-extra">
							<div className="marquee__toright">
								{Array.from({ length: 3 }).map((e, idx) => (
									<div className="marquee__item one-line item-regular text">
										<p className="marquee__text">Sobre nuestra experiencia</p>
										<span className="marquee__text">&middot;</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mxd-section padding-default">
				<div className="mxd-container grid-container">
					<div className="mxd-block">
						<div className="mxd-stats-simple">
							<div className="container-fluid p-0">
								<div className="row g-0 mxd-stats-simple">
									<Stat
										{...{
											total: "1047",
											description: "Participantes de la convocatoria",
										}}
									/>

									<Stat {...{ total: "485", description: "Seleccionados" }} />

									<Stat
										{...{
											total: "223",
											description: "Egresados de la experiencia",
										}}
									/>

									<Stat
										{...{
											total: "14",
											description:
												"Mentores formados para replicar la experiencia",
										}}
									/>

									<Stat
										{...{
											total: "45",
											description:
												"Jóvenes incluídos en el mercado laboral (en desarrollo)",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

const Stat = ({
	total,
	description,
}: {
	total: string;
	description: string;
}) => (
	<div className="col-12 col-lg mxd-stats-simple__item mxd-grid-item first:[&>div]:border-transparent!">
		<div className="mxd-stats-simple__inner animate-card-4 lg:h-70!">
			<div className="mxd-counter">
				<p
					id="stats-counter-1"
					className="mxd-stats-number mxd-stats-simple__counter"
				>
					{total}
				</p>
			</div>

			<p className="mxd-stats-simple__descr t-140 t-bright">{description}</p>
		</div>
	</div>
);
