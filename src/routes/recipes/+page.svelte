<script>
    import { onMount } from 'svelte';
    import Sortable from 'sortablejs';

    export let data; 

    // Postavi recipes na prazan niz ili početne vrednosti
    let recipes = data?.recipes || [];

    onMount(() => {
        if (typeof window !== 'undefined') {
            const storedRecipes = localStorage.getItem("recipes");
            recipes = storedRecipes
                ? JSON.parse(storedRecipes)
                : (data?.recipes || [{ name: 'Sample Recipe', ingredients: 'Sample Ingredients' }]);

            const recipeList = document.getElementById("recipe-list");
            if (recipeList) {
                new Sortable(recipeList, {
                    animation: 150,
                    ghostClass: "dragging",
                    onEnd: (evt) => {
                        const { oldIndex, newIndex } = evt;
                        if (oldIndex !== newIndex) {
                            const movedItem = recipes.splice(oldIndex, 1)[0];
                            recipes.splice(newIndex, 0, movedItem);
                            localStorage.setItem("recipes", JSON.stringify(recipes));
                        }
                    }
                });
            }
        }
    });
</script>

<h1> Recipes</h1>

<ul id="recipe-list" class="menu-container">
    {#each recipes as recipe}
        <li class="menu-item">
            <a href={`/recipes/${recipe.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <h2>{recipe.name}</h2>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            </a>
        </li>
    {/each}
</ul>

<style>
    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 1.5rem;
    }

    .menu-container {
        list-style: none;
        padding: 0;
        width: 80%;
        margin: auto;
    }

    .menu-item {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 0.5rem 0;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
        cursor: grab;
        transition: transform 0.3s ease-in-out;
    }

    .menu-item:hover {
        transform: scale(1.05);
    }

    .menu-item a {
        text-decoration: none; 
        color: inherit;
        display: block;
    }

    .menu-item h2 {
        margin-bottom: 0.5rem;
        color: #d35400;
    }

    .menu-item p {
        color: #555;
    }

    .dragging {
        opacity: 0.5;
    }
</style>
