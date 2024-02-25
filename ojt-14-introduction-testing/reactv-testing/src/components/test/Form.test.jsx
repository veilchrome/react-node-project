import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { extendExpect } from "@testing-library/jest-dom";
import Form from "../Form";

describe("Form Component", () => {
  test("renders form with name and email inputs", () => {
    const { getByLabelText } = render(<Form />);
    const nameInput = getByLabelText("Name:");
    const emailInput = getByLabelText("Email:");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test("submits form with correct values", async () => {
    const { getByLabelText, getByText } = render(<Form />);
    const nameInput = getByLabelText("Name:");
    const emailInput = getByLabelText("Email:");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    fireEvent.click(submitButton);
  });
});
