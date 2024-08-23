import { useState } from "react";
import CardElement from "../card";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("profile");

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div>
      <div className="mb-4 mt-5">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "profile" ? "border-purple-600" : ""
              }`}
              id="profile-styled-tab"
              data-tabs-target="#styled-profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
              onClick={() => toggleTab("profile")}
            >
              Phone
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "dashboard" ? "border-purple-600" : ""
              }`}
              id="dashboard-styled-tab"
              data-tabs-target="#styled-dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === "dashboard"}
              onClick={() => toggleTab("dashboard")}
            >
              Clothes
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "settings" ? "border-purple-600" : ""
              }`}
              id="settings-styled-tab"
              data-tabs-target="#styled-settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === "settings"}
              onClick={() => toggleTab("settings")}
            >
              Notebook
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "contacts" ? "border-purple-600" : ""
              }`}
              id="contacts-styled-tab"
              data-tabs-target="#styled-contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected={activeTab === "contacts"}
              onClick={() => toggleTab("contacts")}
            >
              Video Games
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className={`${
            activeTab === "profile" ? "block" : "hidden"
          } p-4 rounded-lg`}
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
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
            <CardElement
              img={
                "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
              }
            />
          </div>
        </div>
        <div
          className={`${
            activeTab === "dashboard" ? "block" : "hidden"
          } p-4 rounded-lg`}
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
            <CardElement img={"/src/assets/images/3.jpg"} />
          </div>
        </div>
        <div
          className={`${
            activeTab === "settings" ? "block" : "hidden"
          } p-4 rounded-lg`}
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
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
            <CardElement
              img={
                "https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"
              }
            />
          </div>
        </div>
        <div
          className={`${
            activeTab === "contacts" ? "block" : "hidden"
          } p-4 rounded-lg`}
          id="styled-contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
            <CardElement
              img={
                "/src/assets/images/3.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
