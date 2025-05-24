import Dropdown from "@/components/Dropdown"

export default function Header() {
	return (
	<header className="bg-[#d663ff] p-4 w-full font-sans font-bold border-b-4 border-[#6e2987] border-double sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center ">
        <nav className="align-center hidden lg:inline-block">
          <ul className="flex text-xl mr-5 space-x-5 xl:space-x-15">
            <li><a href="#" className="bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e] transition duration-150 ease-in-out hover:bg-[#692382] active:bg-[#4f1763] active:text-[#c0c744]">Home</a></li>
            <li><a href="#" className="bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e] transition duration-150 ease-in-out hover:bg-[#692382] active:bg-[#4f1763] active:text-[#c0c744]">Products</a></li>
            <li><a href="#" className="bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e] transition duration-150 ease-in-out hover:bg-[#692382] active:bg-[#4f1763] active:text-[#c0c744]">Services</a></li>
          </ul>
        </nav>
        <a href="#"><svg width={"300"} height={"75"}>
            <image href="https://se.eragroup.com/wp-content/uploads/2018/02/logo-placeholder.png" width={"300"} height={"75"}/>
        </svg></a>
        <nav className="hidden lg:inline-block">
          <ul className="flex text-xl mr-5 space-x-5 text-nowrap xl:space-x-15">
            <li><a href="#" className="bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e] transition duration-150 ease-in-out hover:bg-[#692382] active:bg-[#4f1763] active:text-[#c0c744]">About us</a></li>
            <li><a href="#" className="bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e] transition duration-150 ease-in-out hover:bg-[#692382] active:bg-[#4f1763] active:text-[#c0c744]">Media</a></li>
            <li><a href="#" className="bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e] transition duration-150 ease-in-out hover:bg-[#692382] active:bg-[#4f1763] active:text-[#c0c744]">Contact</a></li>
          </ul>
        </nav>
        <Dropdown />
      </div>
    </header>
	);
};