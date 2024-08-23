import { Link } from "react-router-dom";
import HeadBanner from "../components/HeadBanner/HeadBanner";

export default function FAQ() {
  const faqs = () => {
    const array = [];
    let item;
    for (let index = 0; index < 3; index++) {
      item = (
        <details
          key={index}
          className={`group [&_summary::-webkit-details-marker]:hidden md:w-1/2 md:mx-auto ${index == 2 ? "mb-0" : "mb-5"}`}
          open={index == 0 ? true : false}
        >
          <summary className="flex p-6 bg-[#ededed] cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 p-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      );
      array.push(item);
    }
    console.log('array: ', array[array.length-1]);
    return array;
  };
  return (
    <>
      <HeadBanner text={"FAQ"} />
      <section className="faq-page py-16">
        <div className="container">
          <div className="titles md:w-1/2 m-auto mt-5">
            <h1 className="title text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-5">{`We're here to answer all your questions`}</h1>
            <p className="text-center text-[gray] mb-5">{`If you're new to Genie or looking to supercharge your current stack, this section will help you learn more about the platform and its features.`}</p>
          </div>
          <div className="divide-y py-6 divide-gray-100 rounded-xl border border-gray-100 bg-white">
            {faqs()}
          </div>
          <div className="contact flex justify-center flex-col items-center mt-16">
            <p className="text-[gray]">Got any more questions?</p>
            <div className="btn mt-3">
              <Link
                to="/contact"
                className="block w-full bg-[#ff993322] px-12 py-3 text-sm font-medium text-[#ff9933] border border-spacing-1 border-[#ff9933] shadow hover:bg-[#ff9933] hover:text-white focus:outline-none focus:ring active:bg-[#d5893e] sm:w-auto"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
