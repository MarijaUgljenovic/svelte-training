<nav>
    <a href="/">Home</a>
    <a href="/recipes" data-sveltekit-prefetch>Recipes</a>
    
</nav>

<slot></slot>

<style>
    nav{
        display: flex;
        justify-content: center;
        align-items:center;
        background-color:#333;
        padding:1rem
    }
    nav a{
        color:white;
        text-decoration:none;
        margin: 0 1rem;
        font-size:1.2rem;
        transition: color 0.3s ease-in-out;
    }

    nav a:hover{
        color: #f4a261;
    }

    nav a.active {
        font-weight: bold;
        border-bottom: 2px solid #f4a261;
    }
</style>