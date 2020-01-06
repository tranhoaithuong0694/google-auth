import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT, FETCH_STREAMS } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};
