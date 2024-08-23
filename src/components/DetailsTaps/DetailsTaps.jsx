import { useState } from "react";
import PropTypes from "prop-types";

export function DetailsTaps({ arr }) {
  const [activeTab, setActiveTab] = useState(arr[0]?.id || 0);

  const renderBtns = () => {
    return arr.map((single) => (
      <button
        key={single.id}
        onClick={() => setActiveTab(single.id)}
        className={`flex items-center space-x-2 px-4 py-2 focus:outline-none ${
          activeTab === single.id
            ? "text-black border-b-2 border-black"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <span className="font-semibold">{single.title}</span>
      </button>
    ));
  };

  const renderContents = () => {
    const activeTabContent = arr.find((single) => single.id === activeTab);
    if (typeof activeTabContent.value === "string") {
      return (
        <div
          className="tab-content"
          dangerouslySetInnerHTML={{ __html: activeTabContent.value }}
        />
      );
    }
    return <div className="tab-content">{activeTabContent.value}</div>;
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex space-x-4 border-b-2 border-gray-200">
          {renderBtns()}
        </div>
        <div className="mt-4">{renderContents()}</div>
      </div>
    </section>
  );
}

DetailsTaps.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]).isRequired,
    })
  ).isRequired,
};
