<script lang="ts">
    export let data; 
    console.log(data); 
    const { recipes } = data;

</script>

<h1>Menu</h1>


<div class="menu-container">
    {#each recipes as recipe}
        <a class="menu-item" href={`/recipes/${recipe.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <h2>{recipe.name}</h2>
            <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
        </a>
    {/each}
</div>

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
        text-decoration: none;
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

    
</style>
