// STYLES
import "./Projects.css";

// MATERIAL UI ICONS
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddIcon from "@mui/icons-material/Add";

// IMPORTS
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";

// PAGES

export default function Projects() {
  return (
    <div className="projects">
      <Banner title="PROJECT" />
      <div className="projects-container">
        <BusinessCenterIcon className="projects-briefcase-img" />
        <h2>Project</h2>
        <p>Set up new project and add participants to get started</p>
        <Link to="/projects/create">
          <AddIcon className="projects-add-img" />
          <span>Get started</span>
        </Link>
      </div>
    </div>
  );
}
