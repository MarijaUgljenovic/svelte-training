<script>
    export let data; 
    console.log(data); 

    const { recipes } = data;
</script>

<h1>Shop</h1>

{#each recipes as recipes}
    <h2>{recipes.name}</h2>
    <p>{recipes.ingredients}</p>
{/each}