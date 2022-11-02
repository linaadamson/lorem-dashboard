import "./SurveyTable.css";

export default function SurveyTable() {
  return (
    <div className="survey-table">
      <table>
        <thead>
        <tr>
          <th className="score">Score</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Frequency</td>
          <td>Almost Never</td>
          <td>Not very Often</td>
          <td>Some of the time</td>
          <td>Most of the Time</td>
          <td>Nearly Always</td>
        </tr>
        <tr>
          <td>Ability</td>
          <td>Clear weakness</td>
          <td>Fairly good</td>
          <td>Good</td>
          <td>Very good</td>
          <td>Clear Strength</td>
        </tr>
        <tr>
          <td>Effectiveness</td>
          <td>1-20%</td>
          <td>21-40%</td>
          <td>41-60%</td>
          <td>61-80%</td>
          <td>80-100%</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
