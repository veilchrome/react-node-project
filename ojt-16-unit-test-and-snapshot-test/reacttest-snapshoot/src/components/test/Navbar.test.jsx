import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

test("renders navbar with correct links", () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
