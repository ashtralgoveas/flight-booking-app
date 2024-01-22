import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Subscriber from "./";

test("renders Subscribe component", () => {
  render(<Subscriber />);

  const subscribeElement = screen.getByTestId("subscribe");
  expect(subscribeElement).toBeInTheDocument();
});

test("allows user to subscribe", () => {
  render(<Subscriber />);

  const emailInput = screen.getByPlaceholderText("Enter your email address");
  const subscribeButton = screen.getByText("Subscribe");

  // Type a sample email address
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });

  // Click the subscribe button
  fireEvent.click(subscribeButton);
});
