export const ContactPageContent = () => {
	return (
		<>
			<div className="bg-base relative overflow-hidden lg:h-80">
				<div className="bg-[url('assets/img/granite.avif')] bg-size-[70%] size-full mix-blend-overlay opacity-30" />
				<img
					src="assets/img/shape.png"
					alt="shape-1"
					className="w-170 h-auto -left-60 -top-40 absolute rotate-90"
				/>
				<img
					src="assets/img/shape.png"
					alt="shape-2"
					className="w-200 h-auto -right-100 -top-70 absolute -rotate-45"
				/>
			</div>

			<div className="tp-application-form-spacing-- -mt-40! relative z-30">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="tp-application-form-wrap bg-white px-10! pt-50">
								<div className="tp-application-form-title-wrap mb-50 text-center">
									<h2 className="tp-section-title fs-42 tp-split-title">
										Contacto
									</h2>
								</div>

								<div
									className="tp-application-form tp_fade_anim"
									data-delay=".5"
								>
									<form action="#" className="pt-10!">
										<div className="row">
											<div className="col-lg-6">
												<div className="tp-application-form-input mb-25">
													<label className="tp-label">Nombre*</label>
													<input className="tp-input" type="text" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="tp-application-form-input mb-25">
													<label className="tp-label">Email*</label>
													<input className="tp-input" type="text" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="tp-application-form-input mb-25">
													<label className="tp-label">Teléfono</label>
													<input className="tp-input" type="text" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="tp-application-form-input mb-25">
													<label className="tp-label">Mensaje*</label>
													<textarea className="tp-input tp-textarea"></textarea>
												</div>
											</div>

											<div className="col-lg-6 col-md-6"></div>

											<div className="col-lg-6 col-md-6">
												<div className="tp-application-form-btn mt-15 mb-30 text-md-end">
													<button
														type="submit"
														className="tp-btn-green tp-btn-anim"
													>
														<span className="tp-btn-text">Enviar</span>
														<span>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="21"
																height="8"
																viewBox="0 0 21 8"
																fill="none"
															>
																<path
																	d="M0 6.99626L19 7L10.208 1"
																	stroke="currentColor"
																></path>
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>

								<div className="h-40" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
