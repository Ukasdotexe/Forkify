//
//
//

import * as model from './Model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import recipeCardView from './views/recipeCardView.js';

if (module.hot) {
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipeById(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();

    if (!query || model.state.search.query === query) return;

    recipeCardView.renderSpinner();

    await model.getAllRecipes(query);

    recipeCardView.render(model.state.search.results);
  } catch (error) {
    recipeCardView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
