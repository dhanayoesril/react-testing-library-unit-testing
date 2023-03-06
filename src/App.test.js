import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled red button and then revert it", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Disabled blue button and then revert it", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("red")).toBe("red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Work for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
