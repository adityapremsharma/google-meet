import createDataContext from "./createDataContext";
import localHost, { paths } from "../api/localHost";

const apiReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_CALL_ID":
      return { ...state, saveCallId: action.payload };
    case "GET_CALL_ID":
      return { ...state, getCallId: action.payload };
    default:
      return state;
  }
};

const saveCallId = (dispatch) => {
  return (getPostData) => {
    localHost
      .post(paths.saveCallId, getPostData)
      .then((res) => {
        dispatch({ type: "SAVE_CALL_ID", payload: res });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const getCallId = (dispatch) => {
  return (id) => {
    localHost
      .get(`${paths.getCallId}${id}`)
      .then((res) => {
        dispatch({ type: "GET_CALL_ID", payload: res });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const { Context, Provider } = createDataContext(
  apiReducer,
  {
    saveCallId,
    getCallId,
  },
  {
    postCallId: {},
    callId: {},
  }
);
