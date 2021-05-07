import React from "react";
import googleMeetLogo from "../../media/images/google-meet-logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="left-side">
        <img src={googleMeetLogo} alt="google-meet-logo" />
        <span>Meet</span>
      </div>
      <div className="right-side">
        <i class="fas fa-question-circle"></i>
        <i class="far fa-comment-alt"></i>
        <i class="fas fa-cog"></i>
        <i class="fas fa-braille"></i>
        <i class="far fa-user-circle"></i>
      </div>
    </header>
  );
}
