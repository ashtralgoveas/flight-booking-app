import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from ".";

test("renders Footer component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

test("renders company logo", () => {
  render(<Footer />);
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();
});

test("renders social media icons", () => {
  render(<Footer />);
  const facebookIcon = screen.getByTestId("facebook-icon");
  const twitterIcon = screen.getByTestId("twitter-icon");
  const tiktokIcon = screen.getByTestId("tiktok-icon");
  const youtubeIcon = screen.getByTestId("youtube-icon");
  const pinterestIcon = screen.getByTestId("pinterest-icon");

  expect(facebookIcon).toBeInTheDocument();
  expect(twitterIcon).toBeInTheDocument();
  expect(tiktokIcon).toBeInTheDocument();
  expect(youtubeIcon).toBeInTheDocument();
  expect(pinterestIcon).toBeInTheDocument();
});

test("renders footer links", () => {
  render(<Footer />);
  const informationLinks = screen.getAllByText("Information");
  const quickGuideLinks = screen.getAllByText("Quick Guide");

  expect(informationLinks.length).toBe(2);
  expect(quickGuideLinks.length).toBe(1);
});
