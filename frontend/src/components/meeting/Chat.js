import React from "react";

export default function Chat() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="chat">
      <div className="chat-container">
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>

        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">Hi there</p>
        </div>

        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
        <div className="chat-individual">
          <div className="header">
            <p className="user">You</p>
            <span>{time}</span>
          </div>
          <p className="message">
            Hi thereakjfajksjfj sfjbjsfjs sjnfjsjfs sfkksfksk sfksfks ksnfksfk
          </p>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message to everyone" />
        <i className="fas fa-location-arrow"></i>
      </div>
    </div>
  );
}
