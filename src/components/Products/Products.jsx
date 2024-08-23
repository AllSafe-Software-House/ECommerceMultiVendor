import CardElement from "../card";
import SideBar from "../sidebar";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
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
    id: "size",
    name: "Size",
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

export default function Products() {
  return (
    <div className="bg-white">
      <div>
        <main className="">
          <div className="container">
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block outline-none p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-main focus:border-main "
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-main rounded-e-lg border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
              <SideBar
                title="Products"
                filters={filters}
                subCategories={subCategories}
                sortOptions={sortOptions}
              >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                <CardElement
                        img={
                          "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
                        }
                      />
                </div>
              </SideBar>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
