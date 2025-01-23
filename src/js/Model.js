import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    if (!id) return;

    const data = await getJSON(`${API_URL}/${id}`);

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
