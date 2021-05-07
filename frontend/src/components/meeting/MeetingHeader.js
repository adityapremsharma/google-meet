import React from "react";

export default function MeetingHeader() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="meeting-header">
      <div className="btn-tertiary">
        <i className="fas fa-user-friends"></i>
        <div className="indicator">
          <span>1</span>
        </div>
      </div>
      <div className="btn-tertiary">
        <i className="fas fa-comment-alt"></i>
        <div className="indicator">
          <span>1</span>
        </div>
      </div>
      <div className="btn-tertiary">
        <i className="fas fa-shapes"></i>
      </div>
      <div className="time">
        <h2>{time}</h2>
      </div>
      <div className="profile">
        <i className="far fa-user-circle"></i>
      </div>
    </div>
  );
}
