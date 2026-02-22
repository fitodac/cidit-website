export default function BoxedContent() {
	return (
		<div className="mxd-section overflow-hidden">
			<div className="mxd-container">
				{/* Block - CTA Start */}
				<div className="mxd-block">
					<div className="mxd-promo">
						<div className="mxd-promo__inner anim-zoom-out-container bg-gn-primary-500!">
							{/* background */}
							<div className="w-1/2 right-0 inset-y-0 absolute [&>div]:h-full!">
								<img
									src="/projects/img/guarania/boxed-content-gackground.avif"
									alt="Imagen de fondo"
									className="w-[150%]! max-w-screen! object-cover parallax-img-small mask-l-from-70%"
								/>
							</div>

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
									className="w-300 absolute -right-100 -bottom-50 mix-blend-multiply rotate-45 mxd-move"
									src="/projects/img/guarania/iso-2.svg"
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
