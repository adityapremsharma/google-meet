import React from "react";
import Chat from "./Chat";

export default function MeetingSidebar() {
  return (
    <div className="meeting-sidebar">
      <div className="header-cross">
        <h2>Meeting details</h2>
        <i className="fas fa-times"></i>
      </div>
      <div className="meeting-sidebar-btn-container">
        <div className="btn-tertiary active">
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
      </div>
      <Chat />
    </div>
  );
}
