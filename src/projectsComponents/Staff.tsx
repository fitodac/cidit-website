import { type ReactNode } from "react";
import parse from "html-react-parser";

import type { StaffType } from "../pages/proyectos/types.d.ts";

export default function Staff({
	staff,
	description,
}: {
	staff: StaffType[];
	description: string;
}) {
	return (
		<div className="mxd-section padding-default">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-team-cards">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin no-padding-bottom animate-card-3">
									<div className="mxd-team-cards__h2-block left-block">
										<div className="mxd-section-title pre-grid">
											<div className="container-fluid p-0">
												<div className="row g-0">
													<div className="col-12">
														<div className="mxd-section-title__title">
															<h2 className="reveal-type leading-none!">
																Nuestro equipo
															</h2>
														</div>
													</div>
													<div className="col-12 mt-6!">
														<div className="mxd-section-title__descr">
															{description && (
																<div className="anim-uni-in-up space-y-7! [&_*]:text-3xl! [&_*]:leading-normal!">
																	{parse(description)}
																</div>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-12 col-xl-8">
									<div className="container-fluid p-0">
										<div className="grid md:grid-cols-2">
											{staff.slice(0, 2).map((member) => (
												<TeamCard key={member.name} {...member} />
											))}
										</div>
									</div>
								</div>

								<div className="col-12">
									<div className="container-fluid p-0">
										<div className="grid md:grid-cols-2 lg:grid-cols-3">
											{staff.slice(2).map((member) => (
												<TeamCard key={member.name} {...member} />
											))}
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

const TeamCard = ({
	name,
	position,
	description,
	picture_src,
	cv_src,
}: StaffType) => {
	return (
		<div className="mxd-team-cards__item mxd-grid-item no-margin-desktop padding-bottom-desktop animate-card-3">
			<div className="mxd-team-cards__media anim-uni-in-up">
				<div className="mxd-team-cards__photo">
					<img src={picture_src} alt={name} />
				</div>
				<div className="mxd-team-cards__socials">
					<a
						className="btn btn-anim tag tag-default tag-permanent"
						href={cv_src}
						target="_blank"
					>
						<span className="btn-caption">Ver ficha curricular</span>
					</a>
				</div>
			</div>
			<div className="mxd-team-cards__info">
				<p className="mxd-team-cards__name t-large t-bright t-caption">
					{name}
				</p>
				<p className="mxd-team-cards__position t-small t-medium t-140 font-bold!">
					{position}
				</p>
				{description && (
					<p className="mxd-team-cards__description text-2xl!">{description}</p>
				)}
			</div>
		</div>
	);
};
