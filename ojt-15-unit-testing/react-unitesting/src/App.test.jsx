import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("Navbar Rendered ", () => {
    const { getByTestId } = render(<App />);
    const navbarElement = getByTestId("navbar"); // referensi : https://jestjs.io/docs/expect#tobetruthy
    expect(navbarElement).toBeTruthy();
  });

  test("form Rendered ", () => {
    const { getByTestId } = render(<App />);
    const formElement = getByTestId("form");
    expect(formElement).toBeTruthy();
  });
});
