import { useState } from "react";
import { Link } from "react-router-dom";

export default function Review() {
  const [inputValue, setInputValue] = useState([]);
  const [err, setErr] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const trimmedValue = event.target.value.trim();
      if (trimmedValue !== "") {
        setInputValue([...inputValue, trimmedValue]);
        setErr(false);
        event.target.value = "";
      } else {
        setErr(true);
      }
    }
  };

  return (
    <div className="review-section">
      <div className="reviewInp">
        <input
          type="text"
          placeholder={`${
            err ? "Please Enter Your Review" : "Enter Your Review"
          }`}
          onKeyDown={handleKeyDown}
          className={`block outline-none p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 gray-100 border ${
            err
              ? "border-red-400 focus:border-red-400"
              : "border-gray-300 focus:ring-main focus:border-main"
          }`}
        />
      </div>
      <div className="reviews my-5">
        {inputValue.map((review, index) => (
          <div key={index} className="review flex items-center p-3 border mt-3">
            <div className="review-sender flex me-9">
              <Link
                to="/vendor-details/1"
                className="image w-[80px] h-[80px] me-3"
              >
                <img
                  src="/src/assets/images/2.jpg"
                  className="bg-red-400 rounded-[50%] w-full h-full"
                  alt=""
                />
              </Link>
              <div className="review-sender__info">
                <div className="name">Ahmed</div>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p className="date">1 day ago</p>
              </div>
            </div>
            <div className="review-content">
              <p className="text">{review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
