import { render, screen } from "@testing-library/react";
import Counter from "../Counter";
import "@testing-library/jest-dom";

test("it should have the correct initial value when set to 7 ", () => {
  render(<Counter initialValue={7} />);
  const count = screen.getByText(7);
  expect(count).toBeVisible();
});
test("it should have the correct initial value when set to 0 ", () => {
  render(<Counter />);
  const count = screen.getByText(0);
  expect(count).toBeVisible();
});
