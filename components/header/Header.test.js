import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
  test("renders the heading text", () => {
    render(<Header />);

    const headingElement = screen.getByRole("heading", {
      name: /art gallery/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass("art-heading");
  });

  test("has correct structure and class names", () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector("header");

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("art-header");
  });
});
