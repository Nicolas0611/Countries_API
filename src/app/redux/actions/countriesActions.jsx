import { CHANGE_MODE, OBTAIN_COUNTRIES } from "../types/countriesTypes";
import getCountries from "./services/getCountries";

export const changeMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};

export const obtainCountries = (param, word) => {
  return async (dispatch) => {
    const countries = await getCountries(param, word);
    dispatch({
      type: OBTAIN_COUNTRIES,
      payload: countries,
    });
  };
};
