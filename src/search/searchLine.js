export const searchLine = () => {
  const input = document.createElement('input');

  input.dataset.component = 'search-line';
  input.classList.add('form-control');
  input.placeholder = 'Enter query';

  return input;
};

export const searchButton = (btnText = 'Search') => {
  const searchBtn = document.createElement('button');

  searchBtn.dataset.component = 'search-btn';
  searchBtn.classList.add('btn', 'btn-primary', 'btn-block');
  searchBtn.innerText = btnText;

  return searchBtn;
};
