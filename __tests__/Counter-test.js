import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../src/screens/Counter/Counter';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import store from '../src/store/store';
import { Provider } from 'react-redux';

test('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <Provider store={store}>
        <Counter />
      </Provider>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
