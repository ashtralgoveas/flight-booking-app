import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from ".";

test("renders Home component", () => {
  render(<Home />);
});

test("renders main text", () => {
  render(<Home />);
  const mainText = screen.getByText(
    /Embrace the Skies with Us - Come Fly Away!/i
  );
  expect(mainText).toBeInTheDocument();
});

test("renders video element", () => {
  render(<Home />);
  const videoElement = screen.getByTestId("home-video");
  expect(videoElement).toBeInTheDocument();
});
