import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavouritesButton from "./FavouritesButton";

describe("FavouritesButton component", () => {
  const mockToggle = jest.fn();
  const slug = "starry-night";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders button inside a container", () => {
    const { container } = render(
      <FavouritesButton
        slug={slug}
        isFavourite={false}
        handleFavouritesToggle={mockToggle}
      />
    );

    const aside = container.querySelector("aside");
    expect(aside).toHaveClass("art-favourites-button-container");

    const button = container.querySelector("button");
    expect(button).toHaveClass("art-favourites-button");
  });

  test("renders SVG with correct class when not favourite", () => {
    const { container } = render(
      <FavouritesButton
        slug={slug}
        isFavourite={false}
        handleFavouritesToggle={mockToggle}
      />
    );

    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("art-favourite-svg");
  });

  test("renders SVG with correct class when isFavourite is true", () => {
    const { container } = render(
      <FavouritesButton
        slug={slug}
        isFavourite={true}
        handleFavouritesToggle={mockToggle}
      />
    );

    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("art-favourites-svg-fill");
  });

  test("calls handleFavouritesToggle with slug when clicked", () => {
    render(
      <FavouritesButton
        slug={slug}
        isFavourite={true}
        handleFavouritesToggle={mockToggle}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledWith("starry-night");
  });
});
