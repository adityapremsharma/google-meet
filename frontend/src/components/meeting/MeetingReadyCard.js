import React from "react";
import security from "../../media/images/security.svg";

export default function MeetingReadyCard(props) {
  const { url } = props;
  return (
    <div className="meeting-card">
      <div className="header-cross">
        <h2>Your meeting's ready</h2>
        <i className="fas fa-times"></i>
      </div>

      <button className="btn-primary">
        <i className="fas fa-user-plus"></i>Add others
      </button>
      <p>or share this meeting link with others you want in thiis meeting</p>
      <div className="meeting-link">
        <p>{url}</p>
        <i
          className="far fa-copy"
          onClick={() => navigator.clipboard.writeText(url)}
        ></i>
      </div>
      <div className="meeting-security">
        <img src={security} alt="security-icon" />
        <p>
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="meeting-user-email">Joined as adityapremsharma@gmail.com</p>
    </div>
  );
}
