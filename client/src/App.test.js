import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('display header', () => {
  // ARRANGE
  const { getByTestId } = render(<App />);

  // ACT
  const header1 = getByTestId('header');
  // use the following to break test
  // const header1 = getByTestId('headers');

  // ASSERT
  expect(header1).toBeTruthy();
});

test('displaying dark-mode toggle button', async () => {
  // ARRANGE
  const expectedButtonCount = 1;
  // use the following to break test
  // const expectedButtonCount = 2;
  const { getAllByRole } = render(<App />);

  // ACT
  const buttons = getAllByRole('button');

  // ASSERT
  expect(buttons.length).toBe(expectedButtonCount);
});

test('expect text not in app', () => {
  // ARRANGE
  const { queryByText } = render(<App />);

  // ACT
  const element = queryByText(/fjfj/i);
  // use the following to break test
  //const element = queryByText(/player/i);

  // ASSERT
  expect(element).not.toBeInTheDocument();
});