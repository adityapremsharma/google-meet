import axios from "axios";
import moment from "moment";

// const APIKEY = process.env.REACT_APP_TMDBAPIKEY;

export const paths = {
  saveCallId: "/api/save-call-id/",
  getCallId: "/api/get-call-id/",
};

// export const pathParams = {
//   trendingParams: "en-US",
// };

export default axios.create({
  baseURL: "http://localhost:3001",
  //   params: {
  //     api_key: APIKEY,
  //   },
});

export const formatDate = (timestamp) => {
  return moment(timestamp).format("h:mm A");
};
