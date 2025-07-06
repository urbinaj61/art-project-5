import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

jest.mock("next/link", () => {
  return ({ href, children }) => (
    <a href={typeof href === "string" ? href : href.pathname}>{children}</a>
  );
});

jest.mock("../favouritesButton/FavouritesButton", () => {
  return ({ isFavourite, handleFavouritesToggle, slug }) => (
    <button
      data-testid="favourites-button"
      onClick={() => handleFavouritesToggle(slug)}
    >
      {isFavourite ? "Unfavourite" : "Favourite"}
    </button>
  );
});

describe("Card component", () => {
  const mockToggle = jest.fn();
  const props = {
    imageSource: "https://example.com/starry-night.jpg",
    name: "Starry Night",
    artist: "Vincent van Gogh",
    slug: "starry-night",
    year: "1889",
    genre: "Post-Impressionism",
    isFavourite: true,
    handleFavouritesToggle: mockToggle,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders image, name, artist, and favourite button", () => {
    render(<Card {...props} />);

    expect(screen.getByAltText("Starry Night")).toBeInTheDocument();
    expect(screen.getByText("Starry Night")).toBeInTheDocument();
    expect(screen.getByText(/by vincent van gogh/i)).toBeInTheDocument();
    expect(screen.getByTestId("favourites-button")).toBeInTheDocument();
  });

  test("image link points to correct details path", () => {
    render(<Card {...props} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/details/${props.slug}`);
  });

  test("clicking the favourite button calls handleFavouritesToggle with slug", () => {
    render(<Card {...props} />);
    const button = screen.getByTestId("favourites-button");
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledWith("starry-night");
  });
});
