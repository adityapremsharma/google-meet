import React from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import CallActions from "../components/meeting/CallActions";
// import MeetingHeader from "../components/meeting/MeetingHeader";
import MeetingReadyCard from "../components/meeting/MeetingReadyCard";
import MeetingSidebar from "../components/meeting/MeetingSidebar";
import Peer from "peerjs";

export default function Main() {
  // const history = useHistory();
  const { id } = useParams();
  const isAdmin = window.location.hash === "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;

  const peer = new Peer();
  const socket = io.connect("http://localhost:3001");

  return (
    <div className="meeting">
      <video src="" controls muted></video>
      <div>
        <video src=""></video>
      </div>

      <MeetingReadyCard url={url} />

      {/* <MeetingHeader /> */}
      <MeetingSidebar />
      <CallActions />
    </div>
  );
}
