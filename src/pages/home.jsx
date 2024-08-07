import { t } from "i18next";
import Hero from "../components/hero";
import CardElement from "../components/card";
import ProductsSection from "../components/productsSetion";
import BannersSection from "../components/BannersSection/BannersSection";
import ClintesSection from "../components/ClintesSection/ClintesSection";

export default function Home() {
    return <>
        <Hero />
        <BannersSection />
        <ProductsSection />
        <ClintesSection />
    </>
}