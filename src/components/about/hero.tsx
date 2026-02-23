export default function Hero() {
	return (
		<div
			className="ma-hero-area ma-hero-ptb ma-hero-overlay overflow-hidden z-index-1"
			data-background="assets/img/home/hero-1.avif"
		>
			<img
				src="assets/img/shape.png"
				alt="shape"
				className="absolute -top-30 -right-[28vw] w-[80vw] h-auto object-cover -rotate-45! blur js-fade-out-on-scroll z-10"
				data-speed="1.3"
			/>

			<div className="container container-1530">
				<div className="row">
					<div className="col-xl-7">
						<div className="ma-hero-title-box tp_fade_anim" data-delay=".3">
							<h2 className="ma-hero-title">
								Innovación tecnológica que transforma Paraguay
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
