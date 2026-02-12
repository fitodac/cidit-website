export default function Team() {
	return (
		<div className="tp-team-ptb pt-160 pb-130">
			<div className="container">
				<div
					className="sa-testimonial-title-box pb-90 tp_fade_anim"
					data-delay=".4"
				>
					<h3 className="tp-section-title text-black fs-42 tl-unbounded fw-500">
						Nuestro equipo humano
					</h3>
				</div>
			</div>

			<div className="container container-1480">
				<div className="tp-team-inner-wrap">
					<div className="row">
						<TeamBox
							{...{
								name: "Luca Cernuzzi",
								position: "Presidente",
								pictureUrl: "assets/img/digital-agency/team/team-12.jpg",
							}}
						/>
						<TeamBox
							{...{
								name: "Miguel Ángel Cardona",
								position: "Secretario General",
								pictureUrl: "assets/img/digital-agency/team/team-10.jpg",
							}}
						/>
						<TeamBox
							{...{
								name: "Ana Gabriela Ayala Giménez",
								position: "Tesorera",
								pictureUrl: "assets/img/digital-agency/team/team-11.jpg",
							}}
						/>
						<TeamBox
							{...{
								name: "Félix Soerensen",
								position: "Vocal",
								pictureUrl: "assets/img/digital-agency/team/team-4.jpg",
							}}
						/>
						<TeamBox
							{...{
								name: "Hugo Daniel Rodríguez Ayala",
								position: "Síndico",
								pictureUrl: "assets/img/digital-agency/team/team-5.jpg",
							}}
						/>
						<TeamBox
							{...{
								name: "Teresa Patricia Gamarra",
								position: "Coordinación General",
								pictureUrl: "assets/img/digital-agency/team/team-6.jpg",
							}}
						/>
						<TeamBox
							{...{
								name: "Patricia Candia",
								position: "Administradora",
								pictureUrl: "assets/img/digital-agency/team/team-7.jpg",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

type TeamBoxProps = {
	name: string;
	position: string;
	pictureUrl: string;
};

const TeamBox = ({ name, position, pictureUrl }: TeamBoxProps) => {
	return (
		<div className="col-xl-3 col-lg-4 col-md-6">
			<div className="tp-team-item p-relative mb-30">
				<div className="tp-team-thumb">
					<img src={pictureUrl} alt="" />
				</div>
				<div className="tp-team-content">
					<h4 className="tp-team-title">{name}</h4>
					<span>{position}</span>
				</div>
				<div className="tp-team-social">
					<span className="tp-team-social-link">
						<svg
							width="15"
							height="16"
							viewBox="0 0 15 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.08333 0.0644531L7.08333 15.0645M14.1667 7.98112L0 7.98112"
								stroke="currentcolor"
								stroke-width="1.5"
							/>
						</svg>
					</span>
					<div className="tp-team-social-icon">
						<a href="#">
							<span>
								<svg
									width="10"
									height="19"
									viewBox="0 0 10 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.2626 10.5867V18.0645H6.23929V10.5867H9.20466L9.82173 7.14844H6.23929V5.93203C6.23929 4.11445 6.93521 3.41836 8.73157 3.41836C9.29037 3.41836 9.73946 3.43242 10 3.46055V0.342187C9.50977 0.205078 8.30991 0.0644531 7.61741 0.0644531C3.95269 0.0644531 2.2626 1.83984 2.2626 5.66836V7.14844H0V10.5867H2.2626Z"
										fill="currentcolor"
									/>
								</svg>
							</span>
						</a>
						<a href="#">
							<span>
								<svg
									width="19"
									height="18"
									viewBox="0 0 19 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.9622 0.0644531H17.877L11.5106 7.26493L19 17.0645H13.1373L8.54216 11.1226L3.29053 17.0645H0.371578L7.1797 9.36133L0 0.0644531H6.0113L10.1606 5.49546L14.9622 0.0644531ZM13.9383 15.3399H15.5526L5.1319 1.69907H3.39787L13.9383 15.3399Z"
										fill="currentcolor"
									/>
								</svg>
							</span>
						</a>
						<a href="#">
							<span>
								<svg
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.50212 4.44948C6.8063 4.44948 4.63185 6.50995 4.63185 9.06445C4.63185 11.619 6.8063 13.6794 9.50212 13.6794C12.1979 13.6794 14.3724 11.619 14.3724 9.06445C14.3724 6.50995 12.1979 4.44948 9.50212 4.44948ZM9.50212 12.0648C7.76001 12.0648 6.33581 10.7193 6.33581 9.06445C6.33581 7.40965 7.75577 6.06412 9.50212 6.06412C11.2485 6.06412 12.6684 7.40965 12.6684 9.06445C12.6684 10.7193 11.2442 12.0648 9.50212 12.0648ZM15.7076 4.2607C15.7076 4.85916 15.1989 5.33713 14.5716 5.33713C13.94 5.33713 13.4356 4.85515 13.4356 4.2607C13.4356 3.66626 13.9443 3.18428 14.5716 3.18428C15.1989 3.18428 15.7076 3.66626 15.7076 4.2607ZM18.9332 5.3532C18.8612 3.91127 18.5136 2.63402 17.3988 1.58169C16.2883 0.529364 14.9404 0.20001 13.4187 0.127713C11.8504 0.0433664 7.14964 0.0433664 5.58132 0.127713C4.06386 0.195994 2.71595 0.525348 1.60117 1.57767C0.486392 2.63 0.143056 3.90725 0.0667596 5.34918C-0.0222532 6.83529 -0.0222532 11.2896 0.0667596 12.7757C0.138818 14.2176 0.486392 15.4949 1.60117 16.5472C2.71595 17.5995 4.05962 17.9289 5.58132 18.0012C7.14964 18.0855 11.8504 18.0855 13.4187 18.0012C14.9404 17.9329 16.2883 17.6036 17.3988 16.5472C18.5094 15.4949 18.8569 14.2176 18.9332 12.7757C19.0223 11.2896 19.0223 6.83931 18.9332 5.3532ZM16.9071 14.3703C16.5765 15.1575 15.9365 15.764 15.1015 16.0813C13.851 16.5512 10.8839 16.4428 9.50212 16.4428C8.1203 16.4428 5.14897 16.5472 3.90279 16.0813C3.072 15.768 2.43196 15.1615 2.0971 14.3703C1.60117 13.1854 1.71562 10.3738 1.71562 9.06445C1.71562 7.75507 1.60541 4.93949 2.0971 3.75864C2.42772 2.9714 3.06776 2.36491 3.90279 2.04761C5.15321 1.57767 8.1203 1.68612 9.50212 1.68612C10.8839 1.68612 13.8553 1.58169 15.1015 2.04761C15.9322 2.36089 16.5723 2.96739 16.9071 3.75864C17.4031 4.94351 17.2886 7.75507 17.2886 9.06445C17.2886 10.3738 17.4031 13.1894 16.9071 14.3703Z"
										fill="currentcolor"
									/>
								</svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
