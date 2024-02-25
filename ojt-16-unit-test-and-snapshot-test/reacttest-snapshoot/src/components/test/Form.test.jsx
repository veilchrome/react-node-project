import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Form from "../Form";
import "@testing-library/jest-dom";

describe("Form Component", () => {
  test("renders form with name and email inputs", () => {
    const { container } = render(<Form />);
    expect(container).toMatchSnapshot();
  });

  test("submits form with correct values", async () => {
    const { getByLabelText, getByText, container } = render(<Form />);
    const nameInput = getByLabelText("Name:");
    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Password:");
    const submitButton = getByText("Submit");

    // Fill out form inputs
    fireEvent.change(nameInput, { target: { value: "Selamet Saputra" } });
    fireEvent.change(emailInput, {
      target: { value: "selametsaputra123@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "Password12345" } });

    // Submit form
    fireEvent.click(submitButton);

    // Wait for form data to be updated
    await waitFor(() => {
      expect(
        getByText(
          "Name: Selamet Saputra, Email: selametsaputra123@gmail.com, Password: Password12345"
        )
      ).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
