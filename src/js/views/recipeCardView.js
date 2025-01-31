//
//
//

import View from './View';

class RecipeCardView extends View {
  _parentElement = document.querySelector('.recipes-list');
  _errorMessage = 'No recipes found for your query , please try again ! ;';
  _successMessage = '';

  _generateRecipeCard(recipe) {
    return `<li>
       <a
        href="#${recipe.id}"
          class="flex items-center gap-3 py-5 pl-10 cursor-pointer transition-all delay-75 ease-in-out hover:bg-color-grey-light-2 hover:-translate-y-1"
        >
          <div class="w-16 h-16 rounded-full">
            <img
              class="w-full h-full rounded-full"
              src="${recipe.image}"
              alt="${recipe.title}"
            />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-color-primary text-lg">${recipe.title}</span>
            <span class="text-color-grey-dark-1 uppercase"
              >${recipe.publisher}</span
            >
          </div>
        </a>
            </li>`;
  }

  _generateMarkUp() {
    return this._data.map(this._generateRecipeCard).join('');
  }
}

export default new RecipeCardView();
