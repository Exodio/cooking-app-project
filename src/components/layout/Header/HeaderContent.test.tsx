import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HeaderContent } from "./HeaderContent";

test("Render the heading and navigation section content", () => {
  render(<HeaderContent />);
  expect(screen.getAllByTestId("nav-bar-logo-container")).toBeTruthy();
  expect(screen.getAllByTestId("nav-bar-logo-icon-content")).toBeTruthy();
  expect(screen.getAllByAltText(/navigation-logo/i)).toBeTruthy();
  expect(screen.getAllByTestId("nav-bar-logo-header-content")).toBeTruthy();
  expect(
    screen.getAllByTestId("nav-bar-logo-header-content-app-name")
  ).toBeTruthy();
  expect(screen.getByText(/CookWell/i)).toBeInTheDocument();
  expect(
    screen.getAllByTestId("nav-bar-logo-header-content-app-by")
  ).toBeTruthy();
  expect(screen.getByText(/by Devexperts/i)).toBeInTheDocument();
});
