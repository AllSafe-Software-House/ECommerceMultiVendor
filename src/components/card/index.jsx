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
    <div className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to='/vendor-details/1' href="#">
        <img
          className="rounded-t-lg h-40 w-full"
          src="/src/assets/images/22.jpg"
          alt
        />
      </Link>
      <div className="p-5 flex justify-between items-center">
        <div className="content text-white group-hover:text-blue-500">
          <Link to='/vendor-details/1' className="text-2xl font-bold mb -2">AllSafe Vendor</Link>

          <a
            className="flex items-center my-2 group-hover:text-yellow-500"
            href="mailto:allsafe@allsafe.com"
          >
            <MdEmail className="me-1" /> allsafe@allsafe.com
          </a>
          <a
            className="flex items-center my-2 group-hover:text-yellow-500"
            href="tel:01234567891"
          >
            <BsFillTelephoneFill className="me-1" /> +20 123 456 7891
          </a>
        </div>
        <div className="avatar">
          <Link to='/vendor-details/1' className="image w-[80px] h-[80px]">
            <img
              src="/src/assets/images/2.jpg"
              className="bg-red-400 rounded-[50%] w-full h-full shadow-md group-hover:bg-[#ffae00] group-hover:-mt-24 transition-all duration-300"
              alt
            />
          </Link>
          <p className="my-2">
            <Rating
              className="text-1xl"
              emptySymbol="fa fa-star-o text-[#b1b1b1]"
              fullSymbol="fa fa-star text-[#ff9933]"
              initialRating={2.5}
              readonly
            />
          </p>
        </div>
      </div>
    </div>
  );
};
