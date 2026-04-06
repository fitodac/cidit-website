import { staticPath } from "../../utils/staticPath";

export default function NextSteps() {
	return (
		<div className="mxd-section padding-pinned-img-pre-mtext">
			<div className="mxd-container">
				<div className="mxd-block">
					<div className="mxd-pinned">
						<div className="mxd-pinned__visual page-padding">
							<div className="mxd-pinned__img-wrap">
								<div
									className="mxd-pinned__img-list [&>div]:[border-radius:var(--_radius-l)]"
									role="list"
								>
									<div
										className="mxd-pinned__img-item overflow-hidden"
										role="listitem"
									>
										<img
											src={staticPath("projects/img/bootcamp/gJ5hV3nM.avif")}
											alt="Image"
											className="size-full! object-cover"
										/>
									</div>

									<div
										className="mxd-pinned__img-item overflow-hidden"
										role="listitem"
									>
										<img
											src={staticPath("projects/img/bootcamp/tB7kP9fX.avif")}
											alt="Image"
											className="size-full! object-cover"
										/>
									</div>

									<div
										className="mxd-pinned__img-item overflow-hidden"
										role="listitem"
									>
										<img
											src={staticPath("projects/img/bootcamp/R2dG4zS1.avif")}
											alt="Image"
											className="size-full! object-cover"
										/>
									</div>

									<div
										className="mxd-pinned__img-item overflow-hidden"
										role="listitem"
									>
										<img
											src={staticPath("projects/img/bootcamp/wQ6vN8mK.avif")}
											alt="Image"
											className="size-full! object-cover"
										/>
									</div>

									<div
										className="mxd-pinned__img-item overflow-hidden"
										role="listitem"
									>
										<img
											src={staticPath("projects/img/bootcamp/Y3jL5pT9.avif")}
											alt="Image"
											className="size-full! object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mxd-pinned__content page-padding">
							<div className="mxd-pinned__text-wrap">
								<div className="mxd-pinned__text-list" role="list">
									<Pinned
										{...{
											imageSrc: staticPath(
												"projects/img/bootcamp/gJ5hV3nM.avif"
											),
											title: "Itapúa",
											starting: "Junio 2023, con el taller de inducción",
											applicants: "400 jóvenes de 21 distritos",
											selected: "121",
											graduates: "20 jóvenes de 9 distritos",
											ending: "28 de Octubre de 2024",
											knowExperiencesSrc: "#",
											knowGratuatesSrc: "#",
											color: "",
										}}
									/>

									<Pinned
										{...{
											imageSrc: staticPath(
												"projects/img/bootcamp/tB7kP9fX.avif"
											),
											title: "Alto Paraná",
											starting: "Septiembre 2023, con el taller de inducción",
											applicants: "172 jóvenes de 11 distritos",
											selected: "121",
											graduates: "24 jóvenes de 6 distritos",
											ending: "20 de Diciembre de 2023",
											knowExperiencesSrc: "#",
											knowGratuatesSrc: "#",
											color: "",
										}}
									/>

									<Pinned
										{...{
											imageSrc: staticPath(
												"projects/img/bootcamp/R2dG4zS1.avif"
											),
											title: "Caaguazú",
											starting: "Enero 2024, con el taller de inducción",
											reinforcementWorkshop: "Marzo 2024",
											applicants: "102 jóvenes de 11 distritos",
											selected: "78",
											graduates: "48 jóvenes de 8 distritos",
											knowExperiencesSrc: "#",
											knowGratuatesSrc: "#",
											color: "",
										}}
									/>

									<Pinned
										{...{
											imageSrc: staticPath(
												"projects/img/bootcamp/wQ6vN8mK.avif"
											),
											title: "Central",
											starting: "Abril 2024, con el taller de inducción",
											applicants: "117 jóvenes de 17 distritos",
											selected: "94",
											graduates: "46 jóvenes de 14 distritos",
											ending: "13 de Agosto de 2024",
											knowExperiencesSrc: "#",
											knowGratuatesSrc: "#",
											color: "",
										}}
									/>

									<Pinned
										{...{
											imageSrc: staticPath(
												"projects/img/bootcamp/Y3jL5pT9.avif"
											),
											title: "Asunción",
											starting: "Septiembre 2024, con el taller de inducción",
											applicants: "257 jóvenes",
											selected: "120",
											graduates: "85 jóvenes",
											ending: "12 de Diciembre de 2024",
											knowExperiencesSrc: "#",
											knowGratuatesSrc: "#",
											color: "",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type PinnedType = {
	imageSrc: string;
	title: string;
	starting?: string;
	applicants?: string;
	selected?: string;
	graduates?: string;
	ending?: string;
	reinforcementWorkshop?: string;
	knowExperiencesSrc?: string;
	knowGratuatesSrc?: string;
	color?: string;
};

const Pinned = ({
	imageSrc,
	title,
	starting,
	applicants,
	selected,
	graduates,
	ending,
	reinforcementWorkshop,
	knowExperiencesSrc,
	knowGratuatesSrc,
	color,
}: PinnedType) => {
	return (
		<div className="mxd-pinned__text-item" role="listitem">
			<div className="w-141 mb-20! overflow-hidden rounded-[3rem] anim-uni-in-up lg:hidden!">
				<img src={imageSrc} alt={`Imagen ilustrativa del curso en ${title}`} />
			</div>

			<h2 className="mxd-pinned__title h2-small anim-uni-in-up">{title}</h2>

			<div className="space-y-5! [&>p]:flex [&>p]:gap-7">
				{starting && (
					<p className="anim-uni-in-up">
						<span>Inicio:</span>
						{starting}
					</p>
				)}
				{reinforcementWorkshop && (
					<p className="anim-uni-in-up">
						<span>Taller de refuerzo:</span>
						{reinforcementWorkshop}
					</p>
				)}
				{applicants && (
					<p className="anim-uni-in-up">
						<span>Postulantes:</span>
						{applicants}
					</p>
				)}
				{selected && (
					<p className="anim-uni-in-up">
						<span>Seleccionados:</span>
						{selected}
					</p>
				)}
				{graduates && (
					<p className="anim-uni-in-up">
						<span>Egresaron:</span>
						{graduates}
					</p>
				)}
				{ending && (
					<p className="anim-uni-in-up">
						<span>Fin de la experiencia (egreso):</span>
						{ending}
					</p>
				)}
			</div>

			<div className="mxd-pinned__tags mt-15! gap-10!">
				{knowExperiencesSrc && (
					<a
						href={knowExperiencesSrc}
						className="tag tag-default tag-outline anim-uni-in-up btn-anim hover:bg-black! hover:text-white!"
					>
						<span className="btn-caption">Ver experiencias</span>
					</a>
				)}
				{knowGratuatesSrc && (
					<a
						href={knowGratuatesSrc}
						className="tag tag-default tag-outline anim-uni-in-up btn-anim hover:bg-black! hover:text-white!"
					>
						<span className="btn-caption">Conocé a los egresadas/os</span>
					</a>
				)}
			</div>
		</div>
	);
};
