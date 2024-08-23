import MainTitle from "../mainTitle";
import Tabs from "../tabs";

export default function FeatureProduct() {
  return (
    <section className="py-20">
      <div className="container">
        <MainTitle title={'Featured Products'} text={'Our Featured Products'}/>
        <Tabs />
      </div>
    </section>
  );
}
