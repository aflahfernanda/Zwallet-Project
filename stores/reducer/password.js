const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const password = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "POST_PASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "POST_PASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
        msg: action.payload,
      };
    }
    case "UPDATE_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "UPDATE_PASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "UPDATE_PASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default password;
