import AdsProducts from "../components/adsProducts";
import BannersSection from "../components/BannersSection/BannersSection";
import BestSeller from "../components/bestSeller";
import BlogSection from "../components/BlogSection/BlogSection";
import Categories from "../components/categories";
import ClintesSection from "../components/ClintesSection/ClintesSection";
import FeatureProduct from "../components/featureProducts";
import Hero from "../components/hero";
import ProductsSection from "../components/productsSetion";

export default function Home() {
    return <>
        <Hero />
        <BannersSection />
        <Categories/>
        <FeatureProduct/>
        <AdsProducts title='NEW ELECTRONICS' text='NEW ELECTRONICS ARRIVALS'/>
        <BannersSection />
        <ProductsSection />
        <BestSeller/>
        <AdsProducts title='NEW ITEMS' text='NEW ITEMS ARRIVALS'/>
        <ClintesSection />
        <BlogSection />
    </>
}