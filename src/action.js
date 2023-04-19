export const IncAction = () => async (dispatch) => {
  dispatch({
    type: "Increment",
    payload: 5,
  });
};

export const DecAction = () => async (dispatch) => {
  dispatch({
    type: "Decrement",
    payload: 5,
  });
};
