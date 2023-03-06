import { fireEvent, render, screen } from "@testing-library/react";
import App from "./index";

test('initial state button is active and checkbox is unchecked', () => {
  render(<App/>)
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('click checkbox & disable button, and next reuncheck the checkbox & enable button', () => {
  render(<App/>)
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');
  
  //check the checkbox
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  //re-uncheck the checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
})
