// records whether or not the user is logged in
import { FETCH_USER } from '../actions/types';
// return null means is not defined yet,
// return object means user is loged in
// return false means user is not loged in
export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // action.payload returns "" when the user is not loged in
    default:
      return state;
  }
}
