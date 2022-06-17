import {
  TOGGLE_LOADER, SET_PLUS_COUNTER_VALUE, SET_MINUS_COUNTER_VALUE
} from './types';

export const initialState = {
  isLoader: false,
  counterValue: 0
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: !state.isLoader,
      };
    case SET_PLUS_COUNTER_VALUE:
      return {
        ...state,
        counterValue: state.counterValue + action.step,
      };
    case SET_MINUS_COUNTER_VALUE:
      return {
        ...state,
        counterValue: state.counterValue - action.step,
      };
    default:
      return state;
  }
}
