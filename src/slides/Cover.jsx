import LiveDays from "../components/LiveDays.jsx";

export default function Cover() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter" style={{ animationDelay: "0s" }}>
        This is for you, *Thirumba varanum na vanthuru saami Naathana*
      </p>
      <h1 className="enter heading-glow" style={{ animationDelay: ".08s" }}>
        Vatsu.
      </h1>
      <p className="lede enter" style={{ animationDelay: ".2s" }}>
        Three years of asking, and still meaning it.
      </p>
      <div className="enter" style={{ animationDelay: ".32s" }}>
        <LiveDays since="2023-09-19T00:00:00" label="Day" />
      </div>
    </div>
  );
}
