import { useTranslation } from "react-i18next";
import { BiSupport } from "react-icons/bi";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const {t} = useTranslation('global')
  return <>
    <footer>
      <div className="py-16 border-t">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-3 my-3 md:w-1/2 lg:w-1/4">
              <div className="flex items-center">
                <BiSupport className="text-main text-[70px] me-3" />
                <div>
                  <p className="font-medium text-[18px] mb-2">FREE SHIPPING</p>
                  <p className="">Free shipping on all UK orders</p>
                </div>
              </div>
            </div>
            <div className="w-full px-3 my-3 md:w-1/2 lg:w-1/4">
              <div className="flex items-center">
                <BiSupport className="text-main text-[70px] me-3" />
                <div>
                  <p className="font-medium text-[18px] mb-2">FREE SHIPPING</p>
                  <p className="">Free shipping on all UK orders</p>
                </div>
              </div>
            </div>
            <div className="w-full px-3 my-3 md:w-1/2 lg:w-1/4">
              <div className="flex items-center">
                <BiSupport className="text-main text-[70px] me-3" />
                <div>
                  <p className="font-medium text-[18px] mb-2">FREE SHIPPING</p>
                  <p className="">Free shipping on all UK orders</p>
                </div>
              </div>
            </div>
            <div className="w-full px-3 my-3 md:w-1/2 lg:w-1/4">
              <div className="flex items-center">
                <BiSupport className="text-main text-[70px] me-3" />
                <div>
                  <p className="font-medium text-[18px] mb-2">FREE SHIPPING</p>
                  <p className="">Free shipping on all UK orders</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-[#282828] py-16">
        <div className="container">
          <div className="flex flex-wrap text-white">
            <div className="w-full md:w-1/3 my-3 px-3">
              <h3 className='text-[22px] font-medium'>{t('custom-text.contactInfo')}</h3>
              <div className='py-4'>
                <div className='flex py-2 items-center'>
                  <CiLocationOn className='me-2' />
                  <p>123 West Street, Melbourne Victoria
                    3000 Australia</p>
                </div>
                <div className='flex py-2 items-center'>
                  <CiPhone className='me-2' />
                  <p>+061012345678</p>
                </div>
                <div className='flex py-2 items-center'>
                  <CiMail className='me-2' />
                  <p>Support@domain.com</p>
                </div>
                <div className='flex py-2 items-center'>
                  <FaFacebookF className='me-2 hover:text-main duration-150' />
                  <FaTwitter className='mx-2 hover:text-main duration-150' />
                  <FaInstagram className='ms-2 hover:text-main duration-150' />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 my-3 px-3">
                <h3 className="text-white font-semibold">ACCOUNTS</h3>
                <ul className="list-none mt-5">
                  <li className="my-4 hover:text-main duration-150">
                    <Link to={'wishlist'}>MY WISHLIST</Link>
                  </li>
                  <li className="my-4 hover:text-main duration-150">
                  <Link to={'cart'}>MY CART</Link>
                  </li>
                  <li className="my-4 hover:text-main duration-150">
                  <Link to={'login'}>Sign In</Link>
                  </li>
                </ul>
            </div>
            <div className="w-full lg:w-1/3 my-3 px-3">
                <h3 className="text-white font-semibold">Newsletters</h3>
                <p className="mt-5 lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt.</p>
                <input className="w-full py-2 px-4 border-0 outline-0 text-black" placeholder="Email" type="email " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}
