import MainButton from "../button";
import CardElement from "../card";
import MainTitle from "../mainTitle";

export default function AdsProducts({ title, text }) {
  return (
    <section className="py-20">
      <div className="container">
        <MainTitle title={title} text={text} />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="img row-span-4 relative">
            <img
              src="/src/assets/images/23.jpg"
              className="w-full h-full"
              alt=""
            />
            <div className="overlay w-full h-full absolute top-0 left-0 bg-[#00000029]"></div>
            <div className="absolute w-full p-12 h-full top-0 left-0">
              <p className="h2 my-3 pb-2 text-[1.2rem] relative after:w-10 after:bg-[black] after:h-[3px] after:absolute after:bottom-0 after:left-0">
                Weekend Sale
              </p>
              <h2 className="my-4 font-bold text-3xl">
                NEW ARRIVAL <br />{" "}
                <span className="font-normal">Collection</span>
              </h2>
              <MainButton text="View Now" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 col-span-3">
            <CardElement img="/src/assets/images/shose.jpg" />
            <CardElement img="/src/assets/images/shose.jpg" />
            <CardElement img="/src/assets/images/shose.jpg" />
            <CardElement img="/src/assets/images/shose.jpg" />
            <CardElement img="/src/assets/images/shose.jpg" />
            <CardElement img="/src/assets/images/shose.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
