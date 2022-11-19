import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FooterContent } from "./FooterContent";

test("Render the footer section content", () => {
  render(<FooterContent />);
  expect(screen.getAllByTestId("footer-container-content")).toBeTruthy();
  expect(screen.getAllByTestId("footer-container-content-info")).toBeTruthy();
  expect(
    screen.getByText(
      /Please don’t try these recipes at home. We hope that they will inspire you to cook more, but consider that their main idea is your coding task for Devexperts./i
    )
  ).toBeInTheDocument();
  expect(screen.getAllByTestId("footer-container-content-rights")).toBeTruthy();
  expect(
    screen.getByText(/Copyright © 2022. All rights reserved/i)
  ).toBeInTheDocument();
});
