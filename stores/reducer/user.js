const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const user = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "GET_DATA_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_DATA_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    }
    case "GET_DATA_USER_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    case "GET_USER_BY_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_USER_BY_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    }
    case "GET_USER_BY_ID_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    case "UPDATE_PIN_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "UPDATE_PIN_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "UPDATE_PIN_USER_REJECTED": {
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

export default user;
