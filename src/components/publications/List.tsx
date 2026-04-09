const listOfDocuments = [
	{
		year: "2025",
		list: [
			{
				headline: "Diagnóstico de GuaranIA",
				subheadline: "",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
		],
	},
	{
		year: "2024",
		list: [
			{
				headline: "Estudio y mapeo de empresas",
				subheadline: "Desarrollo Jóven",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Tecnología digital como herramienta de inclusión",
				subheadline: "",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
		],
	},
	{
		year: "2018",
		list: [
			{
				headline: "Boletín tecnológico",
				subheadline: "Marzo",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Febrero",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline:
					"Sistematización de la jornada internacional de innovación en la gestión de emprendedores involucrados a la economía creativa en un mercado competitivo",
				subheadline: "",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
		],
	},
	{
		year: "2017",
		list: [
			{
				headline: "Boletín tecnológico",
				subheadline: "Diciembre",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Julio",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Junio",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Abril",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
		],
	},
	{
		year: "2016",
		list: [
			{
				headline: "Boletín tecnológico",
				subheadline: "Diciembre",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Noviembre",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Octubre",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Septiembre",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Agosto",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Julio",
				link: "https://ciditpy.org/wp-content/uploads/2020/12/cidit-boletin-marzo-2018.pdf",
			},
		],
	},
];

export default function List() {
	return (
		<div className="tp-career-inner-award-ptb pt-10 lg:pt-150 pb-10 lg:pb-150">
			<div className="container">
				<section className="space-y-10 lg:space-y-22!">
					{listOfDocuments.map((e, idx) => (
						<div className="grid lg:grid-cols-12 lg:gap-x-10" key={idx}>
							<div className="lg:col-span-2">
								<h4 className="tp-section-title text-4xl lg:text-[42px]! tl-unbounded fw-600 tt-capitalize pt-0 lg:pt-7!">
									{e.year}
								</h4>
							</div>

							<div className="lg:col-span-10">
								{e.list.map((item, idx) => (
									<div className="row" key={idx}>
										<div className="ca-award-item-wrap">
											<div className="ca-award-item hover-reveal-item p-relative mb-5 bg-gray-100">
												<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 p-15 lg:p-0">
													<div className="flex-1 overflow-hidden">
														<div className="ca-award-box-left z-index-3">
															<p className="ca-award-text lg:whitespace-nowrap lg:truncate text-xl lg:text-base!">
																{item.headline}
															</p>
														</div>
													</div>
 
													<div className="flex flex-row space-x-0 lg:space-x-8 items-center justify-between lg:justify-end gap-x-2">
														<div className="ca-award-box-right z-index-3 flex justify-between align-items-center gap-8">
															<span className="ca-award-position">
																{item.subheadline}
															</span>
															<div className="ca-award-btn">
																<a
																	className="tp-btn-green tp-btn-anim"
																	href={item.link}
																	target="_blank"
																>
																	<div className="tp-btn-text">
																		Descargar
																	</div>{" "}
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}
