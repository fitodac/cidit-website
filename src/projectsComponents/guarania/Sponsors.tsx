export default function Sponsors() {
	return (
		<section className="py-50! flex! justify-center">
			<div className="w-full max-w-5xl">
				<h3 className="text-6xl! text-center">Con el apoyo de</h3>

				<div className="flex flex-col gap-14 justify-center mt-20! md:flex-row">
					<div className="">
						<img
							src="/projects/img/guarania/bid.avif"
							alt="BID"
							className="w-auto h-20! object-contain"
						/>
					</div>

					<p className="font-bold! pt-1">a través de</p>

					<div className="">
						<img
							src="/projects/img/guarania/bid-lab.gif"
							alt="BID LAB"
							className="w-auto h-20! object-contain mix-blend-darken"
						/>
					</div>
				</div>

				<div className="mt-10!">
					<p className="">
						El BID actúa como marco institucional que impulsa iniciativas de
						desarrollo en la región, mientras que BID Lab es el programa desde
						el cual se apoya directamente la ejecución del proyecto, promoviendo
						soluciones innovadoras como impacto social y tecnológico.
					</p>
				</div>
			</div>
		</section>
	);
}
