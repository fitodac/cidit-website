import { staticPath } from "../../utils/staticPath";

const courses = [
	{
		sectionHeadline: "Skill Builders",
		sectionSubHeadline: "Cursos individuales",
		description:
			"Ideal para quienes necesitan una habilidad específica para un proyecto o entrevista.",
		courses: [
			{
				title: "Fundamentos Web Pro",
				description: "Estructura y diseño con HTML5 y Css3",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "JavaScript Moderno",
				description: "Lógica de programación y dinamismo en el navegador.",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Python desde Cero",
				description: "El lenguaje más versatil: automatización de scripts.",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Frameworks Ágiles",
				description: "Desarrollo rápido con Bootstrap y VueJS.",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Arquitectura de Datos",
				description: "Bases de Datos y SQL para el mundo real.",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Backend con Django",
				description: "Crea aplicaciones robustas y escalables.",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Intro al Data Analysis",
				description: "T oma decisiones basadas en datos reales.",
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
		],
	},
	{
		sectionHeadline: "Career Paths",
		sectionSubHeadline: "Carreras especializadas",
		description:
			"Programas diseñados para conseguir un perfil profesional en tiempo récord.",
		courses: [
			{
				title: "Desarrollador Front-End Pro",
				description: null,
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Desarrollador Back-End Pro",
				description: null,
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
		],
	},
	{
		sectionHeadline: "Ingeniero Web con Python",
		sectionSubHeadline: "Full Stack",
		description:
			"La transformación total, de principiante a ingeniero web, el programa definitivo para dominar el desarrollo de principio a fin.",
		courses: [
			{
				title: "Desarrollador Front-End Pro",
				description: null,
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
			{
				title: "Desarrollador Back-End Pro",
				description: null,
				link: "documents/ofertas-cursos-programacion-djcode.pdf",
			},
		],
	},
];

export default function Courses() {
	return (
		<div className="mxd-section overflow-hidden padding-default mobile-title pt-50! pb-20!">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-section-title">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-8 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrtitle anim-uni-in-up">
										<h2 className="reveal-type">
											Ofertas de cursos de programación Dj Code
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{courses.map((section, index) => (
					<div
						className={`mxd-block ${index !== courses.length - 1 ? "pb-34!" : ""}`}
						key={index}
					>
						<div className="mxd-awards-list">
							<div className="pb-10! px-9!">
								<h3 className="text-7xl! font-bold!">
									{section.sectionHeadline}
								</h3>

								{section.sectionSubHeadline && (
									<p className="text-gray-400! font-bold! mt-3!">
										{section.sectionSubHeadline}
									</p>
								)}

								{section.description && (
									<p className="">{section.description}</p>
								)}
							</div>
							{section.courses.map((e, idx) => (
								<div className="mxd-awards-list__item" key={idx}>
									<div className="mxd-awards-list__border anim-uni-in-up"></div>
									<div className="mxd-awards-list__inner">
										<div className="container-fluid px-0">
											<div className="row gx-0">
												<div className="col-12 col-xl-8 mxd-grid-item no-margin">
													<div className="mxd-awards-list__title anim-uni-in-up">
														<div className="mxd-awards-list__icon">
															<i className="ph ph-arrow-right"></i>
														</div>
														<h3 className="text-5xl!">{e.title}</h3>
													</div>
												</div>
												<div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
													<div className="mxd-awards-list__tagslist">
														{e.description && (
															<p className="t-small">{e.description}</p>
														)}
													</div>
												</div>
												<div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
													<div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
														{e.link && (
															<a
																className="btn btn-anim btn-default btn-outline slide-right-up"
																href={staticPath(e.link)}
															>
																<span className="btn-caption">Programa</span>
																<i className="ph-bold ph-arrow-up-right"></i>
															</a>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="mxd-awards-list__border anim-uni-in-up"></div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
