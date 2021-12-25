import { ActionTypes } from "../constants/action-types";
const initialState = {
  chartData: [],
  chartTitle: "",
  chartLineName: [],
};

export const chartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARTDATA:
      return { ...state, chartData: payload };
    case ActionTypes.SET_CHART_TITLE:
      return { ...state, chartTitle: payload };
    case ActionTypes.SET_CHART_LINE_NAME:
      return { ...state, chartLineName: payload };
    default:
      return state;
  }
};
