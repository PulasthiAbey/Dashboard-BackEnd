import { ActionTypes } from "../constants/action-types";

export const setMovies = (chartData) => {
  return {
    type: ActionTypes.SET_CHARTDATA,
    payload: chartData,
  };
};
