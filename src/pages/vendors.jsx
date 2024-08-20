import { useTranslation } from "react-i18next";
import { VendorCard } from "../components/card";
import HeadBanner from "../components/HeadBanner/HeadBanner";

export default function Vendors() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeadBanner text={t("links.vendors")} />
      <section className="vendors my-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="sidebar bg-slate-500"></div>
            <div className="vendorsList col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <VendorCard />
              <VendorCard />
              <VendorCard />
              <VendorCard />
              <VendorCard />
              <VendorCard />
              <VendorCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
