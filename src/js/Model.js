export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    if (!id) return;

    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }

    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    throw error;
  }
};
