export default function PageHeader() {
	return (
		<div className="tp-breadcrumb-s10-style z-1 black-bg relative overflow-hidden">
			{/* <span
				className="tp-breadcrumb-s10-shape d-none d-xl-block"
				data-speed=".8"
			>
				<svg
					width="198"
					height="185"
					viewBox="0 0 198 185"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M75.9982 1C82.4156 12.2356 92.6798 38.0324 92.868 61.9963M92.868 61.9963C92.9902 77.5605 88.8621 92.3517 76.6692 101.878C60.5023 114.016 25.148 125.297 3.34064 77.4901C-4.88584 59.4558 8.56721 41.4115 43.7825 48.2625C54.5701 50.3611 73.454 53.8418 92.868 61.9963ZM92.868 61.9963C110.019 69.2001 127.583 80.0514 140.344 96.8197C154.025 114.796 168.977 152.439 167.643 179.981M167.643 179.981C167.577 181.346 167.471 182.687 167.322 184M167.643 179.981C167.478 181.411 167.373 182.761 167.322 184M167.643 179.981C169.256 166.014 176.665 144.489 197 145.831M167.322 184C167.455 175.263 159.481 155.084 126.525 144.267M108.99 45.1528C117.152 47.6341 143.699 60.1693 155.613 85.6494"
						stroke="#F5F7F5"
						stroke-width="1.5"
					/>
				</svg>
			</span> */}

			<img
				src="assets/img/240_F_1701228910_2lhdSTehD5gXw45bey8aMGKKNx4D5Lkx.jpg"
				alt="hero background"
				className="w-full top-0 absolute opacity-50"
				data-speed=".4"
			/>

			<div className="container position-relative">
				<span
					className="tp-breadcrumb-s10-shape-2 d-none d-xl-block"
					data-speed="1.1"
				>
					<svg
						width="48"
						height="44"
						viewBox="0 0 48 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0.214844 0H47.7824V41.6216L0.214844 0Z" fill="#F5F7F5" />
						<path
							d="M0.214844 23.7838H22.8094V44L0.214844 23.7838Z"
							fill="#C9F31D"
						/>
					</svg>
				</span>

				<div className="row">
					<div className="col-12">
						<div className="tp-breadcrumb-s10-wrap text-center">
							<h2 className="tp-breadcrumb-s10-title mb-25 tp-split-title">
								Publicaciones
							</h2>
							<div className="tp_fade_anim" data-delay=".5">
								<p className="tp-breadcrumb-s10-subtitle">
									Accedé al repositorio de documentos del CIDIT: boletines,
									informes, guías y materiales descargables.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
