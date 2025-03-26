// @ts-nocheck
export const load = async ({ fetch }) => {
    const fetchRecipes = async () => {
        const recipesRes = await fetch('https://dummyjson.com/recipes');
        const recipesData = await recipesRes.json();
        return recipesData.recipes; // ispravljeno
    };

    
    const recipes = await fetchRecipes();

    return {
        recipes
    };
};
