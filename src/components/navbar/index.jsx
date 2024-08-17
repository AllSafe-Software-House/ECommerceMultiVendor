import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
import { useTranslation } from 'react-i18next'
import MegaMenu from '../mega-menu'
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from 'react-icons/io5'
import { LuShoppingCart } from 'react-icons/lu'

export default function Example() {
  const { t } = useTranslation('global')
  const links = [
    { link: t('links.home'), path: "/" },
    { link: t('links.shop'), path: "/shop" },
    // { link: t('links.sofa'), path: "/shop" },
    // { link: t('links.cabinet'), path: "/shop" },
    { link: t('links.blogs'), path: "/blogs" },
    { link: t('links.contact'), path: "/contact" },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="bg-white md:fixed w-full z-[9999] shadow">
      <nav aria-label="Global" className="mx-auto relative flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <MegaMenu onMouseEnter={() => { setMegaMenuOpen(true) }} onMouseLeave={() => setMegaMenuOpen(false)} className={`duration-200 ${megaMenuOpen ? 'visible translate-y-0  opacity-100 hover:visible hover:translate-y-0  hover:opacity-100' : 'invisible delay-200  translate-y-16 opacity-0'}`} />
        <div className="flex lg:flex-1">
          <Link to="/" clLinkssName="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to='/' className="text-base font-medium font-roboto hover:text-[#ffae00] duration-200 leading-6 text-gray-900">
            {t('links.home')}
          </NavLink>
          <div >
            <NavLink onMouseEnter={() => setMegaMenuOpen(true)} onMouseLeave={() => setMegaMenuOpen(false)} to="/shop" className="text-base inline-block font-medium font-roboto hover:text-[#ffae00] duration-200 leading-6 text-gray-900">
              {t('links.shop')}
            </NavLink>
          </div>
          {/* <NavLink to='/shop' className="text-base font-medium font-roboto hover:text-[#ffae00] duration-200 leading-6 text-gray-900">
            {t('links.sofa')}
          </NavLink>
          <NavLink to='/shop' className="text-base font-medium font-roboto hover:text-[#ffae00] duration-200 leading-6 text-gray-900">
            {t('links.cabinet')}
          </NavLink> */}
          <NavLink to='/blogs' className="text-base font-medium font-roboto hover:text-[#ffae00] duration-200 leading-6 text-gray-900">
            {t('links.blogs')}
          </NavLink>
          <NavLink to='/contact' className="text-base font-medium font-roboto hover:text-[#ffae00] duration-200 leading-6 text-gray-900">
            {t('links.contact')}
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CiSearch className='text-[25px] me-3 hover:text-[#ffae00] duration-150 cursor-pointer' />
          <Menu as="div" className="relative mx-3">
            <div>
              <MenuButton className="relative">
                <IoSettingsOutline className='text-[25px] mx-3 hover:text-[#ffae00] duration-150 cursor-pointer' />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link to={''} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  Your Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'register'} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  {t('links.register')}
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/login'} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  {t('links.login')}
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Link to={'/cart'}>
            <LuShoppingCart className='text-[25px] ms-3 hover:text-[#ffae00] duration-150 cursor-pointer' />
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link, i) => <NavLink key={i} to={link.path} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  {link.link}
                </NavLink>)}
              </div>
              <div className="py-6 flex items-center">
                <CiSearch className='text-[25px] me-3 hover:text-[#ffae00] duration-150 cursor-pointer' />
                <Menu as="div" className="relative h-[25px] mx-3">
                  <MenuButton>
                    <IoSettingsOutline className='text-[25px] hover:text-[#ffae00] duration-150 cursor-pointer' />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute -left-full z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <LuShoppingCart className='text-[25px] ms-3 hover:text-[#ffae00] duration-150 cursor-pointer' />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

  )
}
