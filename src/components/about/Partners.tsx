import { staticPath } from "../../utils/staticPath";

export default function Partners() {
	return (
		<section
			id="b"
			className="tp-career-inner-benefit-ptb bg-gray-100 pt-150 pb-150"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tp-career-inner-benefit-wrapper text-center mb-50">
							<h4 className="tp-section-title fs-42 tl-unbounded fw-600 tt-capitalize mb-20 tp-split-title">
								Socios estratégicos
							</h4>
						</div>
					</div>
				</div>

				<div className="tp-benefit-box tp_fade_anim" data-delay=".5">
					<div className="row gx-0">
						<PartnerBox
							{...{
								name: "Univ. Nac. Tecnológica de La Plata",
								logo: "assets/img/partners/universidad-de-la-plata.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Centro Asturiano de Innovación",
								logo: "assets/img/partners/innoasturias.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Cámara Paraguaya para la Construcción",
								logo: "assets/img/partners/capaco.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Cámara Vial Paraguaya",
								logo: "assets/img/partners/cavialpa.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Heisecke",
								logo: "assets/img/partners/heisecke.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Benito Roggio",
								logo: "assets/img/partners/roggio.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Tecnoedil",
								logo: "assets/img/partners/tecnoedil.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Concret Mix",
								logo: "assets/img/partners/concret-mix.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Tocsa",
								logo: "assets/img/partners/tocsa.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Ocho A",
								logo: "assets/img/partners/ochoa.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Const. Acaray",
								logo: "assets/img/partners/acaray.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Typsa",
								logo: "assets/img/partners/typsa.webp",
							}}
						/>

						<PartnerBox
							{...{
								name: "Conacyt",
								logo: "assets/img/partners/conacyt.webp",
							}}
						/>
					</div>
				</div>

				<div className="mt-11! flex justify-center">
					<div className="w-full max-w-6xl [&_p]:text-sm! [&_p]:text-balance!">
						<p>
							Para cumplir nuestro mandato, el CIDIT integra las competencias de
							profesionales, docentes e investigadores de trayectoria nacional e
							internacional. Fomentamos alianzas estratégicas con universidades
							y agencias especializadas para el desarrollo de proyectos de
							investigación y formación de capacidades. Colaboramos
							estrechamente con el sector privado en iniciativas de interés
							nacional, impulsando la innovación social a través de tecnologías
							como la IA. Estas acciones cuentan con el respaldo del CONACYT y
							del BID Lab, el laboratorio de innovación del Grupo BID dedicado a
							mejorar vidas en América Latina y el Caribe.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

type PartnerBoxType = {
	name: string;
	logo: string;
};

const PartnerBox = ({ name, logo }: PartnerBoxType) => {
	return (
		<div className="col-lg-3 col-md-6">
			<div className="tp-benefit-item tp-benefit-borber-bottom h-48!">
				<div className="tp-benefit-item-icon pb-30 flex justify-center">
					<span>
						<img src={staticPath(logo)} alt={name} className="w-auto h-20" />
					</span>
				</div>

				<h4 className="tp-benefit-item-title text-center">{name}</h4>
			</div>
		</div>
	);
};
