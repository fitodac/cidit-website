type Props = {
	title: string;
};

export default function InscriptionForm({ title }: Props) {
	return (
		<div id="inscription-form" className="inline-popup  mfp-hide size-full">
			<div className="size-full grid place-content-center">
				<div className="bg-white w-full max-w-250 max-h-[90vh] overflow-hidden overflow-y-auto">
					<div className="p-11! pb-31!">
						<div className="tp-application-form-title-wrap mb-50 text-center">
							<h2 className="tp-section-title text-6xl! tp-split-title">
								Inscripciones
							</h2>
						</div>

						<form action="#" className="pt-5!">
							<div className="row">
								<div className="col-lg-12">
									<p className="text-black! text-3xl! font-semibold! leading-tight text-center max-w-2/3 mx-auto">
										{title}
									</p>
									<div className="h-6"></div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Nombre(s)*</label>
										<input className="tp-input" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Apellido(s)*</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Numero de documento*</label>
										<input className="tp-input" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Formación académica</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Profesión</label>
										<input className="tp-input" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Dirección particular</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Teléfono fijo</label>
										<input className="tp-input" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Teléfono celular*</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Email*</label>
										<input className="tp-input" type="email" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">
											Institución donde trabaja
										</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Cargo que ocupa</label>
										<input className="tp-input" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Teléfono laboral</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Factura a nombre de</label>
										<input className="tp-input" type="text" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">RUC</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-12">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">
											Identificación de cómo quiere que sea escrito su
											certificado
										</label>
										<input className="tp-input" type="text" />
									</div>
								</div>

								<div className="col-lg-12">
									<div className="tp-application-form-input mb-25">
										<label className="tp-label">Copia comprobante pago</label>
										<input className="tp-input py-2!" type="file" />
									</div>
								</div>

								<div className="col-lg-12">
									<p className="text-gray-400! text-xs! mt-10!">
										Este registro al curso de referencia, es considerado un
										documento administrativo y financiero del CIDIT. El llenado
										de este documento implica el compromiso de pago de la
										empresa/persona registrada en el curso en un plazo no mayor
										de treinta (30) días a partir del registro y emisión de la
										factura a crédito. La cancelación del registro se deberá
										realizar al menos siete (7) días antes del desarrollo del
										curso, en el caso de no realizar este procedimiento, el pago
										por el participante deberá realizarlo la empresa/persona
										responsable del pago. Académicamente se exige un 75% de
										participación al curso, si el participante no cumple con esa
										exigencia no podrá acceder a la certificación de
										correspondencia. En caso de que no haya desarrollado todo el
										programa y no haya acreditado el mínimo requerido (75%) de
										participación, NO podrá reclamar participación en otro curso
										igual para terminar lo iniciado.
									</p>

									<div className="flex items-center gap-2 mt-4">
										<input
											type="checkbox"
											id="terms"
											className="w-4 h-4 cursor-pointer accent-[var(--color-primary)]"
											required
										/>
										<label
											htmlFor="terms"
											className="text-sm cursor-pointer select-none"
										>
											Acepto los términos
										</label>
									</div>
								</div>

								<div className="col-lg-12">
									<div className="tp-application-form-btn mt-15 mb-30 text-center">
										<button type="submit" className="tp-btn-green tp-btn-anim">
											<span className="tp-btn-text">Suscribirme</span>
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
				</div>
			</div>
		</div>
	);
}
