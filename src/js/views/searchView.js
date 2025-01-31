//
//
//
//
//

class searchView {
  _parentElement = document.querySelector('.search');
  _inputElement = this._parentElement.querySelector('input');

  getQuery() {
    const query = this._inputElement.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._inputElement.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
      // alert('hello');
    });
  }
}

export default new searchView();
