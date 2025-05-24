import Header from "@/components/Header"
import Dropdown from "@/components/Dropdown"
import Footer from "@/components/Footer"
import InfoBlock from "@/components/InfoBlock"

export default function Home() {

	return <div className="w-screen h-screen font-sans">
		
		<Header />
		<div className="bg-[url('../images/bgImage.jpg')] w-full h-[80%] lg:h-full bg-center bg-fit flex items-center justify-center">
				<p className="text-5xl lg:text-7xl text-white drop-shadow-[0_5.1px_5.1px_rgba(0,0,0,0.8)]">HEADER HERE</p>
		</div>
		<InfoBlock alt="1"/>
		<InfoBlock alt="2"/>
		<InfoBlock alt="1"/>
		<InfoBlock alt="2"/>
		<InfoBlock alt="1"/>
		<InfoBlock alt="2"/>
		<Footer />

	</div>
}
