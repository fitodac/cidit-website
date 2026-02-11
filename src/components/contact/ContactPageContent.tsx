import PageHeader from "../PageHeader";

export const ContactPageContent = () => {
	return (
		<>
			<PageHeader />

			<div className="tp-application-form-spacing relative z-30">
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
