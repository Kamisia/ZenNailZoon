import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../organisms/Header";

describe("Header", () => {
  let originalScrollIntoView: any;
  beforeAll(() => {
    originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
  });

  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  afterAll(() => {
    window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
    jest.restoreAllMocks();
  });

  function setWindowWidth(width: number) {
    window.innerWidth = width;
    window.dispatchEvent(new Event("resize"));
  }

  it("renders the header with background image", () => {
    render(<Header />);

    const header = screen.getByTestId("header");
    expect(header).toHaveStyle("background-image: url(test-file-stub)");
  });

  test("displays BusinessCard component on medium and larger screens", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { name: /Booking Now!/i });
    const button = screen.getByRole("button", { name: /Booking Now!/i });
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(screen.getByText("123-456-789")).toBeInTheDocument();
    expect(screen.getByText("ZenNailZoon@example.com")).toBeInTheDocument();
  });

  test("hides BusinessCard component on smaller screens", async () => {
    setWindowWidth(500);

    render(<Header />);

    await waitFor(() => {
      const bookingButton = screen.getByRole("button", {
        name: /Booking Now!/i,
      });
      expect(bookingButton).toBeInTheDocument();
    });
  });
});
