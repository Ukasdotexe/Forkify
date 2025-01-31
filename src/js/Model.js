import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipeById = async function (id) {
  try {
    if (!id) return;

    const data = await getJSON(`${API_URL}${id}`);

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

export const getAllRecipes = async function (query) {
  try {
    state.search.query = query;
    let data = await getJSON(`${API_URL}?search=${query}`);

    const { recipes } = data.data;
    // console.log(recipes);
    state.search.results = recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    throw error;
  }
};

// getAllRecipes('pizza');
