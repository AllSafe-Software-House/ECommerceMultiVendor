
import { Link } from "react-router-dom";
import MainButton from "../button";
import { useTranslation } from "react-i18next";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
export default function CardElement({ to, name, price, img }) {
  const { t } = useTranslation('global');
  return <>
    <div className="p-7 group">
      <div className="relative overflow-hidden a">
        <img src="https://template.hasthemes.com/furnish/furnish/img/product/1.jpg" className="w-full" />
        <MainButton text={t('custom-text.addCart')} className={'absolute z-[1] opacity-0 group-hover:opacity-100 duration-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
        <div className="absolute w-full h-full top-0 bg-black opacity-0 duration-150 group-hover:opacity-50"></div>
        <div className="bg-[#282828] flex items-center justify-between group-hover:translate-y-0 duration-150 translate-y-[110%] absolute bottom-0 w-full">
          <div className="flex hover:bg-main duration-150 w-1/2 py-2 items-center border-e-2 justify-center">
            <CiHeart color="#fff" fontSize={'30px'}/>
          </div>
          <div className="flex hover:bg-main duration-150 w-1/2 py-2 items-center justify-center">
            <FaRegEye color="#fff" fontSize={'30px'}/>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <Link to={to}>
          <h4 className="text-[18px] font-roboto font-medium hover:text-main">Le Parc Minotti Chair</h4>
        </Link>
        <p className="font-roboto">$150</p>
      </div>
      <div>

      </div>
    </div>
  </>
}
