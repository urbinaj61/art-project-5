import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

jest.mock("next/link", () => {
  const MockLink = ({ href, children, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = "NextLinkMock"; // This fixes the display name warning
  return MockLink;
});

describe("Footer component", () => {
  test("renders all navigation links with correct text and href", () => {
    render(<Footer />);

    const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
    const galleryLink = screen.getByRole("link", { name: /art pieces/i });
    const favouritesLink = screen.getByRole("link", { name: /favourites/i });

    expect(spotlightLink).toBeInTheDocument();
    expect(spotlightLink).toHaveAttribute("href", "/");
    expect(spotlightLink).toHaveClass("art-link");

    expect(galleryLink).toBeInTheDocument();
    expect(galleryLink).toHaveAttribute("href", "/gallery");
    expect(galleryLink).toHaveClass("art-link");

    expect(favouritesLink).toBeInTheDocument();
    expect(favouritesLink).toHaveAttribute("href", "/favourites");
    expect(favouritesLink).toHaveClass("art-link");
  });

  test("nav container has correct class", () => {
    const { container } = render(<Footer />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("art-navigation");
  });
});
