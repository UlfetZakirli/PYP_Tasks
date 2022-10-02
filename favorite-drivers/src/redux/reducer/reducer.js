import { combineReducers } from "redux";
const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action;
    default:
      return state;
  }
};
const favoriteDataReducer = (favs = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE_DATA":
      if (!favs.includes(action.payload)) {
        favs.push(action.payload);
      }
      return favs;

    case "REMOVE_FAVORITE_DATA":
      console.log(action);
      return favs.filter((item) => item.driverId !== action.payload.driverId);
    default:
      return favs;
  }
};

export default combineReducers({
  getData: getDataReducer,
  favoriteData: favoriteDataReducer,
});
