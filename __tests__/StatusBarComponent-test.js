import React from 'react';
import renderer from 'react-test-renderer';
import StatusBarComponent from '../src/components/StatusBarComponent/StatusBarComponent'

test('renders correctly', () => {
  const tree = renderer.create(<StatusBarComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
