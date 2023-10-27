export const initialState = 0;

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  else if (action.type === "DEL") {
    return (state + action.payload)
  }

  return state;
};
