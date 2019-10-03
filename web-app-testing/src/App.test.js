import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const { setBalls, addBall } = require('./App');

test('renders without crashing', () => {
  render(<App/>)
});

test('Ball Counts', () => {
  expect(setBalls({addBall})).toBeLessThanOrEqual(3);
})