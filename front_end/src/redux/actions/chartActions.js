import { ActionTypes } from "../constants/action-types";


export const setChartData = (data) => {
  return {
    type: ActionTypes.SET_CHARTDATA,
    payload: data,
  };
};

export const setChartTitle = (data) => {
  return {
    type: ActionTypes.SET_CHART_TITLE,
    payload: data,
  };
};

export const setChartLineName = (data) => {
  return {
    type: ActionTypes.SET_CHART_LINE_NAME,
    payload: data,
  };
};