import parse from "html-react-parser";

export default function Courses() {
	return (
		<div className="bnc-service-area bnc-service-ptb bg-primary py-30!">
			<div className="container container-1510">
				<div className="row align-items-end">
					<div className="col-lg-8">
						<div className="bnc-service-title-box pb-70">
							<span
								className="tp-section-subtitle fs-16 st-dot tp_fade_anim text-white! before:bg-white!"
								data-delay=".3"
							>
								Calendario de cursos 2026
							</span>

							<h3 className="tp-section-title fs-72 tp-text-revel text-white!">
								Lo que puedes aprender
							</h3>
						</div>
					</div>
				</div>

				<section className="grid grid-cols-3 gap-10">
					<Card
						{...{
							month: "Febrero",
							title:
								"Gestión de Contratos de Obra Pública con Experiencia FIDIC",
							duration: "12 horas",
							professors: ["Ing. Mauricio Guglielmi"],
							link: "/cursos/gestion-de-contratos-de-obra-publica-con-experiencia-fidici",
						}}
					/>

					<Card
						{...{
							month: "Marzo",
							title: "Curso Costo 4W 2026",
							duration: "24 horas",
							professors: ["Ing. Carlos Aguade"],
							link: "/cursos/curso-costo-4w-2026",
						}}
					/>

					<Card
						{...{
							month: "Abril",
							title:
								"Proceso de Estabilización de Subrasantes, Sub-bases y Bases de Camino",
							duration: "42 horas",
							professors: [
								"Dr. Ing. Gerardo Botasso",
								"Dr. Ing. Hugo Bianchetto",
							],
							link: "/cursos/proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino",
						}}
					/>

					<Card
						{...{
							month: "Mayo",
							title: "Tecnología de Hormigón Aplicada",
							duration: "105 horas",
							professors: ["CDH Ing. Maximiliano Segerer y equipo"],
							link: "/cursos/tecnologias-de-hormigon-aplicada",
						}}
					/>

					<Card
						{...{
							month: "Junio",
							title:
								"Planificación y Administración de la Red Vial<br/>Concesiones – C.RE.MA - GMANS",
							duration: "24 horas",
							professors: [
								"Dr. Ing. Gerardo Botasso",
								"Dr. Ing. Hugo Bianchetto",
							],
							link: "/cursos/planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans",
						}}
					/>

					<Card
						{...{
							month: "Agosto",
							title: "Inspección, Evaluación y Gerenciamiento de Puentes",
							duration: "24 horas",
							professors: [
								"Ing. Pedro Manuel Lozada",
								"Arq. Gustavo Javier Bandel",
							],
							link: "/cursos/inspeccion-evaluacion-y-gerenciamiento-de-puentes",
						}}
					/>

					<Card
						{...{
							month: "Septiembre",
							title: "Control de Obras Viales",
							duration: "18 horas",
							professors: ["Dr. Ing. Gerardo Botasso"],
							link: "/cursos/control-de-obras-viales",
						}}
					/>

					<Card
						{...{
							month: "Octubre",
							title: "Perfil 4W 2026",
							duration: "24 horas",
							professors: ["Ing. Carlos Aguade"],
							link: "/cursos/perfil-4w-2026",
						}}
					/>

					<Card
						{...{
							month: "Noviembre",
							title: "Mantenimiento de Hospitales",
							duration: "10 horas",
							professors: ["Arq. Jorge Raúl Carrasquet", "Arq. Jorge Manuel"],
							link: "/cursos/mantenimiento-de-hospitales",
						}}
					/>
				</section>
			</div>
		</div>
	);
}

type CardProps = {
	month: string;
	title: string;
	duration: string;
	professors: string[];
	link: string;
};

const Card = ({ month, title, duration, professors, link }: CardProps) => {
	return (
		<div className="">
			<div className="bnc-service-item w-full hover:shadow-2xl hover:shadow-black/30">
				<div className="bnc-service-item-content">
					<div className="bnc-service-item-wrap">
						<h4 className="bnc-service-item-title">
							<a className="tp-line-black" href={link}>
								{parse(title)}
							</a>
						</h4>
						<div className="bnc-service-item-text">
							<p>
								El objetivo del curso es formarte en el análisis, administración
								y ejecución de contratos públicos bajo el modelo FIDIC,
								incorporando herramientas prácticas aplicables al contexto local
								y exigencias internacionales.
							</p>
						</div>
					</div>
					<div className="bnc-service-item-btn-box z-index-1 d-flex justify-content-between align-items-center">
						<div className="bnc-service-item-btn">
							<a
								className="tp-btn-green bdr-5 fw-700 ff-bricolage bg-none-style tp-btn-anim"
								href={link}
							>
								<div className="tp-btn-text">Más info</div>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="10"
										viewBox="0 0 18 10"
										fill="none"
									>
										<path
											d="M8.29231 0C10.773 2.00217 14.7748 3.89283 18 5.00061C14.7748 6.10761 10.7731 7.99749 8.29278 10L10.0219 5.5746L0.619514 5.57487C0.455171 5.57467 0.297634 5.51408 0.181516 5.40642C0.0948336 5.32613 0.0358078 5.22386 0.011901 5.11253C-0.0120059 5.0012 0.00027696 4.8858 0.0472025 4.78093C0.0941274 4.67606 0.173586 4.58643 0.275531 4.52336C0.377475 4.46029 0.497332 4.42662 0.619946 4.4266L10.022 4.42665L8.29231 0Z"
											fill="currentColor"
										/>
									</svg>
								</span>
							</a>
						</div>
						<div className="bnc-service-item-number">
							<span>{month}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
