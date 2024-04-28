export const handleFulfilled = (state) => {
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload.message;
};
