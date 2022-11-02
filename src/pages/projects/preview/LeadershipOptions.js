export default function LeadershipOptions({ text }) {
  return (
    <div className="leadership-options">
      <p>{text}</p>
      <span>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="Don't Know">Don't Know</option>
      </span>
    </div>
  );
}
