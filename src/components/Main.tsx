import React, { useState } from "react";
import { Box, Card, Stack } from "@mui/material";
import { filterRecipes } from "./common/filterRecipe";
import { useRecipesHook } from "./hooks/useRecipesHook";
import CardRecipe from "./layout/CardDetails/CardRecipe";
import { FooterContent } from "./layout/Footer/FooterContent";
import { HeaderContent } from "./layout/Header/HeaderContent";
import SearchQuery from "./layout/SearchBar/SearchQuery";
import { RecipeProps } from "./model/RecipeProps";

const Main: React.FC<{}> = () => {
  const allRecipes: RecipeProps[] = useRecipesHook();
  const [queries, setQueries] = useState(Array<string>);

  return (
    <Stack display="flex" direction="column" alignItems="center">
      <Box data-testid="main-page-content-container" sx={{width: "82.2%"}}>
        <Card data-testid="main-page-card-container" sx={{ display: "flex", direction: "row", wrap: "nowrap", alignItems: "center", justifyContent: "space-between", px: 3, py: 3 }}>
            {HeaderContent()}
            <SearchQuery queryParams={queries} setQueryParams={setQueries} />
        </Card>
        <Box data-testid="recipes-container" sx={{ display: "flex", flexWrap:"wrap", mt: 4.5, columnGap: 3}}>
          {queries.length > 0 ?
          filterRecipes(allRecipes, queries).map((recipe, index) => (
            <CardRecipe key={index} {...recipe} />
          )) :
          allRecipes.map((recipe, index) => (
            <CardRecipe key={index} {...recipe} />
          ))}
        </Box>
      </Box>
        {FooterContent()}
    </Stack>
  );
};

export default Main;
