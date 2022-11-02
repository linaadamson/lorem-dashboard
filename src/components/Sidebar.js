// STYLES
import "./Sidebar.css";

// MATERIAL UI ICONS
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

// IMPORTS
import { NavLink } from "react-router-dom";

export default function Sidebar({isShowing, handleClick}) {
  return (
    <div  className={isShowing ? 'sidebar isShowing' : 'sidebar'}>
      <div className="side-links">
        <ul>
          <li>
            <NavLink to="/company" onClick={handleClick}>
              <BusinessOutlinedIcon />
              <span>Company</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleClick}>
              <BusinessCenterIcon />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Survey" onClick={handleClick}>
              <BorderColorIcon />
              <span>Survey</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/participants" onClick={handleClick}>
              <PeopleOutlineIcon />
              <span>Participants</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" onClick={handleClick}>
              <ChatBubbleOutlineIcon />
              <span>Feedback</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/report" onClick={handleClick}>
              <ContentCopyOutlinedIcon />
              <span>Report</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
