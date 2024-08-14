import React, { useState } from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import CardElement from '../components/card'


export default function Blog() {
  const { t } = useTranslation('global')
  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return <>
    <HeadBanner text={t('links.blogs')} />
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Tags</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name} className='border-b-2 py-1'>
                      <Link className='flex items-center hover:text-main hover:translate-x-5 duration-150' to={category.href}>
                        <MdOutlineKeyboardArrowRight className='mx-2' />
                        {category.name}</Link>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <div></div>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  {/* <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton> */}
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {/* <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div> */}
                </MenuItems>
              </Menu>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center flex-wrap">
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                  <div className='w-full px-4 my-4 sm:w-1/2 md:w-1/2'>
                    <CardElement blog={true} img={"https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"} />
                  </div>
                </div>
              </div>
              {/* Filters */}
              <form className="hidden lg:block h-[10px] lg:sticky lg:top-0">
                <h3 className="font-semibold text-[25px] py-6">Tags</h3>

                <ul role="list" className="space-y-4  pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name} className='border-b border-gray-200 py-1'>
                      <Link className='flex items-center hover:text-main hover:translate-x-5 duration-150' to={category.href}>
                        <MdOutlineKeyboardArrowRight className='mx-2' />
                        {category.name}</Link>
                    </li>
                  ))}
                </ul>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
}
