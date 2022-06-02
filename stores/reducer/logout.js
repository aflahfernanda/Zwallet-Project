const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const logout = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGOUT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "POST_LOGOUT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "POST_LOGOUT_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
        msg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default logout;
