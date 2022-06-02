import axios from "../../utils/axios";
import user from "../reducer/user";

export const getDataExport = (id) => {
  return {
    type: "GET_DATA_EXPORT",
    payload: axios.get(`export/transaction/${id}`),
  };
};
