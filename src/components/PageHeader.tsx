export default function PageHeader() {
	return (
		<div className="bg-base relative overflow-hidden lg:h-40">
			<div className="bg-[url('/assets/img/granite.avif')] bg-cover bg-fixed bg-center w-full h-full absolute inset-0 mix-blend-overlay opacity-30" />
			<img
				src="/assets/img/shape.png"
				alt="shape-1"
				className="w-170 h-auto -left-60 top-170 absolute rotate-90"
			/>
			<img
				src="/assets/img/shape.png"
				alt="shape-2"
				className="w-200 h-auto -right-50 top-200 absolute -rotate-45"
			/>
		</div>
	);
}
