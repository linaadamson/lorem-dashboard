// STYLES
import "./Survey.css";

// COMPONENTS
import SurveyTable from "./SurveyTable";
import LeadershipOptions from "./LeadershipOptions";

export default function Survey() {
  return (
    <div className="survey">
      <div className="survey-container">
        <div className="survey-introduction">
          <h3>
            Hello <span>Burna Boy</span>, this questionnaire is about your
            perception of <span>Yemi Alade</span>
          </h3>

          <p>
            You must enter answers for ALL of the questions in the
            questionnaire.
          </p>
          <br />
          <p>
            They relate to your perception of your own style and behaviour. This
            information is vital for your report. As far as possible try to base
            your answers on actual self-observations of your behaviour.
          </p>
          <br />
          <p>
            The marking scale is 1-5, where 1 is the lowest score and 5 is the
            highest score. If you really cant answer a question then you can
            tick the "Don't Know box"
          </p>
          <br />
          <p>
            You must answer every question below indicating any free text
            questions. If you have no comments to make, then please enter 'N/A',
            but do not leave the box blank.
          </p>
          <br />
          <p className="text-emphasis">
            The exact interpretation of the marking scale will depend on the
            wordings of the question, but to help you choose which answer best
            applies you may find the table below useful.
          </p>
          <br />
          <p>
            For support you can email <span>user@email.com</span>
          </p>

          <SurveyTable />
        </div>

        <div className="leadership-section">
          <h3>Leadership</h3>
          <div className="grey-background">
            <LeadershipOptions text="Enthusiastically accepts beneficial change" />
            <LeadershipOptions text="Looks for common ground and builds co-operation even in difficult circumstances" />
            <LeadershipOptions text="Takes responsibility for setting up their own learning opportunities" />
          </div>

          <div className="grey-underline">
            <LeadershipOptions text="Develops ideas and solutions jointly with other" />
            <LeadershipOptions text="Talks and listens to customers to clarify their real needs and expectations" />
            <LeadershipOptions text="Remains calm, professional & focused as a role model in difficult situations" />
            <LeadershipOptions text="Sticks to the task in hand, even if practical difficulties arise" />
            <LeadershipOptions text="This is a question that should be a question" />
          </div>

          <div className="open-ended-questions">
            <label>
              <span>
                What does Yemi Alade do well that you would like them to do more
                often?
              </span>
              <textarea required />
            </label>

            <label>
              <span>
                What would you like Yemi Alade to do differently or stop doing
              </span>
              <textarea required />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
