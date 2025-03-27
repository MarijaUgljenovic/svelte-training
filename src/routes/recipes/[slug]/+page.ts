// @ts-nocheck
export const load = async({ params, fetch })=>{
    const slug = params.slug;
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();


    //pronadji recept na osnovu imena slug-a
    const recipe = data.recipes.find((r) => r.name.toLowerCase().replace(/\s+/g, '-') === slug);


    if (!recipe){
        return{
            status: 404,
            error: new Error("Recipe not found"),

        }
    }

    return { recipe };
}