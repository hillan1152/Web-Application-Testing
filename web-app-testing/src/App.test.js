import React from 'react';
import { render } from '@testing-library/react';
import App, { addBall } from './App';


test('renders without crashing', () => {
  render(<App />);
});

test('Add a Ball', () => {
  let actual;
  let expected;
  actual = addBall();
  expected = 3;
  expect(actual).toBeLessThanOrEqual(expected);
})