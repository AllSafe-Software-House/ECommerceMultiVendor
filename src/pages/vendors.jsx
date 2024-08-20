import { useTranslation } from "react-i18next";
import { VendorCard } from "../components/card";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import SideBar from "../components/sidebar";

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
    {
        id: "category",
        name: "Category",
        options: [
          { value: "new-arrivals", label: "New Arrivals", checked: false },
          { value: "sale", label: "Sale", checked: false },
          { value: "travel", label: "Travel", checked: true },
          { value: "organization", label: "Organization", checked: false },
          { value: "accessories", label: "Accessories", checked: false },
        ],
      },
  {
    id: "State",
    name: "State",
    options: [
      { value: "Egypt", label: "Egypt", checked: true },
      { value: "UAE", label: "UAE", checked: false },
      { value: "Saudi", label: "Saudi", checked: false },
    ],
  },
  {
    id: "City",
    name: "City",
    options: [
      { value: "Cairo", label: "Cairo", checked: false },
      { value: "Alex", label: "Alex", checked: false },
      { value: "BeniSuef", label: "BeniSuef", checked: false },
      { value: "El-Minya", label: "El-Minya", checked: false },
    ],
  },
  {
    id: "Zip",
    name: "Zip",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];
export default function Vendors() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeadBanner text={t("links.vendors")} />
      <section className="vendors my-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SideBar filters={filters} subCategories={subCategories} />
            <div className="vendorsList col-span-2 grid md:grid-cols-2 gap-4">
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
