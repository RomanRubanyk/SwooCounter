import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/Button/Button'

describe('<Button/>', () => {
  let component;

  test('should render correctly', () => {
    component = renderer.create(<Button title="Button test" onPress={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  test('should render correctly with props', () => {
    component = renderer.create(
      <Button title={'Button test'} onPress={() => {}} />,
    );

    expect(component).toMatchSnapshot();
  });
});
