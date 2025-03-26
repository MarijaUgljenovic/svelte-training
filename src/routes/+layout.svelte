<nav>
    <a href="/">Home</a>
    <a href="/recipes" data-sveltekit-prefetch>Recipes</a>
    <a href="/movies">Movies</a>
</nav>
<slot></slot>
<style>
    nav{
        display: flex;
    }
    nav a{
        margin-right:1rem;
    }
</style>