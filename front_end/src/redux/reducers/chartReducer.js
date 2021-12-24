import { ActionTypes } from "../constants/action-types";
const initialState = {
  chartData: [],
};

export const chartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARTDATA:
      return { ...state, chartData: payload };
    default:
      return state;
  }
};
