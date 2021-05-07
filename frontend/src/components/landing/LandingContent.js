import React from "react";
import meet from "../../media/images/landing-content-meet.jpg";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

export default function Content() {
  const history = useHistory();

  const startMeeting = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  return (
    <div className="landing-content">
      <div className="landing-content-action">
        <h1>Premium video meetings. Now free for everyone.</h1>
        <p>
          We re-engineered the service we built for secure business meetings,
          Google Meet, to make it free and available for all.
        </p>
        <div className="btn-container">
          <button className="btn-primary" onClick={startMeeting}>
            <i className="fas fa-video"></i>New Meeting
          </button>
          <div className="input-primary">
            <i className="fas fa-keyboard"></i>
            <input type="text" placeholder="Enter a code or link." />
          </div>
          <h3 className="btn-text">Join</h3>
        </div>
        <hr />
        <p className="landing-content-footer">
          <span>Learn more</span> about Google Meet
        </p>
      </div>
      <div className="landing-content-image">
        <img src={meet} alt="meet" />
      </div>
    </div>
  );
}
