import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function MainButton({ text, className, to, type }) {
  MainButton.propTypes = {
    text: PropTypes.string,
    buttonClass: PropTypes.string,
    to:PropTypes.string
  };
  return <>
    <button type={type} className={`${className} bg-[#282828] text-white px-5 py-2 hover:bg-[#ffae00] duration-150`}>{text}</button>
  </>;
}
