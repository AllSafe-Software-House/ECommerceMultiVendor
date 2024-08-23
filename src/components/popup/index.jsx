import { useState } from "react";
import { Link } from "react-router-dom";

export default function DiscountSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div>
      <div className="overlay fixed w-full h-full bg-[#0000006b] z-10"></div>
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 fixed z-50 bg-white w-[90%] lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          alt="Discount"
          src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-32 w-full object-cover md:h-full"
        />
        <div className="relative p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="text-sm font-semibold uppercase tracking-widest">
            Run with the pack
          </p>
          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Get 20% off
            </span>
            <span className="mt-2 block text-sm">
              On your next order over $50
            </span>
          </h2>
          <Link
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            to="/product-details/1"
            onClick={() => setIsVisible(false)}
          >
            Get Discount
          </Link>
          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p>
        </div>
      </section>
    </div>
  );
}
