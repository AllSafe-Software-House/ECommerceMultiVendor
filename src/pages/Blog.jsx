import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuItems,
} from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import HeadBanner from "../components/HeadBanner/HeadBanner";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import CardElement from "../components/card";
import SideBar from "../components/sidebar";

export default function Blog() {
  const { t } = useTranslation("global");
  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
  ];
  const filters = [
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "State",
      name: "State",
      options: [
        { value: "Egypt", label: "Egypt", checked: true },
        { value: "UAE", label: "UAE", checked: false },
        { value: "Saudi", label: "Saudi", checked: false },
      ],
    },
    {
      id: "City",
      name: "City",
      options: [
        { value: "Cairo", label: "Cairo", checked: false },
        { value: "Alex", label: "Alex", checked: false },
        { value: "BeniSuef", label: "BeniSuef", checked: false },
        { value: "El-Minya", label: "El-Minya", checked: false },
      ],
    },
    {
      id: "Zip",
      name: "Zip",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
  ];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      <HeadBanner text={t("links.blogs")} />
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Dialog
            open={mobileFiltersOpen}
            onClose={setMobileFiltersOpen}
            className="relative z-40 lg:hidden"
          >
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
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name} className="border-b-2 py-1">
                        <Link
                          className="flex items-center hover:text-main hover:translate-x-5 duration-150"
                          to={category.href}
                        >
                          <MdOutlineKeyboardArrowRight className="mx-2" />
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </form>
              </DialogPanel>
            </div>
          </Dialog>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5">
            <div className="flex items-baseline justify-end">
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  ></MenuItems>
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
            <SideBar
            title={'Blogs'}
              filters={filters}
              subCategories={subCategories}
              sortOptions={sortOptions}
            >
              <div className="cards grid lg:grid-cols-2 gap-4">
                <CardElement
                  blog={true}
                  img={
                    "https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"
                  }
                />
                <CardElement
                  blog={true}
                  img={
                    "https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"
                  }
                />
                <CardElement
                  blog={true}
                  img={
                    "https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"
                  }
                />
                <CardElement
                  blog={true}
                  img={
                    "https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg"
                  }
                />
              </div>
            </SideBar>
          </main>
        </div>
      </div>
    </>
  );
}
