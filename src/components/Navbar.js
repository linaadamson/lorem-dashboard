// STYLES
import "./Navbar.css";

// MATERIAL UI IMPORTS
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Navbar({ handleClick }) {
  return (
    <nav className="navbar">
      <ul>
        <li className="mobile-menu">
          <MenuRoundedIcon className="burger" onClick={handleClick} />
        </li>
        <li className="logo"> Lorem </li>

        <li className="admin">
          <AccountCircleRoundedIcon className="admin-avatar-img" />
          <span>Admin</span>
        </li>

        <li>
          <KeyboardArrowDownRoundedIcon className="arrow-down" />
        </li>
      </ul>
    </nav>
  );
}
