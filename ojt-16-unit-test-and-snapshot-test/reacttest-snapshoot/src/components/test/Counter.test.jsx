import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
import "@testing-library/jest-dom";

test("it should decrement the counter correctly", () => {
  render(<Counter initialValue={5} />);
  const decrementButton = screen.getByTestId("minus-button");
  const countDisplay = screen.getByTestId("count-display");

  expect(countDisplay).toHaveTextContent("5");

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("4");

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("3");

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("2");

  expect(screen.container).toMatchSnapshot();
});
