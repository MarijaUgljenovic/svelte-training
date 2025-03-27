<script lang="ts">
    export let data; 
    console.log(data); 

    const { recipes } = data;

    let selectedRecipe: { 
        name: string; 
        ingredients: string; 
        instructions: string;
    } | null = null;

    function selectRecipe(recipe: { name: string; ingredients: string; instructions: string }) {
        selectedRecipe = recipe;
    }

    function goBack() {
        selectedRecipe = null;
    }
</script>

<h1>Menu</h1>

{#if selectedRecipe}
    <div class="recepie-details">
        <button on:click={goBack} class="back-btn">Back</button>
        <h2>{selectedRecipe.name}</h2>
        <div class="recepie-description">
            <p><strong>Ingredients</strong>{selectedRecipe.ingredients}</p>
        <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
        </div>
        
    </div>
{:else}
<div class="menu-container">
    {#each recipes as recipes}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="menu-item" on:click={() => selectRecipe(recipes)}>
            <h2>{recipes.name}</h2>
            <p>
                <strong>Ingredients:</strong>
                {recipes.ingredients}
            </p>
        </div>
    {/each}
</div>
{/if}



<style>
    h1{
        text-align:center;
        color:#333;
        margin-bottom: 1.5rem;
    }

    .menu-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        padding:1rem
    }

    .menu-item{
        background: #f8f9fa;
        border-radius:12px;
        padding: 1.5rem;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition:transform 0.3s ease-in-out;
    }

    .menu-item:hover{
        transform: scale(1.05);
    }

    .menu-item h2{
        margin-bottom: 0.5rem;
        color: #d35400;
    }

    .menu-item p{
        color: #555;
    }

    .recepie-details {
        background: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.1);
        text-align: left;
        max-width: 600px;
        margin: auto;

    }

    .recepie-description{
        background: #f8f9fa;
        border-radius:12px;
        padding: 1.5rem;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition:transform 0.3s ease-in-out;
    }

    .recepie-details h2 {
        color: #d35400;
        margin-bottom: 1rem;
    }

    .back-btn {
        background: #d35400;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 1rem;
        font-size: 1rem;
    }

    .back-btn:hover {
        background: #e67e22;
    }
</style>
