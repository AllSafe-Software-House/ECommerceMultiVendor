import { DetailsTaps } from "../components/DetailsTaps/DetailsTaps";
import CardElement from "../components/card";
import Review from "../components/review";
import SideBar from "../components/sidebar";
import BannerVendor from "../components/vendorBanner";
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
const arrOfObj = [
  {
    id: "1",
    title: "Products",
    value: (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardElement img={"/src/assets/images/3.jpg"} />
        <CardElement img={"/src/assets/images/3.jpg"} />
        <CardElement img={"/src/assets/images/3.jpg"} />
        <CardElement img={"/src/assets/images/3.jpg"} />
        <CardElement img={"/src/assets/images/3.jpg"} />
        <CardElement img={"/src/assets/images/3.jpg"} />
      </div>
    ),
  },
  {
    id: "2",
    title: "Reviews",
    value: <Review />,
  },
];
export default function VendorDetails() {
  return (
    <section className="productDetails my-5">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-4">
          <SideBar filters={filters} subCategories={subCategories} />
          <div className="lg:col-span-3">
            <BannerVendor />
            <div className="navtabs">
              <DetailsTaps arr={arrOfObj} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
