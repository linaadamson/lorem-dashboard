// STYLES
import "./Buttons.css";

// IMPORTS
import { Link, useNavigate } from "react-router-dom";

export default function Buttons({ to, push, text }) {
  const navigate = useNavigate();
  return (
    <div className="project-btns">
      <Link to={to}>
        <button className="next-btn btn">NEXT</button>
      </Link>
      <button onClick={() => navigate(push)} className="cancel-btn btn">
        {text}
      </button>
    </div>
  );
}
