<script lang="ts">
     import { onMount, onDestroy } from 'svelte';
    import Sortable from 'sortablejs';
    import { writable, get } from 'svelte/store';

    interface Recipe {
        name: string;
        ingredients: string;
    }

    export let data: { recipes: Recipe[] } = { recipes: [] };

    const recipes = writable<Recipe[]>([]);

    const loadRecipes = () => {
        if (typeof window !== 'undefined') {
            const storedRecipes = localStorage.getItem("recipes");
            if (storedRecipes) {
                recipes.set(JSON.parse(storedRecipes));
            } else {
                recipes.set(data.recipes);
                localStorage.setItem("recipes", JSON.stringify(data.recipes));
            }
        }
    };

    onMount(() => {
        loadRecipes();

        // Subscribujemo se na store i čuvamo u localStorage
        const unsubscribe = recipes.subscribe((value) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem("recipes", JSON.stringify(value));
            }
        });

        // Omogućavamo drag & drop pomoću Sortable.js
        const recipeList = document.getElementById('recipe-list');
        if (recipeList) {
            new Sortable(recipeList, {
                animation: 150,
                onEnd(evt) {
                    let updatedRecipes = get(recipes); // Dobijamo trenutne recepte iz store-a
                    const oldIndex = evt.oldIndex;
                    const newIndex = evt.newIndex;

                    if (typeof oldIndex === 'number' && typeof newIndex === 'number') {
                        // Samo ako su oldIndex i newIndex validni brojevi, izvrši operaciju
                        const movedItem = updatedRecipes.splice(oldIndex, 1)[0];
                        updatedRecipes.splice(newIndex, 0, movedItem);

                        recipes.set(updatedRecipes); // Ažuriramo store i automatski localStorage
                    }
                }
            });
        }

        return () => {
            unsubscribe(); // Otkazujemo subskripciju pri uništavanju komponente
        };
    });
</script>

<h1>Recipes</h1>

<ul id="recipe-list" class="menu-container">
    {#each $recipes as recipe, index}
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
