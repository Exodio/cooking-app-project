import { render, screen } from "@testing-library/react";
import SearchQuery from "./SearchQuery";

test("Render the search field content", () => {
  render(<SearchQuery queryParams={[]} setQueryParams={jest.fn()} />);
  expect(screen.getAllByTestId("nav-bar-search-field")).toBeTruthy();
  expect(screen.getByLabelText("Filter Ingredients")).toBeTruthy();
});
