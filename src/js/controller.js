//
//
//

import icons from 'url:../img/icons.svg';

console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

const renderSpinner = function (parentEl) {
  const markup = ` 
    <div class="flex justify-center  my-12 text-center">
      <svg class="w-16 h-16 fill-color-primary animate-rotate">
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    renderSpinner(recipeContainer);

    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    console.log(data, res);

    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);

    const markup = ` <div>
      <div class="w-full h-auto">
        <img
          class="w-full h-[300px] brightness-95"
          src="${recipe.imageUrl}"
          alt="${recipe.title}"
        />

        <div class="text-center mb-5">
          <span
            class="inline-block bg-gradient text-white text-5xl py-2 px-5 -translate-y-1/2 -skew-y-6"
            >${recipe.title}</span
          >
        </div>

        <div class="flex items-center justify-between px-[94px]">
          <div class="flex items-center">
            <div class="flex items-center gap-3 mr-16">
              <svg class="w-6 h-6 fill-color-primary">
                <use href="${icons}#icon-clock"></use>
              </svg>
              <div>
                <span class="font-medium">${recipe.cookingTime}</span>
                <span class="text-color-grey-dark-1"> MINUTES</span>
              </div>
            </div>

            <div class="flex items-center gap-3 mr-5">
              <svg class="w-6 h-6 fill-color-primary">
                <use href="${icons}#icon-users"></use>
              </svg>
              <div>
                <span class="font-medium">${recipe.servings}</span>
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
            class="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient cursor-pointer"
          >
            <svg class="fill-white w-6 h-6">
              <use href="/${icons}#icon-bookmark"></use>
            </svg>
          </div>
        </div>
        <!-- Recipe Ingredients -->
        <div class="bg-[#EEECEA] py-10 my-10">
          <h2
            class="text-color-primary uppercase text-center text-3xl mb-10"
          >
            Recipe Ingredients
          </h2>

          <ul class="grid grid-cols-2 gap-y-8 pl-20">

          ${recipe.ingredients
            .map(ing => {
              return `
              <li class="flex  text-color-grey-dark-1 font-semi-bold">
              <svg class="w-6 h-6 fill-color-primary mr-2">
                <use href="${icons}#icon-check"></use>
              </svg>

              <div class="flex-none justify-start mr-[3px]">${
                ing.quantity ?? ''
              }</div>

              <div>
                <span>${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
            `;
            })
            .join('')}
          
          </ul>
        </div>

        <h2 class="text-color-primary uppercase text-center text-3xl">
          HOW TO COOK
        </h2>
        <p class="text-color-grey-dark-2 text-center my-10">
          This recipe was carefully designed and tested by
          <span class="text-color-grey-dark-1">${
            recipe.publisher
          }</span>. Please
          check out <br />
          directions at their websites.
        </p>
        <div class="flex justify-center mb-10">
          <a 
          target="_blank"
          href="${recipe.sourceUrl}"
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
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    alert(error);
  }
};

showRecipe();
