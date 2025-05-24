export default function InfoBlock(props) {
	var bgColour = " bg-[#f3d1ff] "
	var heading = " Heading "
	var text = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec efficitur augue. Sed vehicula consectetur ante, in pulvinar arcu tincidunt eu. Curabitur at purus id neque aliquam commodo in nec lacus. Praesent vehicula elit justo, eu convallis eros dapibus nec. Nunc a nisl semper, dignissim sem vitae, venenatis elit. Integer finibus ante augue, sit amet aliquam lorem interdum non. Aliquam erat volutpat. Quisque vel diam interdum, accumsan urna eget, pellentesque neque. Nulla ut sollicitudin risus, vitae hendrerit arcu. Duis ultricies erat nec orci semper vestibulum. Suspendisse ipsum purus, varius et imperdiet id, sodales vel augue. Integer sed velit nec elit fringilla hendrerit. "
	var source = " https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_1280.jpg "

	if(props.heading) {
		heading = props.heading
	}

	if(props.children) {
		text = props.children
	}

	if(props.src) {
		source = props.src
	}

	if(props.alt == "1") {

		return(
		<div className={"w-screen p-10 border-b-4 border-t-4 border-double border-[#6e2987] text-[#303030] font-sans flex items-center justify-center flex-col space-y-10 bg-[#f3d1ff]"}>
			<h1 className="font-bold text-3xl">{heading}</h1>
			<div className="flex w-[100%] lg:w-[75%] space-x-15 flex-col lg:flex-row">
				<p className="text-m mx-auto text-center my-auto p-10">{text}</p>
				<img src={source} className="w-96 h-96 my-auto object-cover rounded"/>
			</div>
		</div>
	);
	}

	if(props.alt == "2") {

		return(
		<div className={"w-screen p-10 border-b-4 border-t-4 bg-[#dbb0eb] border-double border-[#6e2987] text-[#303030] font-sans flex items-center justify-center flex-col space-y-10 "}>
			<h1 className="font-bold text-3xl">{heading}</h1>
			<div className="flex w-[100%] lg:w-[75%] space-x-15 flex-col lg:flex-row">
				<img src={source} className="w-96 h-96 my-auto object-cover rounded"/>
				<p className="text-m mx-auto text-center my-auto p-10">{text}</p>
			</div>
		</div>
	);
	}

	if(props.alt == null) {
		return(
		<div className={"w-screen p-10 border-b-4 border-t-4 border-double bg-[#f3d1ff] border-[#6e2987] text-[#303030] font-sans flex items-center justify-center flex-col space-y-10 "}>
			<h1 className="font-bold text-3xl">{heading}</h1>
			<div className="flex w-[100%] lg:w-[75%] space-x-15 flex-col lg:flex-row">
				<p className="text-m mx-auto text-center my-auto p-10">{text}</p>
				<img src={source} className="w-96 h-96 my-auto object-cover rounded"/>
			</div>
		</div>
	);
	}
	
}