import ShineCard from "../ShineCard/ShineCard";

export default function BannersSection() {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <ShineCard />
            <ShineCard />
          </div>
        </div>
      </section>
    </>
  );
}
