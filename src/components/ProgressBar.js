import React from "./ProgressBar.css";

export default function ProgressBar() {
  return (
    <div className="progress-bar">
      <div className="progress-item completed">
        <div className="progress-counter">1</div>
        <div className="progress-text">Create Project</div>
      </div>

      <div className="progress-item">
        <div className="progress-counter">2</div>
        <div className="progress-text">Add Participants</div>
      </div>

      <div className="progress-item">
        <div className="progress-counter">3</div>
        <div className="progress-text">Set up Email</div>
      </div>

      <div className="progress-item">
        <div className="progress-counter">4</div>
        <div className="progress-text">Finalise</div>
      </div>
    </div>
  );
}
