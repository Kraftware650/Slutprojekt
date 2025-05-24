import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown(className) {
  return (
    <Menu as="div" className="relative inline-block text-left lg:hidden">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 border-2 border-[#6e2987] mt-2 w-36 origin-top-right rounded-md bg-[#d663ff] shadow-lg transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-2 bg-[#8f39ad] mx-auto text-center w-35 rounded-xl border-4 border-[#d663ff] border-double text-[#e4eb5e] data-focus:bg-[#4f1763] data-focus:text-[#c0c744]"
            >
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-2 bg-[#8f39ad] mx-auto text-center w-35 rounded-xl border-4 border-[#d663ff] border-double text-[#e4eb5e] data-focus:bg-[#4f1763] data-focus:text-[#c0c744]"
            >
              Products
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-2 bg-[#8f39ad] mx-auto text-center w-35 rounded-xl border-4 border-[#d663ff] border-double text-[#e4eb5e] data-focus:bg-[#4f1763] data-focus:text-[#c0c744]"
            >
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-2 bg-[#8f39ad] mx-auto text-center w-35 rounded-xl border-4 border-[#d663ff] border-double text-[#e4eb5e] data-focus:bg-[#4f1763] data-focus:text-[#c0c744]"
            >
              About us
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-2 bg-[#8f39ad] mx-auto text-center w-35 rounded-xl border-4 border-[#d663ff] border-double text-[#e4eb5e] data-focus:bg-[#4f1763] data-focus:text-[#c0c744]"
            >
              Media
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-2 bg-[#8f39ad] mx-auto text-center w-35 rounded-xl border-4 border-[#d663ff] border-double text-[#e4eb5e] data-focus:bg-[#4f1763] data-focus:text-[#c0c744]"
            >
              Contact
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
