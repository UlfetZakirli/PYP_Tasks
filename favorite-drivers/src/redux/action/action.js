import { getPayload } from "../utils/getPayload";
import axios from "axios";

export const getData = (offset, limit, params = false) => {
  return (dispatch) => {
    const queryParams = new URLSearchParams();

    queryParams.append("offset", offset);
    queryParams.append("limit", limit);
    queryParams.append("offset", offset);

    if (params && params.order) {
      queryParams.append("order", JSON.stringify(params.order));
    }
    const type = "GET_DATA";
    dispatch({ type: type, payload: getPayload("pending", null) });

    axios
      .get(`https://ergast.com/api/f1/drivers.json`)

      .then((res) => {
        console.log("getting");
        dispatch({ type: type, payload: getPayload("succsess", res.data) });
      })
      .catch((err) =>
        dispatch({ type: type, payload: getPayload("error", err) })
      );
  };
};

export const addData = (e) => {
  return { type: "ADD_FAVORITE_DATA", payload: e };
};
export const removeData = (e) => {
  console.log(e);
  return { type: "REMOVE_FAVORITE_DATA", payload: e };
};
