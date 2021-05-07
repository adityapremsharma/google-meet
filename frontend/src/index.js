import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as ApiProvider } from "./context/apiProvider";
import { Provider as GoogleMeetProvider } from "./context/googleMeetProvider";

ReactDOM.render(
  <React.StrictMode>
    <GoogleMeetProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </GoogleMeetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
