import { Link } from "react-router-dom";

export default function BannerVendor() {
  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-fit">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto px-4 py-8 lg:py-8 sm:px-6 lg:flex lg:items-center lg:px-8 h-full lg:justify-between">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="image w-[80px] h-[80px] mx-auto mb-4 sm:mx-0 sm:me-3 sm:mb-4">
              <img
                src="/src/assets/images/2.jpg"
                className="bg-red-400 rounded-[50%] w-full h-full"
                alt=""
              />
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              All Safe Company
              <strong className="block font-extrabold text-[#d5893e]">
                {" "}
                Electronics Vendor.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-white sm:text-xl/relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit Est harum nesciunt alias autem eum.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full bg-[#ff9933] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#d5893e] focus:outline-none focus:ring active:bg-[#d5893e] sm:w-auto"
              >
                Get Contacts
              </a>

              <Link
                target="_blank"
                to="https://www.google.com/maps/@29.9708523,31.2864682,19.25z?entry=ttu"
                className="block w-full bg-white px-12 py-3 text-sm font-medium text-[#ff9933] shadow hover:text-[#d5893e]  focus:outline-none focus:ring active:text-[#d5893e] sm:w-auto"
              >
                View Map
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
