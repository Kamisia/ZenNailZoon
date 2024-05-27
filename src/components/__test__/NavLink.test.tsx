import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavLink from "../NavLink";
import "@testing-library/jest-dom";

describe("NavLink component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Router>
        <NavLink to="/test" label="Test Link" />
      </Router>
    );

    expect(getByText("Test Link")).toBeInTheDocument();
  });

  it("has correct href attribute", () => {
    const { getByText } = render(
      <Router>
        <NavLink to="/test" label="Test Link" />
      </Router>
    );

    expect(getByText("Test Link").closest("a")).toHaveAttribute(
      "href",
      "/test"
    );
  });
});
