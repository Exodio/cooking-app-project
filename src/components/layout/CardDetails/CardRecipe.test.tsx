import { render, screen } from "@testing-library/react";
import CardRecipe from "./CardRecipe";

test("Render the card list and section content", () => {
  render(
    <CardRecipe
      id={0}
      ingredients={[]}
      preparationMethod={[]}
      timeToPrepare={""}
      title={""}
    />
  );

  expect(screen.getAllByTestId("ingredient-list-card")).toBeTruthy();
  expect(screen.getAllByTestId("ingredient-list-card-container")).toBeTruthy();
  expect(screen.getAllByTestId("ingredient-list-title")).toBeTruthy();
  expect(screen.getAllByTestId("ingredient-list-prep-time")).toBeTruthy();
  expect(screen.getAllByTestId("ingredient-list-container")).toBeTruthy();
  expect(screen.getAllByTestId("ingredient-list")).toBeTruthy();
  expect(
    screen.getAllByTestId("prep-info-pop-up-btn-icon-container")
  ).toBeTruthy();
  expect(screen.getAllByAltText(/pop-up-icon/i)).toBeTruthy();
});
