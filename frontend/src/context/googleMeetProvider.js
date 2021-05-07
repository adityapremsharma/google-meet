import createDataContext from "./createDataContext";
import localHost, { paths } from "../api/localHost";

const googleMeetReducer = (state, action) => {
  switch (action.type) {
    case "CHATS":
      return { ...state, chats: [...state.chats, action.payload] };
    default:
      return state;
  }
};

const setChats = (dispatch) => {
  return (getChats) => {
    dispatch({ type: "CHATS", payload: getChats });
  };
};

export const { Context, Provider } = createDataContext(
  googleMeetReducer,
  {
    setChats,
  },
  {
    chats: [],
  }
);
