import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Details from "./Details";
import "@testing-library/jest-dom";

const mockBack = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    back: mockBack,
  }),
}));

// ✅ Fix: Add a named component with displayName
jest.mock("../favouritesButton/FavouritesButton", () => {
  const MockFavouritesButton = ({
    isFavourite,
    handleFavouritesToggle,
    slug,
  }) => (
    <button
      onClick={() => handleFavouritesToggle(slug)}
      data-testid="favourites-button"
    >
      {isFavourite ? "Unfavourite" : "Favourite"}
    </button>
  );
  MockFavouritesButton.displayName = "MockFavouritesButton";
  return MockFavouritesButton;
});

describe("Details component", () => {
  const mockToggle = jest.fn();

  const mockProps = {
    imageSource: "https://example.com/art.jpg",
    name: "Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    genre: "Post-Impressionism",
    slug: "starry-night",
    isFavourite: true,
    handleFavouritesToggle: mockToggle,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders artwork details correctly", () => {
    render(<Details {...mockProps} />);

    expect(screen.getByAltText(/starry night/i)).toHaveAttribute(
      "src",
      "https://example.com/art.jpg"
    );
    expect(screen.getByText("Starry Night")).toBeInTheDocument();
    expect(screen.getByText(/by vincent van gogh/i)).toBeInTheDocument();
    expect(screen.getByText("1889")).toBeInTheDocument();
    expect(screen.getByText(/post-impressionism/i)).toBeInTheDocument();
  });

  test("renders and triggers FavouritesButton correctly", () => {
    render(<Details {...mockProps} />);

    const favButton = screen.getByTestId("favourites-button");
    expect(favButton).toHaveTextContent("Unfavourite");

    fireEvent.click(favButton);
    expect(mockToggle).toHaveBeenCalledWith("starry-night");
  });

  test("calls router.back when Return button is clicked", () => {
    render(<Details {...mockProps} />);

    const returnBtn = screen.getByRole("button", { name: /return/i });
    fireEvent.click(returnBtn);

    expect(mockBack).toHaveBeenCalled();
  });

  test("renders comment section and controls", () => {
    render(<Details {...mockProps} />);

    const comments = screen.getAllByText("Comments");
    expect(comments).toHaveLength(3);

    expect(
      screen.getByPlaceholderText(/please enter your comment/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});
