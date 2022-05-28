const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "POST_LOGIN_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "POST_LOGIN_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
        msg: action.payload,
      };
    }
    case "UPDATE_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "UPDATE_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "UPDATE_PRODUCT_REJECTED": {
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

export default login;
