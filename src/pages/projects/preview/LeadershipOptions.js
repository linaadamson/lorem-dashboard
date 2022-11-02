export default function LeadershipOptions({ text }) {
  return (
    <div className="leadership-options">
      <p>{text}</p>
      <span>
        <data value="1">1</data>
        <data value="2">2</data>
        <data value="3">3</data>
        <data value="4">4</data>
        <data value="5">5</data>
        <data value="Don't Know">Don't Know</data>
      </span>
    </div>
  );
}
