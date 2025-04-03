<script lang="ts">
    export let data: { recipe: { name: string, ingredients: string, instructions: string } };
</script>

<h1>{data.recipe.name}</h1>

<div class="recipe-details">
    <p><strong>Ingredients:</strong> {data.recipe.ingredients}</p>
    <p><strong>Instructions:</strong> {data.recipe.instructions}</p>
</div>

<a href="/recipes" class="back-btn">Back</a>

<style>
    h1 {
        text-align: center;
        color: #d35400;
        margin-bottom: 1.5rem;
    }

    .recipe-details {
        background: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: auto;
    }

    .back-btn {
        display: block;
        text-align: center;
        margin: 1rem auto;
        padding: 0.5rem 1rem;
        background: #d35400;
        color: white;
        border-radius: 8px;
        text-decoration: none;
        width: fit-content;
    }

    .back-btn:hover {
        background: #e67e22;
    }
</style>
