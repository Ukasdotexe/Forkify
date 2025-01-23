//
//
//
//

import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;

  renderSpinner() {
    const markup = ` 
    <div class="flex justify-center  my-12 text-center">
      <svg class="w-16 h-16 fill-color-primary animate-rotate">
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;

    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #calculateQty(ing) {
    return;
  }

  #generateMarkUp() {
    return ` <div>
    <div class="w-full h-auto">
      <img
        class="w-full h-[300px] brightness-95"
        src="${this.#data.imageUrl}"
        alt="${this.#data.title}"
      />

      <div class="text-center mb-5">
        <span
          class="inline-block bg-gradient text-white text-5xl py-2 px-5 -translate-y-1/2 -skew-y-6"
          >${this.#data.title}</span
        >
      </div>

      <div class="flex items-center justify-between px-[94px]">
        <div class="flex items-center">
          <div class="flex items-center gap-3 mr-16">
            <svg class="w-6 h-6 fill-color-primary">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <div>
              <span class="font-medium">${this.#data.cookingTime}</span>
              <span class="text-color-grey-dark-1"> MINUTES</span>
            </div>
          </div>

          <div class="flex items-center gap-3 mr-5">
            <svg class="w-6 h-6 fill-color-primary">
              <use href="${icons}#icon-users"></use>
            </svg>
            <div>
              <span class="font-medium">${this.#data.servings}</span>
              <span class="text-color-grey-dark-1"> SERVINGS</span>
            </div>
          </div>

          <div class="flex gap-1">
            <!-- - -->
            <svg class="w-6 h-6 fill-color-primary cursor-pointer">
              <use href="${icons}#icon-minus-circle"></use>
            </svg>

            <!-- + -->
            <svg class="w-6 h-6 fill-color-primary cursor-pointer">
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </div>
        </div>

        <div
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient cursor-pointer "
        >
          <svg class="fill-white w-6 h-6">
            <use href="/${icons}#icon-bookmark"></use>
          </svg>
        </div>
      </div>
      <!-- Recipe Ingredients -->
      <div class="bg-[#EEECEA] p-12 my-10">
        <h2
          class="text-color-primary uppercase text-center text-3xl mb-10 font-semibold"
        >
          Recipe Ingredients
        </h2>

        <ul class="grid grid-cols-2 gap-y-8 ">

        ${this.#data.ingredients.map(this.#generateMarkupIngredient).join('')}
        
        </ul>
      </div>

      <h2 class="text-color-primary uppercase text-center text-3xl font-semibold">
        HOW TO COOK
      </h2>
      <p class="text-color-grey-dark-2 text-center my-10">
        This recipe was carefully designed and tested by
        <span class="text-color-grey-dark-1">${
          this.#data.publisher
        }</span>. Please
        check out <br />
        directions at their websites.
      </p>
      <div class="flex justify-center mb-10">
        <a 
        target="_blank"
        href="${this.#data.sourceUrl}"
          class="bg-gradient flex gap-2 items-center rounded-full py-4 px-10 transition-all delay-100 hover:scale-105"
        >
          <span class="text-white uppercase font-bold">DIRECTIONS</span>
          <svg class="fill-white w-6 h-6">
            <use href="/${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
        </div> `;
  }

  #generateMarkupIngredient(ing) {
    return `
      <li class="flex  text-color-grey-dark-1 font-semi-bold gap-4 bg-red-500">
        <div>
          <svg class="w-6 h-6 fill-color-primary">
        <use href="${icons}#icon-check"></use>
          </svg>
        </div>

        <div class="flex-none justify-start ">${
          !ing.quantity ? ' ' : new Fraction(ing.quantity).toString()
        }
        </div>

        <div>
          <span>${ing.unit}</span>
          ${ing.description}
        </div>
        
    </li>
    `;
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }

  render(data) {
    this.#data = data;

    let markup = this.#generateMarkUp();

    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new RecipeView();
