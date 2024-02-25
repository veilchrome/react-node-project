import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom library
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  test("Navbar renders without crashing", () => {
    const { getByRole } = render(<Navbar />);
    const navbarList = getByRole("list");
    expect(navbarList).toBeInTheDocument();
  });

  test("Navbar has correct list items", () => {
    const { getByRole, getByText } = render(<Navbar />);
    const navbarList = getByRole("list");

    expect(navbarList).toContainElement(getByText("Gandum A"));
    expect(navbarList).toContainElement(getByText("Gandum B"));
    expect(navbarList).toContainElement(getByText("Gandum C"));
  });
});
