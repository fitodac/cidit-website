import parse from "html-react-parser";

export default function Courses() {
	return (
		<div className="tp-service-area tp-item-anime-area-md tp-fixed-title-wrap position-relative tp-about-dgm-ptb pt-120 pb-130">
			<span className="tp-service-inner-2-shape" data-speed="1.1">
				<svg
					width="109"
					height="117"
					viewBox="0 0 109 117"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M108 45.004C101.431 48.7694 86.3472 54.7917 72.3355 54.9021M72.3355 54.9021C63.2351 54.9739 54.5867 52.5518 49.0166 45.3978C41.9197 35.9121 35.3239 15.1685 63.2763 2.37334C73.8209 -2.45343 84.3714 5.43994 80.3657 26.102C79.1386 32.4314 77.1035 43.5113 72.3355 54.9021ZM72.3355 54.9021C68.1235 64.9649 61.7787 75.2705 51.9743 82.7581C41.4633 90.7852 19.4538 99.558 3.35013 98.7752M3.35013 98.7752C2.55152 98.7364 1.76744 98.6741 1 98.587M3.35013 98.7752C2.51408 98.6783 1.72434 98.6171 1 98.587M3.35013 98.7752C11.5166 99.7216 24.1022 104.069 23.3176 116M1 98.587C6.10855 98.6647 17.9069 93.9861 24.2319 74.6501M82.1839 64.3617C80.7331 69.1506 73.4038 84.7265 58.5056 91.7165"
						stroke="#010103"
						stroke-width="1.5"
					/>
				</svg>
			</span>

			<h2 className="tp-service-inner-2-bigtext tp-item-anime-md marque d-none d-lg-block">
				Calendario de cursos 2026
			</h2>

			<div className="container container-1510">
				<div className="row">
					<div className="col-lg-4">
						<div className="tp-service-heading tp-service-inner-2-title tp-fixed-title mb-30">
							<h3 className="tp-section-title mb-35 tp-split-title">
								Lo que puedes aprender
							</h3>
							<span
								className="tp-section-subtitle tp_fade_anim"
								data-delay=".5"
							>
								Calendario de cursos 2026
							</span>
						</div>
					</div>

					<div className="col-lg-8">
						<div className="tp-service-item-box tp_fade_anim" data-delay=".5">
							<div className="grid gap-8 lg:grid-cols-2 xl:gap-10">
								<Card
									{...{
										month: "Febrero",
										title:
											"Gestión de Contratos de Obra Pública con Experiencia FIDIC",
										duration: "12 horas",
										professors: ["Ing. Mauricio Guglielmi"],
									}}
								/>

								<Card
									{...{
										month: "Marzo",
										title: "Curso Costo 4W 2026",
										duration: "24 horas",
										professors: ["Ing. Carlos Aguade"],
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
									}}
								/>

								<Card
									{...{
										month: "Mayo",
										title: "Tecnología de Hormigón Aplicada",
										duration: "105 horas",
										professors: ["CDH Ing. Maximiliano Segerer y equipo"],
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
									}}
								/>

								<Card
									{...{
										month: "Septiembre",
										title: "Control de Obras Viales",
										duration: "18 horas",
										professors: ["Dr. Ing. Gerardo Botasso"],
									}}
								/>

								<Card
									{...{
										month: "Octubre",
										title: "Perfil 4W 2026",
										duration: "24 horas",
										professors: ["Ing. Carlos Aguade"],
									}}
								/>

								<Card
									{...{
										month: "Noviembre",
										title: "Mantenimiento de Hospitales",
										duration: "10 horas",
										professors: [
											"Arq. Jorge Raúl Carrasquet",
											"Arq. Jorge Manuel",
										],
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type CardProps = {
	month: string;
	title: string;
	duration: string;
	professors: string[];
};

const Card = ({ month, title, duration, professors }: CardProps) => {
	return (
		<div className="">
			<div className="bg-white tp-service-item h-full shadow-2xl shadow-black/10">
				<p>
					<span className="text-xl font-semibold">{month}</span>
				</p>
				<h4 className="tp-service-item-title">
					<span className="tp-line-black">{parse(title)}</span>
				</h4>

				<div className="flex gap-4">
					<div className="font-semibold w-15">Duración</div>
					<div className="leading-relaxed">{duration}</div>
				</div>

				<div className="flex gap-4 mt-3!">
					<div className="font-semibold w-15">Docente</div>
					<div className="leading-relaxed space-y-2">
						{professors.map((e, idx) => (
							<div key={idx}>{e}</div>
						))}
					</div>
				</div>

				<div className="tp-service-item-btn mt-7!">
					<a
						className=" tp-btn-anim tp-doubble-effect"
						href="service-details.html"
					>
						<div className="tp-btn-text">Quiero saber más</div>
						<i>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="12"
								viewBox="0 0 14 12"
								fill="none"
							>
								<path
									d="M1.01301 10.9362L10.9225 1.65031L3.41074 2.83889"
									stroke="currentColor"
									stroke-width="1.5"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="12"
								viewBox="0 0 14 12"
								fill="none"
							>
								<path
									d="M1.01301 10.9362L10.9225 1.65031L3.41074 2.83889"
									stroke="currentColor"
									stroke-width="1.5"
								/>
							</svg>
						</i>
					</a>
				</div>
			</div>
		</div>
	);
};
