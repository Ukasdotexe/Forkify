//
//
//
import * as model from './Model.js';
import recipeView from './views/recipeView.js';

import icons from 'url:../img/icons.svg';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

// showRecipe();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
