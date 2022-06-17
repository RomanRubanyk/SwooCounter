import {
  TOGGLE_LOADER, SET_PLUS_COUNTER_VALUE, SET_MINUS_COUNTER_VALUE
} from './types';

export const toggleLoader = () => ({ type: TOGGLE_LOADER });
export const setPlusCounterValue = (step) => ({ type: SET_PLUS_COUNTER_VALUE, step });
export const setMinusCounterValue = (step) => ({ type: SET_MINUS_COUNTER_VALUE, step });
