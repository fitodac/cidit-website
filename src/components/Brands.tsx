import { staticPath } from "../utils/staticPath";

const brands = [
	{
		name: "Tecnoedil",
		logo: "assets/img/partners/tecnoedil.webp",
	},
	{
		name: "Typsa",
		logo: "assets/img/partners/typsa.webp",
	},
	{
		name: "Acaray",
		logo: "assets/img/partners/acaray.webp",
	},
	{
		name: "Concret Mix",
		logo: "assets/img/partners/concret-mix.webp",
	},
	{
		name: "Tocsa",
		logo: "assets/img/partners/tocsa.webp",
	},
	{
		name: "Ocho A",
		logo: "assets/img/partners/ochoa.webp",
	},
	{
		name: "Capaco",
		logo: "assets/img/partners/capaco.webp",
	},
	{
		name: "Cavialpa",
		logo: "assets/img/partners/cavialpa.webp",
	},
	{
		name: "Conacyt",
		logo: "assets/img/partners/conacyt.webp",
	},
	{
		name: "Heisecke",
		logo: "assets/img/partners/heisecke.webp",
	},
	{
		name: "Roggio e hijos",
		logo: "assets/img/partners/roggio.webp",
	},
	{
		name: "Universidad de la Plata",
		logo: "assets/img/partners/universidad-de-la-plata.webp",
	},
	{
		name: "Innoasturias",
		logo: "assets/img/partners/innouasturias.webp",
	},
];

export default function Brands() {
	return (
		<div className="ds-brand-area">
			<div className="ds-brand-wrapper">
				<div className="dgm-brand-active-2 fix swiper">
					<div className="swiper-wrapper slide-transtion">
						{brands.map((brand) => (
							<div
								className="swiper-slide border border-gray-50 w-61! h-23!"
								key={brand.name}
							>
								<div className="ds-brand-item size-full grid place-items-center">
									<img
										src={staticPath(brand.logo)}
										alt={brand.name}
										className="w-auto h-17"
									/>
								</div>
							</div>
						))}
						{brands.map((brand) => (
							<div
								className="swiper-slide border border-gray-50 w-61! h-23!"
								key={brand.name}
							>
								<div className="ds-brand-item size-full grid place-items-center">
									<img
										src={staticPath(brand.logo)}
										alt={brand.name}
										className="w-auto h-17"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
