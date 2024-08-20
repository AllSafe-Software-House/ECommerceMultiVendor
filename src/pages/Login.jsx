
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainButton from '../components/button';
import HeadBanner from '../components/HeadBanner/HeadBanner';
export default function Login() {
    const { t } = useTranslation('global');
    return <>
        <HeadBanner text={t('links.login')} />
        <section className='py-16'>
            <div className="container">
                <div className='w-full mx-auto md:w-2/3 border-[#ddd] p-5 border'>
                    <form>
                        <div className="space-y-12">
                            <div className="pb-3">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            {t('custom-text.email')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            {t('custom-text.pass')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                autoComplete="given-name"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-x-6">
                            <MainButton text={t('links.login')} />
                        </div>
                        <Link className='text-main pt-4 block'>Lost Your Password?</Link>
                        <p className='pt-4'>{`Don't have account? `}<Link to={'/register'} className="text-main" >Sign Up</Link></p>
                        <p className=''>{`Sign up as vendor? `}<Link to={'/register'} className="text-main" >Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </section>
    </>
}
