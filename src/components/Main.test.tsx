import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("Render the landing page layout and all of the main sections", () => {
  render(<Main />);
  expect(screen.getAllByTestId("main-page-content-container")).toBeTruthy();
  expect(screen.getAllByTestId("main-page-card-container")).toBeTruthy();
  expect(screen.getAllByTestId("recipes-container")).toBeTruthy();
  expect(screen.getAllByTestId("recipes-bottom-separator")).toBeTruthy();
});
