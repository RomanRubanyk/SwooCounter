import reducers, { initialState } from '../src/store/general/reducers';
import { SET_MINUS_COUNTER_VALUE, SET_PLUS_COUNTER_VALUE, TOGGLE_LOADER } from '../src/store/general/types';
import { MINUS_STEP, PLUS_STEP } from '../src/constants/general';

describe('general reducer', () => {
  test('should return initial state', () => {
    expect(reducers(initialState, {})).toEqual(initialState);
  });

  test('minus action work', () => {
    expect(
      reducers(initialState, {
        type: SET_MINUS_COUNTER_VALUE,
        step: MINUS_STEP
      }),
    ).toEqual({
      ...initialState,
      counterValue: (initialState.counterValue - MINUS_STEP)
    });
  });

  test('plus action work', () => {
    expect(
      reducers(initialState, {
        type: SET_PLUS_COUNTER_VALUE,
        step: PLUS_STEP
      }),
    ).toEqual({
      ...initialState,
      counterValue: (initialState.counterValue + PLUS_STEP)
    });
  });

  test('should return new state with change loader', () => {
    expect(
      reducers(initialState, {
        type: TOGGLE_LOADER,
      }),
    ).toEqual({
      ...initialState,
      isLoader: !initialState.isLoader
    });
  });
});
