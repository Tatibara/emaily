//the purpose of action creator is to create and return an action. this action will sent to all different reducers, which produce a new value state state and update that state inside of our redux store. the updated store then update all different components inside of our react app

import axios from "axios";
import { FETCH_USER } from "./types";

// whenever the actioncreator called,it will return a function, redux thunk will see that we return a function, it will automatically call it with a dispatch param. We are waiting for respond and then we dispatch our action
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

/* export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
}; */
