import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
import { IoCart } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
export default function Example() {
  const { t } = useTranslation("global");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  const renderLinks = () => {
    const links = [
      { id: "1", link: t("links.home"), path: "/" },
      { id: "2", link: t("links.shop"), path: "/shop", megaDropDown: true },
      { id: "3", link: t("links.blogs"), path: "/blogs" },
      { id: "4", link: "PAGES", dropDown: true },
      { id: "5", link: t("links.vendors"), path: "/vendors" },
      { id: "6", link: t("links.contact"), path: "/contact" },
    ];

    return links.map((link) => {
      if (link.megaDropDown) {
        return (
          <li key={link.id} className="group">
            <NavLink
              to={link.path}
              className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto md:hover:bg-transparent md:border-0 md:p-0 dark:text-[black] hover:text-[#ff9933] md:dark:hover:bg-transparent dark:border-gray-700"
              id="mega-menu-full-dropdown-button"
              // onClick={closeMenu} // Close menu on click
            >
              {link.link}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </NavLink>
            <div
              id="mega-menu-full-dropdown"
              className="absolute w-full invisible group-hover:visible left-0 mt-1 bg-white z-10 border-gray-200 shadow-lg border-y dark:bg-white dark:border-white group-hover:block transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
            >
              {/* Mega dropdown content */}
              <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6 bg-white">
                {/* Add your mega dropdown links here */}
                <ul aria-labelledby="mega-menu-full-dropdown-button">
                  <li className="hover:text-[white]">
                    <Link
                      to="/"
                      className="text-[black] block p-3 rounded-lg hover:text-[white] dark:hover:text-[#ff9933]"
                      onClick={closeMenu} // Close menu on click
                    >
                      <div className="font-semibold">Option 1</div>
                      <span className="text-sm text-gray-500 dark:text-[black]">
                        Description for Option 1.
                      </span>
                    </Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
                <ul aria-labelledby="mega-menu-full-dropdown-button">
                  <li className="hover:text-[white]">
                    <Link
                      to="/"
                      className="text-[black] block p-3 rounded-lg hover:text-[white] dark:hover:text-[#ff9933]"
                      onClick={closeMenu} // Close menu on click
                    >
                      <div className="font-semibold">Option 1</div>
                      <span className="text-sm text-gray-500 dark:text-[black]">
                        Description for Option 1.
                      </span>
                    </Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
                <ul aria-labelledby="mega-menu-full-dropdown-button">
                  <li className="hover:text-[white]">
                    <Link
                      to="/"
                      className="text-[black] block p-3 rounded-lg hover:text-[white] dark:hover:text-[#ff9933]"
                      onClick={closeMenu} // Close menu on click
                    >
                      <div className="font-semibold">Option 1</div>
                      <span className="text-sm text-gray-500 dark:text-[black]">
                        Description for Option 1.
                      </span>
                    </Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
                <ul aria-labelledby="mega-menu-full-dropdown-button">
                  <li className="hover:text-[white]">
                    <Link
                      to="/"
                      className="text-[black] block p-3 rounded-lg hover:text-[white] dark:hover:text-[#ff9933]"
                      onClick={closeMenu} // Close menu on click
                    >
                      <div className="font-semibold">Option 1</div>
                      <span className="text-sm text-gray-500 dark:text-[black]">
                        Description for Option 1.
                      </span>
                    </Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>
          </li>
        );
      } else if (link.dropDown) {
        return (
          <li key={link.id} className="relative group">
            <div
              // to={link.path}
              className="flex cursor-pointer items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto md:hover:bg-transparent md:border-0 md:p-0 dark:text-[black] hover:text-[#ff9933] md:dark:hover:bg-transparent dark:border-gray-700"
              id="dropdown-button"
              // onClick={closeMenu} // Close menu on click
            >
              {link.link}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            <div
              id="dropdown"
              className="absolute invisible w-full group-hover:visible left-0 mt-1 bg-white border-gray-200 shadow-lg border-y dark:bg-white dark:border-white group-hover:block transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100 md:w-48"
            >
              <ul aria-labelledby="dropdown-button">
                <li className="block lg:hidden">
                  <Link
                    to="/"
                    className="text-[black] block p-3 rounded-lg hover:text-[white] dark:hover:text-[#ff9933]"
                    onClick={closeMenu} // Close menu on click
                  >
                    <div className="font-semibold">Option B</div>
                    <span className="text-sm text-gray-500 dark:text-[black]">
                      Description for Option A.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[black] block p-3 rounded-lg hover:text-[white] dark:hover:text-[#ff9933]"
                    onClick={closeMenu} // Close menu on click
                  >
                    <div className="font-semibold">Option A</div>
                    <span className="text-sm text-gray-500 dark:text-[black]">
                      Description for Option A.
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        );
      } else {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className="block py-2 pl-3 pr-4 text-[black] hover:text-[#ff9933] md:bg-transparent md:text-[#ff9933] md:p-0 md:dark:text-[black]"
            aria-current="page"
            onClick={closeMenu} // Close menu on click
          >
            {link.link}
          </NavLink>
        );
      }
    });
  };

  return (
    <nav className="bg-white shadow fixed top-0 w-full text-[black] z-[2]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[black]">
            Flowbite
          </span> */}
        </Link>
        <div className="conte flex items-center md:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="icons flex items-center">
            <Link to="/cart">
              <FiShoppingCart className="text-3xl" />
            </Link>
            <Link to="/wishlist">
              <FaRegHeart className="text-2xl mx-3" />
            </Link>
            <div className="avatar-item">
              <img
                id="avatarButton"
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src="/src/assets/images/pp.jpg"
                alt="User dropdown"
              />
              <div
                id="userDropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-[black]">
                  <div className="font-bold">All Safe</div>
                  <div className="font-medium truncate">allsafe@allsafe.com</div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ff9933] dark:hover:text-[black]"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ff9933] dark:hover:text-[black]"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ff9933] dark:hover:text-[black]"
                    >
                      Orders
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#ff9933] dark:hover:text-[black]"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mega-menu-full"
          className={`items-center justify-between ${
            open ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {renderLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
