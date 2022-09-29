export const Reducer = (state = [], action) => {
  switch (action.type) {
    case "get_data":
      return [...state, ...action.payload];

    case "remove_data":
      return [...action.payload];

    case "post_data":
      return [...action.payload];

    default:
      return state;
  }
};
