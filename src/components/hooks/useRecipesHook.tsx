import { useEffect, useState } from "react";

export const useRecipesHook = () => {
  const URL = "https://mocki.io/v1/7a7dc599-ebda-4f84-94a4-40a30209a3bc";
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response: Promise<Response> = fetch(URL);
      const data = (await response).json();
      const result = await data;
      const fetchResult = result.recipes;

      setRecipes(fetchResult);
    })();
  }, []);

  return recipes;
};
