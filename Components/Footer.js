export default function Footer() {
	return (
	<header className="bg-[#d663ff] p-4 w-full font-sans border-t-4 border-[#6e2987] border-double ">
      <div className="container mx-auto flex items-center justify-center ">
        <a href="#"><svg width={"300"} height={"75"}>
            <image href="https://se.eragroup.com/wp-content/uploads/2018/02/logo-placeholder.png" width={"300"} height={"75"}/>
        </svg></a>
        <nav className="hidden lg:inline-block">
          <ul className="flex text-m mr-10 space-x-15 text-nowrap xl:space-x-20">
          <li>
                <div className="flex flex-col bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e]">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Services</a>
                </div>
            </li>
            <li>
                <div className="flex flex-col bg-[#8f39ad] p-2 rounded-xl text-[#e4eb5e]">
                    <a href="#">About us</a>
                    <a href="#">Media</a>
                    <a href="#">Contact</a>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
	);
};