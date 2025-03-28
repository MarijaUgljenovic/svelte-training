<script lang="ts">
    import {onMount} from "svelte";
    import Sortable from "sortablejs";

    export let data; 
    console.log(data); 
    const { recipes } = data;

    let recipeList;

    onMount(() => {

        new Sortable(recipeList, {
            animation: 150,
            ghostClass: "dragging",
            onEnd: (evt) =>{
                const {oldIndex, newIndex} = evt;
                if (oldIndex !== newIndex){
                    const movedItem = recipes.splice(oldIndex, 1)[0];
                    recipes.splice(newIndex, 0, movedItem);
                }
            }
        })
    });

</script>

<h1>Menu</h1>


<ul bind:this={recipeList} class="menu-container">
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
    h1{
        text-align:center;
        color:#333;
        margin-bottom: 1.5rem;
    }

    .menu-container {
        list-style: none;
        padding: 0;
        width: 80%;
        margin: auto;
    }

    .menu-item{
        background: #f8f9fa;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 0.5rem 0;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
        cursor: grab;
        transition: transform 0.3s ease-in-out;
    }

    .menu-item a {
        text-decoration: none; /* Uklanja podvučene linkove */
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
