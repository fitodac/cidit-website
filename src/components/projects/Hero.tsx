import { staticPath } from "../../utils/staticPath";

export default function Hero() {
	return (
		<div
			className="hr-hero-bg include-bg z-index-1 hero-section"
			data-background={staticPath("assets/img/projects/hero-bg.avif")}
		>
			<div className="hr-hero-main d-flex flex-column justify-content-between h-100">
				<div className="hr-hero-content pl-160">
					<div className="row gx-0">
						<div className="col-xl-10">
							<div className="row align-items-end">
								<div className="col-lg-9">
									<div className="hr-hero-title-box">
										<h4 className="hr-hero-title tp-split-title leading-none!">
											Proyectos <br />
											de Investigación
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row gx-0">
					<div className="col-xl-7">
						<div className="hr-feature-wrap pl-100">
							<div className="row gx-0">
								<div className="col-md-6">
									<div className="hr-feature-item d-flex align-items-start">
										<span className="hr-feature-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="white"
												className="size-12"
											>
												<path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"></path>
											</svg>
										</span>
										<div className="hr-feature-content">
											<p>Proyectos basados en</p>
											<h4 className="hr-feature-title">
												Inteligencia Artificial
											</h4>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="hr-feature-item d-flex align-items-start">
										<span className="hr-feature-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="white"
												className="size-12"
											>
												<path d="M5.23379 7.72989C6.65303 5.48625 9.15342 4 12.0002 4C14.847 4 17.3474 5.48625 18.7667 7.72989L20.4569 6.66071C18.6865 3.86199 15.5612 2 12.0002 2C8.43928 2 5.31393 3.86199 3.54356 6.66071L5.23379 7.72989ZM12.0002 20C9.15342 20 6.65303 18.5138 5.23379 16.2701L3.54356 17.3393C5.31393 20.138 8.43928 22 12.0002 22C15.5612 22 18.6865 20.138 20.4569 17.3393L18.7667 16.2701C17.3474 18.5138 14.847 20 12.0002 20ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11ZM0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12ZM20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12ZM21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9Z"></path>
											</svg>
										</span>
										<div className="hr-feature-content">
											<p>Proyectos basados en la</p>
											<h4 className="hr-feature-title">Inclusión Social</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
