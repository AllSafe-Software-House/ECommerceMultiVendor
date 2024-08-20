import { useTranslation } from "react-i18next";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";
import MainButton from "../button";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";

export default function CardElement({
  to,
  name,
  price,
  img,
  blog = false,
  text,
}) {
  const { t } = useTranslation("global");
  return (
    <>
      {!blog ? (
        <div className="p-6 group">
          <div className="relative overflow-hidden">
            <MainButton
              text={t("custom-text.addCart")}
              className={
                "absolute z-[1] opacity-0 group-hover:opacity-100 duration-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              }
            />
            <Link to={`/product-details/1`}>
              <img src={img} className="w-full" />
              <div className="absolute w-full h-full top-0 bg-black opacity-0 duration-150 group-hover:opacity-50"></div>
            </Link>
            <div className="bg-[#282828] flex items-center justify-between group-hover:translate-y-0 duration-150 translate-y-[110%] absolute bottom-0 w-full">
              <div className="flex hover:bg-main duration-150 w-1/2 py-2 items-center border-e-2 justify-center">
                <CiHeart color="#fff" fontSize={"30px"} />
              </div>
              <div className="flex hover:bg-main duration-150 w-1/2 py-2 items-center justify-center">
                <FaRegEye color="#fff" fontSize={"30px"} />
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to={`/product-details/1`}>
              <h4 className="text-[18px] font-roboto font-medium hover:text-main">
                Le Parc Minotti Chair
              </h4>
            </Link>
            <p className="font-roboto">$150</p>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="group">
          <div className="relative overflow-hidden">
            <Link to={`/blog-details/1`}>
              <img src={img} className="w-full" />
              <GoLink className="absolute text-white text-[25px] z-[1] opacity-0 group-hover:opacity-100 duration-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-full h-full top-0 bg-black opacity-0 duration-150 group-hover:opacity-50"></div>
            </Link>
          </div>
          <div className="mt-5">
            <h4 className="text-[18px] font-roboto font-medium text-main">
              12 Jun 2022
            </h4>
            <Link to={`/blog-details`}>
              <h4 className="text-[18px] font-roboto  duration-150 hover:text-main">
                How Furniture Is Going To Change Your Business Strategies.
              </h4>
            </Link>
            <p className="font-roboto mt-6">by Mary Harper</p>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}
export const VendorCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
