import React from "react";

export default function CallActions() {
  return (
    <div className="call-actions">
      <div className="meeting-details">
        <div className="meeting-details-btn">
          <h2>Meeting details</h2>
          <i className="fas fa-chevron-up"></i>
        </div>
      </div>
      <div className="btn-secondary-container">
        <div className="btn-secondary">
          <i className="fas fa-microphone"></i>
        </div>
        <div className="btn-secondary">
          <i className="fas fa-phone"></i>
        </div>
        <div className="btn-secondary">
          <i className="fas fa-video"></i>
        </div>
      </div>

      <div className="more-options">
        <div className="more-options-button">
          <i className="far fa-closed-captioning"></i>
          <p>Turn on captions</p>
        </div>
        <div className="more-options-button">
          <i className="fas fa-arrow-alt-circle-up"></i>
          <p>Present now</p>
        </div>
        <div className="more-options-dot">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  );
}
