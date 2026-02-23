export default function OffCanvas() {
	return (
		<>
			<div className="tp-offcanvas-area">
				<div className="tp-offcanvas-wrapper offcanvas-black-bg">
					<div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
						<div className="tp-offcanvas-close">
							<button className="tp-offcanvas-close-btn">
								<svg
									width="37"
									height="38"
									viewBox="0 0 37 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.19141 9.80762L27.5762 28.1924"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M9.19141 28.1924L27.5762 9.80761"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className="tp-offcanvas-main">
						<div className="tp-offcanvas-menu d-xl-none">
							<nav></nav>
						</div>
					</div>
				</div>
			</div>
			<div className="body-overlay"></div>
		</>
	);
}
