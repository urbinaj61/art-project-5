import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Comments from "./Comments";

describe("Comments component", () => {
  it("displays message when there are no comments", () => {
    render(
      <Comments
        comments={[]}
        slug="sample-slug"
        onHandleDeleteComments={jest.fn()}
      />
    );

    expect(
      screen.getByText("There are no comments to show")
    ).toBeInTheDocument();
  });

  it("renders a list of comments", () => {
    const sampleComments = [
      { id: 1, comments: "First comment", time: "2025-07-07" },
      { id: 2, comments: "Second comment", time: "2025-07-06" },
    ];

    render(
      <Comments
        comments={sampleComments}
        slug="my-article"
        onHandleDeleteComments={jest.fn()}
      />
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("First comment")).toBeInTheDocument();
    expect(screen.getByText("Second comment")).toBeInTheDocument();
  });

  it("calls onHandleDeleteComments with correct id and slug", () => {
    const sampleComments = [{ id: 123, comments: "Delete me", time: "now" }];
    const mockDelete = jest.fn();
    const slug = "test-slug";

    render(
      <Comments
        comments={sampleComments}
        slug={slug}
        onHandleDeleteComments={mockDelete}
      />
    );

    const deleteButton = screen.getByRole("button", { name: /del/i });
    fireEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(123, slug);
  });
});
