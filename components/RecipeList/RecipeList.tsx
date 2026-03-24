"use client";
import { useState } from "react";
import css from "./RecipeList.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchRecipes } from "@/lib/recipes-service";
import Link from "next/link";

const RecipeList = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    setQuery(query);
  };

  const recipeQuery = useQuery({
    queryKey: ["searchRecipe", query],
    queryFn: () => searchRecipes(query),
  });

  const recipes = recipeQuery.data?.recipes || [];

  return (
    <div className={css["recipeList"]}>
      <form action={handleSubmit}>
        <input type="text" name="query" />
        <button>search</button>
      </form>

      <ul>
        {recipes.map((el) => {
          return (
            <li>
              <Link href={`/recipes/${el.id}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
