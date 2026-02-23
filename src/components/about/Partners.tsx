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
					<div className="w-full max-w-5xl grid [&_p]:text-sm! [&_p]:text-balance! lg:gap-20 lg:grid-cols-2">
						<div className="">
							<p>
								Para el logro de este mandato el CIDIT se debe valer de las
								competencias de profesionales; docentes, investigadores de la
								UC, así como de grupos y agencias especializadas en temas afines
								nacional e internacional. Actualmente está asociada con el
								Centro de Investigaciones Viales de la Universidad Nacional
								Tecnológica de La Plata (Argentina) para los temas viales y con
								el Centro Asturiano de Innovación – INNOVASTURIAS (España) para
								los temas de innovación.
							</p>
						</div>

						<div className="">
							<p>
								En cuanto a los actores con quien el CIDIT esta vinculado para
								actividades conjuntas es con la Cámara Paraguaya para la
								Construcción (CAPACO) y con la Cámara Vial Paraguaya (CAVIALPA).
							</p>
							<p>
								Para el intercambio de oferta y demanda algunas de las empresas
								con las que nos vinculamos son; CONSTRUCTORAS; HEISECKE, BENITO
								ROGGIO; TECNOEDIL, CONCRET MIX, TOCSA, OCHO A, CONSTRUCTORA
								ACARAY entre otros, en otros ámbitos de la gestión también
								proporcionamos apoyo a consorcios como TYPSA y en el sector
								publico al CONACYT.
							</p>
						</div>
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
						<img
							src={staticPath(logo)}
							alt={name}
							className="w-auto h-20"
						/>
					</span>
				</div>

				<h4 className="tp-benefit-item-title text-center">{name}</h4>
			</div>
		</div>
	);
};
