export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfChars} label="Characters" />
      <Stat number={stats.instagramCharsLeft} label="Instagram" />
      <Stat number={stats.facebookCharsLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat">
      <span className={`stat__number${number < 0 ? ' stat__number--limit' : ''}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </div>
  );
}