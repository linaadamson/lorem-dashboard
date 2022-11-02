// STYLES
import "./SurveyPreview.css";

// IMPORTS
import Banner from "../../../components/Banner";
import ProgressBar from "../../../components/ProgressBar";
import Survey from './Survey'
import Buttons from '../../../components/Buttons'

// IMAGE IMPORT
import metaLogo from '../../../assets/meta-logo.png'

export default function SurveyPreview() {
  return (
    <div className="survey-preview">
      <Banner title="Project" />
      <ProgressBar />
      <h2>Preview Survey</h2>
      <div className="band"></div>
      <img src={metaLogo} alt="meta logo"/>

      <Survey/>
      <Buttons to="/projects" push = '/projects/create' text='BACK'/>
    </div>
  );
}
