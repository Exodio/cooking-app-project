import { RecipeProps } from "../model/RecipeProps";

export const filterRecipes = (
  allRecipes: RecipeProps[],
  queries: string[]
): Array<RecipeProps> => {
  let matchedRecipes: Set<RecipeProps> = new Set();

  allRecipes.forEach((recipe) => {
    const { ingredients, title, timeToPrepare } = recipe;
    const allIngredients = ingredients.join(" ");

    queries.forEach((query) => {
      if (
        allIngredients.includes(query) ||
        title.includes(query) ||
        timeToPrepare.includes(query)
      ) {
        matchedRecipes.add(recipe);
      }
    });
  });

  return Array.from(matchedRecipes);
};
