const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const exports = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_EXPORT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_DATA_EXPORT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case "GET_DATA_EXPORT_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default exports;
