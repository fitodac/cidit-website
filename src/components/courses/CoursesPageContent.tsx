import Testimonials from "../home/Testimonials";
import { cn } from "../../utils/cn";
import parse from "html-react-parser";
import PageHeaderAnimated from "../PageHeaderAnimated";

import { useMemo } from "react";

export default function CoursesPageContent() {
	return (
		<>
			<PageHeaderAnimated headline="Cursos" />

			<div className="inner-service-3-area service-3-spacing inner-service-3-pin-wrap pb-60 black-bg">
				<Course
					{...{
						title: "Gestión de Contratos de Obra Pública con Experiencia FIDIC",
						bgColor: "black",
						monthNumber: "02",
						images: [
							"assets/img/inner-image/service/thumb.jpg",
							"assets/img/inner-image/service/thumb-sm.jpg",
						],
						professors: ["Ing. Mauricio Guglielmi"],
						link: "/cursos/gestion-de-contratos-de-obra-publica-con-experiencia-fidici",
					}}
				/>

				<Course
					{...{
						title: "Curso Costo 4W 2026",
						bgColor: "gray",
						monthNumber: "03",
						images: [
							"assets/img/inner-image/service/thumb-2.jpg",
							"assets/img/inner-image/service/thumb-sm-2.jpg",
						],
						professors: ["Ing. Carlos Aguade"],
						link: "/cursos/curso-costo-4w-2026",
					}}
				/>

				<Course
					{...{
						title:
							"Proceso de Estabilización de Subrasantes, Sub-bases y Bases de Camino",
						bgColor: "black",
						monthNumber: "04",
						images: [
							"assets/img/inner-image/service/thumb-3.jpg",
							"assets/img/inner-image/service/thumb-sm-3.jpg",
						],
						professors: [
							"Dr. Ing. Gerardo Botasso",
							"Dr. Ing. Hugo Bianchetto",
						],
						link: "/cursos/proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino",
					}}
				/>

				<Course
					{...{
						title: "Tecnología de Hormigón Aplicada",
						bgColor: "gray",
						monthNumber: "05",
						images: [
							"assets/img/inner-image/service/thumb-2.jpg",
							"assets/img/inner-image/service/thumb-sm-2.jpg",
						],
						professors: ["CDH Ing. Maximiliano Segerer y equipo"],
						link: "/cursos/tecnologias-de-hormigon-aplicada",
					}}
				/>

				<Course
					{...{
						title: "Gestión de Contratos de Obra Pública con Experiencia FIDIC",
						bgColor: "black",
						monthNumber: "06",
						images: [
							"assets/img/inner-image/service/thumb-3.jpg",
							"assets/img/inner-image/service/thumb-sm-3.jpg",
						],
						professors: [
							"Dr. Ing. Gerardo Botasso",
							"Dr. Ing. Hugo Bianchetto",
						],
						link: "/cursos/planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans",
					}}
				/>

				<Course
					{...{
						title: "Inspección, Evaluación y Gerenciamiento de Puentes",
						bgColor: "gray",
						monthNumber: "08",
						images: [
							"assets/img/inner-image/service/thumb-2.jpg",
							"assets/img/inner-image/service/thumb-sm-2.jpg",
						],
						professors: [
							"Ing. Pedro Manuel Lozada",
							"Arq. Gustavo Javier Bandel",
						],
						link: "/cursos/inspeccion-evaluacion-y-gerenciamiento-de-puentes",
					}}
				/>

				<Course
					{...{
						title: "Control de Obras Viales",
						bgColor: "black",
						monthNumber: "09",
						images: [
							"assets/img/inner-image/service/thumb-3.jpg",
							"assets/img/inner-image/service/thumb-sm-3.jpg",
						],
						professors: ["Dr. Ing. Gerardo Botasso"],
						link: "/cursos/control-de-obras-viales",
					}}
				/>

				<Course
					{...{
						title: "Inspección, Evaluación y Gerenciamiento de Puentes",
						bgColor: "gray",
						monthNumber: "10",
						images: [
							"assets/img/inner-image/service/thumb-2.jpg",
							"assets/img/inner-image/service/thumb-sm-2.jpg",
						],
						professors: ["Ing. Carlos Aguade"],
						link: "/cursos/perfil-4w-2026",
					}}
				/>

				<Course
					{...{
						title: "Mantenimiento de Hospitales",
						bgColor: "black",
						monthNumber: "11",
						images: [
							"assets/img/inner-image/service/thumb-3.jpg",
							"assets/img/inner-image/service/thumb-sm-3.jpg",
						],
						professors: ["Arq. Jorge Raúl Carrasquet", "Arq. Jorge Manuel"],
						link: "/cursos/mantenimiento-de-hospitales",
					}}
				/>
			</div>

			<div className=" lg:h-91!"></div>

			<Testimonials />
		</>
	);
}

type CourseProps = {
	title: string;
	bgColor: "black" | "gray";
	monthNumber: string;
	images: [string, string];
	link: string;
	professors?: string[];
};

const Course = ({
	title,
	bgColor,
	monthNumber,
	images,
	link,
	professors,
}: CourseProps) => {
	const [image, imageSm] = images;

	const monthName = useMemo(() => {
		const months = {
			"01": "Enero",
			"02": "Febrero",
			"03": "Marzo",
			"04": "Abril",
			"05": "Mayo",
			"06": "Junio",
			"07": "Julio",
			"08": "Agosto",
			"09": "Septiembre",
			"10": "Octubre",
			"11": "Noviembre",
			"12": "Diciembre",
		} as { [key in string]: string };
		return monthNumber ? months[monthNumber] : "";
	}, [monthNumber]);

	return (
		<div
			className={cn(
				"inner-service-3-item inner-service-3-panel pt-120 pb-130",
				bgColor === "gray" ? "grey-bg-2" : "bg-black"
			)}
		>
			<div className="container">
				<div className="grid lg:grid-cols-2 lg:gap-14">
					<div className="">
						<div className="service-3-process-wrap mb-30">
							<div className="service-3-process-list">
								<span>{monthNumber}</span>
								<div className="">
									<h2>{parse(title)}</h2>
									<p className="text-gray-400! pt-10">{monthName} 2026</p>

									{professors && (
										<div className="flex gap-10">
											{professors.map((e) => (
												<div
													className="postbox-author-box flex gap-2 items-center mt-8!"
													key={e}
												>
													<div className="postbox-details-author-img mr-15">
														<img
															src="assets/img/inner-image/blog/standard/blog-av-1.jpg"
															alt=""
														/>
													</div>
													<div className="postbox-author-info-wrap">
														<div className="postbox-author-info text-start">
															<h4 className="postbox-author-name text-white font-semibold!">
																{e}
															</h4>
														</div>
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="service-3-process-content ml-90 mb-30">
							<p className="font-light! mb-30">
								El objetivo del curso es formarte en el análisis, administración
								y ejecución de contratos públicos bajo el modelo FIDIC,
								incorporando herramientas prácticas aplicables al contexto local
								y exigencias internacionales.
							</p>

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
					</div>
				</div>
			</div>

			<div className="container container-1510 pt-8!">
				<div className="row">
					<div className="col-lg-8 mb-30">
						<div className="service-3-process-thumb">
							<img src={image} alt="Imagen principal del curso" />
						</div>
					</div>
					<div className="col-lg-4 mb-30">
						<div className="service-3-process-thumb">
							<img src={imageSm} alt="Detalle del curso" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
