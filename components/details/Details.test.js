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
  const mockHandleCommentsInput = jest.fn();
  const mockHandleDeleteComments = jest.fn();

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
    mockBack.mockClear();
  });

  test("renders artwork details correctly", () => {
    render(
      <Details
        {...mockProps}
        comments={[]}
        handleCommentsInput={mockHandleCommentsInput}
        handleDeleteComments={mockHandleDeleteComments}
        colors={[]}
      />
    );

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
    render(
      <Details
        {...mockProps}
        comments={[]}
        handleCommentsInput={mockHandleCommentsInput}
        handleDeleteComments={mockHandleDeleteComments}
        colors={[]}
      />
    );

    const favButton = screen.getByTestId("favourites-button");
    expect(favButton).toHaveTextContent("Unfavourite");

    fireEvent.click(favButton);
    expect(mockToggle).toHaveBeenCalledWith("starry-night");
  });

  test("calls router.back when Return button is clicked", () => {
    render(
      <Details
        {...mockProps}
        comments={[]}
        handleCommentsInput={mockHandleCommentsInput}
        handleDeleteComments={mockHandleDeleteComments}
        colors={[]}
      />
    );

    const returnBtn = screen.getByRole("button", { name: /return/i });
    fireEvent.click(returnBtn);

    expect(mockBack).toHaveBeenCalled();
  });

  test("renders comment section with comments and controls", () => {
    const mockComments = [
      { id: 1, comments: "Great art!", time: "2025-07-07" },
      { id: 2, comments: "Beautiful colors", time: "2025-07-06" },
    ];

    render(
      <Details
        {...mockProps}
        comments={mockComments}
        handleCommentsInput={mockHandleCommentsInput}
        handleDeleteComments={mockHandleDeleteComments}
        colors={[]}
      />
    );

    // Check all comment texts appear
    mockComments.forEach(({ comments }) => {
      expect(screen.getByText(comments)).toBeInTheDocument();
    });

    // Check the input placeholder exists
    expect(
      screen.getByPlaceholderText(/please enter your comment/i)
    ).toBeInTheDocument();

    // Check for button labeled "Send" (per your Form component)
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  test("renders no comments message when comments list is empty", () => {
    render(
      <Details
        {...mockProps}
        comments={[]}
        handleCommentsInput={mockHandleCommentsInput}
        handleDeleteComments={mockHandleDeleteComments}
        colors={[]}
      />
    );

    expect(
      screen.getByText(/there are no comments to show/i)
    ).toBeInTheDocument();
  });
});
