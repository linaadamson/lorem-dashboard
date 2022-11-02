// STYLES
import "./CreateProject.css";

// MATERIAL ICON
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

// PAGES AND COMPONENTS
import Banner from "../../../components/Banner";
import ProgressBar from "../../../components/ProgressBar";
import CreateProjectForm from "./CreateProjectForm";
import SettingsHeader from "./SettingsHeader";
import Buttons from "../../../components/Buttons";
import RolesTable from "./RolesTable";

// VARIABLES
let roles = ["Self", "Manager", "Peers", "Direct Report"];

export default function CreateProject() {
  return (
    <div className="create-project">
      <Banner title="PROJECT" />

      <div className="create-container">
        <ProgressBar />
        <CreateProjectForm />
      </div>

      <h2 className="settings-title">Settings</h2>

      <div className="settings-container">
        <div className="settings">
          {/* ROLES */}
          <div className="select-roles">
          <SettingsHeader title="Role" subtitle="Select evaluator roles" />
          <h4>Select evaluator role and number of evaluators per role</h4>
          <RolesTable />
          </div>

          {/* SURVEY */}
          <div className="survey-settings">
            <SettingsHeader title="Survey" subtitle="Survey for each role" />
            <div className="survey-container">
              {roles.map((role) => (
                <div key={role} className="survey-content">
                  <div className="survey-text">
                    <h4>360 Feedback Survey - {role}</h4>
                    <p>12 Questions</p>
                  </div>

                  <div className="survey-img">
                    <ModeEditOutlineOutlinedIcon />
                    <p>Preview</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EVALUATORS */}
          <SettingsHeader
            title="Evaluators"
            subtitle="Upload evaluators"
            show="true"
          />

          {/* DEVELOPMENT COACH */}
          <SettingsHeader
            title="Development Coach"
            subtitle="Upload evaluators"
            show="true"
          />

          {/* BUTTONS */}
          <Buttons to="/projects/preview" push = '/projects' text='CANCEL'/>
        </div>
      </div>
    </div>
  );
}
