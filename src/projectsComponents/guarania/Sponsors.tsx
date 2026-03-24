import { staticPath } from "../../utils/staticPath";

export default function Sponsors() {
	return (
		<section className="py-50! flex! justify-center">
			<div className="w-full max-w-5xl">
				{/* <h3 className="text-6xl! text-center">Con el apoyo de</h3> */}

				{/* <div className="flex flex-col gap-14 justify-center mt-20! md:flex-row">
					<div className="">
						<img
							src={staticPath("projects/img/guarania/bid.avif")}
							alt="BID"
							className="w-auto h-20! object-contain"
						/>
					</div>

					<p className="font-bold! pt-1">a través de</p>

					<div className="">
						<img
							src={staticPath("projects/img/guarania/bid-lab.gif")}
							alt="BID LAB"
							className="w-auto h-20! object-contain mix-blend-darken"
						/>
					</div>
				</div> */}

				<div className="flex justify-center gap-10 xl:gap-20">
					<img
						src={staticPath("projects/img/guarania/bid-lab.gif")}
						alt="BID LAB"
						className="w-auto h-20! object-contain mix-blend-darken"
					/>

					<img
						src={staticPath("projects/img/guarania/microsoft.avif")}
						alt="Microsoft"
						className="w-auto h-20! object-contain mix-blend-darken"
					/>
				</div>

				<div className="mt-10!">
					<p className="text-center">
						GuaranIA es una iniciativa del CIDIT cofinanciado por BID Lab, el
						brazo de innovación del Banco Interamericano de Desarrollo, con
						recursos del Fondo de Capital Ordinario para el Programa de
						Empresariado Social (PES) del Banco Interamericano de Desarrollo
						(BID).
					</p>
				</div>
			</div>
		</section>
	);
}
