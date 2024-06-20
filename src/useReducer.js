const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerObject = (state) => ({
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  CONFIRM: {
    ...state,
    confirmed: true,
    loading: false,
    error: false,
  },
  DELETE: {
    ...state,
    deleted: true,
  },
  RESET: {
    ...initialState,
  },
  CANCEL: {
    ...state,
    confirmed: false,
    value: "",
  },
  SET_VALUE: (payload) => ({
    ...state,
    value: payload,
  }),
});

const reducer = (state, action) => {
  const actionHandler = reducerObject(state)[action.type];
  return typeof actionHandler === "function"
    ? actionHandler(action.payload)
    : actionHandler || state;
};

export { reducer, reducerObject, initialState };
