type StaffType = {
	name: string;
	position: string;
	description: string;
	picture_src: string;
	cv_src: string;
};

const staff = [
	{
		name: "Luca Cernuzzi",
		position: "Representante legal e investigador principal",
		description:
			"Responsable de la ejecución del proyecto, gestionando contratos y comunicaciones formales con AONACYT, con posibilidades de delegación.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
	{
		name: "Alberto Paccanaro",
		position: "Investigador asociado",
		description:
			"Lidera la investigación en biología computacional e inteligencia artificial.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
	{
		name: "Ruben Jimenez",
		position: "Investigador asociado",
		description:
			"Supervisa el desarrollo de modelos matemáticos y la caracterización de fármacos y sus efectos.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
	{
		name: "Mateo Torres",
		position: "Investigador asociado",
		description:
			"Supervisa el modelo matemático en especial en redes neuronales profundas y el estudio del estado del arte.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
	{
		name: "Aldo Galeano",
		position: "Investigador en formación",
		description:
			"Implementa y evalúa modelos predictivos para combinaciones de fármacos.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
	{
		name: "Marcelo Báez",
		position: "Investigador en formación",
		description:
			"Evalúa los modelos predictivos desarrollados y realiza comparaciones con métricas de machine learning.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
	{
		name: "María del Mar Sánchez",
		position: "Investigador en formación",
		description:
			"Desarrolla herramientas y visualizaciones interactivas de datos para explotar información biológica compleja.",
		picture_src: "/projects/img/team/800x920_team-01.webp",
		cv_src: "#",
	},
] as StaffType[];

export default function Staff() {
	return (
		<div className="mxd-section padding-default">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-team-cards">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin no-padding-bottom animate-card-3">
									<div className="mxd-team-cards__h2-block left-block">
										<div className="mxd-section-title pre-grid">
											<div className="container-fluid p-0">
												<div className="row g-0">
													<div className="col-12">
														<div className="mxd-section-title__title">
															<h2 className="reveal-type leading-none!">
																Nuestro equipo
															</h2>
														</div>
													</div>
													<div className="col-12">
														<div className="mxd-section-title__descr">
															<p className="anim-uni-in-up">
																Un equipo de experimentados investigadores en
																biología molecular, computación y inteligencia
																artificial, comprometidos en revolucionar la
																predicción de complejos proteicos.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-12 col-xl-8">
									<div className="container-fluid p-0">
										<div className="grid md:grid-cols-2">
											<TeamCard {...staff[0]} />
											<TeamCard {...staff[1]} />
										</div>
									</div>
								</div>

								<div className="col-12">
									<div className="container-fluid p-0">
										<div className="grid md:grid-cols-2 lg:grid-cols-3">
											<TeamCard {...staff[2]} />
											<TeamCard {...staff[3]} />
											<TeamCard {...staff[4]} />
											<TeamCard {...staff[5]} />
											<TeamCard {...staff[6]} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const TeamCard = ({
	name,
	position,
	description,
	picture_src,
	cv_src,
}: StaffType) => {
	return (
		<div className="mxd-team-cards__item mxd-grid-item no-margin-desktop padding-bottom-desktop animate-card-3">
			<div className="mxd-team-cards__media anim-uni-in-up">
				<div className="mxd-team-cards__photo">
					<img src={picture_src} alt={name} />
				</div>
				<div className="mxd-team-cards__socials">
					<a
						className="btn btn-anim tag tag-default tag-permanent"
						href={cv_src}
						target="_blank"
					>
						<span className="btn-caption">Ver ficha curricular</span>
					</a>
				</div>
			</div>
			<div className="mxd-team-cards__info">
				<p className="mxd-team-cards__name t-large t-bright t-caption">
					{name}
				</p>
				<p className="mxd-team-cards__position t-small t-medium t-140 font-bold!">
					{position}
				</p>
				<p className="mxd-team-cards__description text-2xl!">{description}</p>
			</div>
		</div>
	);
};
