import parse from "html-react-parser";
import { staticPath } from "../../utils/staticPath";

export default function Values() {
	return (
		<section
			className="sa-testimonial-ptb pt-160 pb-150"
			data-bg-color="#010103"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-4"></div>
					<div className="col-lg-8">
						<div
							className="sa-testimonial-title-box pb-90 tp_fade_anim"
							data-delay=".4"
						>
							<h3 className="tp-section-title fs-42 tl-unbounded fw-500">
								Nuestros valores
							</h3>
						</div>
					</div>
				</div>
			</div>

			<div
				className="sa-testimonial-slider-wrapper tp_fade_anim"
				data-delay=".5"
			>
				<div className="swiper-container sa-testimonial-slider-active fix pb-11!">
					<div className="swiper-wrapper h-full!">
						<Slide
							{...{
								title: "Responsabilidad",
								content: `<p>Nuestras acciones se rigen bajo la obligación del cumplimiento de nuestros compromisos pactados con nuestros usuarios y clientes.</p>`,
								icon: staticPath("assets/img/about/icon-1.svg"),
							}}
						/>

						<Slide
							{...{
								title: "Trabajo Colaborativo",
								content: `<p>Abrimos espacios de colaboración con profesionales nacionales e internacionales de distintas disciplinas en la búsqueda de objetivos comunes para generar soluciones con creatividad e innovación.</p>`,
								icon: staticPath("assets/img/about/icon-2.svg"),
							}}
						/>

						<Slide
							{...{
								title: "Excelencia",
								content: `<p>Nos esforzamos en alcanzar los más altos estándares de rendimiento y calidad.</p>`,
								icon: staticPath("assets/img/about/icon-3.svg"),
							}}
						/>

						<Slide
							{...{
								title: "Compromiso social",
								content: `<p>Participación activa y comprometida en la búsqueda del bien para la mejora del entorno y la calidad de vida de las personas.</p>`,
								icon: staticPath("assets/img/about/icon-4.svg"),
							}}
						/>

						<Slide
							{...{
								title: "Ética",
								content: `<p>Nos moviliza el compromiso de cumplir prácticas honestas y responsables en todos los aspectos de nuestra vida organizativa.</p>`,
								icon: staticPath("assets/img/about/icon-5.svg"),
							}}
						/>
					</div>
					<div className="sa-testimonial-dot"></div>
				</div>
			</div>
		</section>
	);
}

type SlideProps = {
	title: string;
	content: string;
	icon: string;
};

const Slide = ({ title, content, icon }: SlideProps) => {
	return (
		<div className="swiper-slide lg:h-110!">
			<div className="sa-testimonial-item p-relative h-full">
				<div className="sa-testimonial-item-content">
					<div className="">
						<img src={icon} alt="icon" className="h-28" />
					</div>
					<h3 className="font-bold">{parse(title)}</h3>
					{parse(content)}
				</div>
			</div>
		</div>
	);
};
