import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "./Cards";

// ✅ Mock Card component to isolate Cards testing
jest.mock("./Card", () => ({ name, artist }) => (
  <div data-testid="mock-card">
    <p>{name}</p>
    <p>{artist}</p>
  </div>
));

describe("Cards component", () => {
  const mockToggle = jest.fn();

  const mockData = [
    {
      slug: "mona-lisa",
      imageSource: "/mona-lisa.jpg",
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: "1503",
      genre: "Renaissance",
      isFavourite: true,
    },
    {
      slug: "girl-with-pearl",
      imageSource: "/girl-with-pearl.jpg",
      name: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: "1665",
      genre: "Baroque",
      isFavourite: false,
    },
  ];

  test("renders a list of Card components when data is provided", () => {
    render(
      <Cards
        data={mockData}
        handleFavouritesToggle={mockToggle}
        emptyArray={false}
      />
    );

    const cards = screen.getAllByTestId("mock-card");
    expect(cards).toHaveLength(2);

    expect(screen.getByText("Mona Lisa")).toBeInTheDocument();
    expect(screen.getByText("Leonardo da Vinci")).toBeInTheDocument();

    expect(screen.getByText("Girl with a Pearl Earring")).toBeInTheDocument();
    expect(screen.getByText("Johannes Vermeer")).toBeInTheDocument();
  });

  test('shows "No favourite artists selected" when emptyArray is true', () => {
    render(
      <Cards data={[]} handleFavouritesToggle={mockToggle} emptyArray={true} />
    );

    expect(
      screen.getByText("No favourite artists selected")
    ).toBeInTheDocument();
  });

  test("does not show 'No favourite' message when emptyArray is false", () => {
    render(
      <Cards
        data={mockData}
        handleFavouritesToggle={mockToggle}
        emptyArray={false}
      />
    );

    expect(
      screen.queryByText("No favourite artists selected")
    ).not.toBeInTheDocument();
  });
});
