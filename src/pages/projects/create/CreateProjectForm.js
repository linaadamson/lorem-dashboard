// STYLES
import "./CreateProjectForm.css";

// IMPORT MATERIAL UI
import ModeIcon from "@mui/icons-material/Mode";

// IMPORTS
import { useState } from "react";

export default function CreateProjectForm() {
  // form field values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <form className="create-project-form">
      <h2>
        Create Project{" "}
        <span>
          <ModeIcon />
        </span>
      </h2>

      <label>
        <span>Project name</span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>

      <label>
        <span>Description</span>
        <textarea
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </label>

      <div className="date-container">
        <div className="start-container">
          <label>
            <span>Start Date</span>
            <input
              required
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              placeholder="Date"
            />

            <input
              required
              type="time"
              onChange={(e) => setStartTime(e.target.value)}
              value={startTime}
              placeholder="Time"
            />
          </label>
        </div>

        <div className="end-container">
          <label>
            <span>End Date</span>
            <input
              required
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              placeholder="Date"
            />

            <input
              required
              type="time"
              onChange={(e) => setEndTime(e.target.value)}
              value={endTime}
              placeholder="Time"
            />
          </label>
        </div>
      </div>
    </form>
  );
}
