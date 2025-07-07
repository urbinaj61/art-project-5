import React from "react";
import { render, screen } from "@testing-library/react";
import Palette from "./Palette";

Palette.displayName = "Palette";

describe("Palette component", () => {
  it("returns null if colors prop is not an array", () => {
    const { container } = render(<Palette colors={null} />);
    expect(container.firstChild).toBeNull();

    const { container: container2 } = render(<Palette colors="not-an-array" />);
    expect(container2.firstChild).toBeNull();
  });

  it("returns null if colors prop is an empty array", () => {
    const { container } = render(<Palette colors={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders heading and color divs when colors are provided", () => {
    const colors = ["red", "#00ff00", "rgb(0,0,255)"];
    render(<Palette colors={colors} />);

    expect(
      screen.getByText(/colours used in this art peice/i)
    ).toBeInTheDocument();

    const colorElements = document.querySelectorAll(".art-colour");
    expect(colorElements.length).toBe(colors.length);

    colors.forEach((color, idx) => {
      expect(colorElements[idx]).toHaveStyle({ backgroundColor: color });
    });
  });
});
