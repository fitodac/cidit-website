export default function BoxedContent() {
	return (
		<div className="mxd-section overflow-hidden">
			<div className="mxd-container">
				{/* Block - CTA Start */}
				<div className="mxd-block">
					<div className="mxd-promo">
						<div className="mxd-promo__inner anim-zoom-out-container">
							{/* background */}
							<div className="mxd-promo__bg"></div>
							{/* caption */}
							<div className="mxd-promo__content lg:w-1/2! lg:my-31!">
								<h3 className="anim-uni-in-up reveal-type text-white">
									Prácticas éticas y medioambientales
								</h3>

								<div className="space-y-7! [&>*]:text-white! [&>*]:text-3xl!">
									<p className="anim-uni-in-up">
										En GuaranIA, el respeto por las personas y el cuidado del
										entorno son principios fundamentales.
									</p>
									<p className="anim-uni-in-up">
										Desde el inicio hemos puesto en primer plano la seguridad,
										la transparencia y el alineamiento de los modelos,
										asegurando que cada paso siga estándares internacionales y
										mejores prácticas en el desarrollo de modelos funcionales.
									</p>
									<p className="anim-uni-in-up">
										Con este enfoque, GuaranIA se construye como modelo cuidado,
										responsable y alienado, capaz de generar impacto positivo y
										contribuir a una IA más inclusiva, confiable y efectiva para
										la región y el mundo.
									</p>
									<p className="anim-uni-in-up">
										Este esfuerzo se realiza en conjunto con la iniciativa fair
										LAC de BID Lab, en conjunción con Microsoft AI for Good Lab.
										CIDIT como entidad desarrolladora y ejecutora principal del
										proyecto, así como sus socios y aliados, sumando capacidades
										técnicas y visión regional para garantizar un desarrollo
										abierto y confiable.
									</p>
								</div>
							</div>
							{/* parallax images */}
							<div className="mxd-promo__images">
								<img
									className="promo-image promo-image-1"
									src="/projects/img/illustrations/cta-img-01.webp"
									alt="Image"
								/>
								<img
									className="promo-image promo-image-2"
									src="/projects/img/illustrations/cta-img-02.webp"
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Block - CTA End */}
			</div>
		</div>
	);
}
