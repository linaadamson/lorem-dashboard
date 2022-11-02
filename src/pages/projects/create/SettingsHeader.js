// STYLES
import "./SettingsHeader.css";

// IMPORTS
import { useState } from "react";

export default function SettingsHeader({ title, subtitle, show }) {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleChangeOne = () => {
    if (checkedTwo) {
      setCheckedTwo(false);
    }
    setCheckedOne(checkedOne ? false : "select evaluators");
  };

  const handleChangeTwo = () => {
    if (checkedOne) {
      setCheckedOne(false);
    }
    setCheckedTwo(checkedTwo ? false : "participants choose");
  };

  return (
    <div className="settings-header">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {show && (
        <div className="options-container">
          <div>
            <input
              type="checkbox"
              id="select-evaluators"
              checked={checkedTwo}
              onChange={handleChangeTwo}
              className={checkedTwo ? "checked" : ""}
            />
            <label htmlFor="select-evaluators"> I will select evaluators</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="participants-choose"
              checked={checkedOne}
              onChange={handleChangeOne}
              className={checkedOne ? "checked" : ""}
            />
            <label htmlFor="participants-choose">
              Let participants choose their evaluators
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
