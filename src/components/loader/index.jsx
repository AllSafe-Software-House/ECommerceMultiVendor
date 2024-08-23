import loader from "../../assets/images/loader.gif";
export default function Loader() {
  return (
    <div className="loader fixed top-0 left-0 w-full h-full z-50 bg-white flex justify-center items-center">
      <img src={loader} className="w-1/6" alt="" />
    </div>
  );
}
