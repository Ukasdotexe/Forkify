//
//
//
//
import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  renderSpinner() {
    const markup = ` 
    <div class="flex justify-center  my-12 text-center">
      <svg class="w-16 h-16 fill-color-primary animate-rotate">
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="flex max-w-[400px] mx-auto my-0 py-[50px] px-10 ">
    <svg class="w-12 h-12 -translate-y-[3px] fill-color-primary">
      <use href="${icons}#icon-alert-triangle"></use>
    </svg>
    <p class="ml-6 text-lg font-medium">${message} </p>
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSuccess(message = this._successMessage) {
    const markup = `
    <div class="max-w-[400px] flex gap-x-5 mx-auto p-5">
      <svg class="w-8 h-8 fill-color-primary">
        <use href="${icons}#icon-smile"></use>
      </svg>

      <p class="text-color-grey-dark-1 text-lg font-medium">
        ${message}
      </p>
    </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.log('error');
      return this.renderError();
    }

    this._data = data;

    let markup = this._generateMarkUp();

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
