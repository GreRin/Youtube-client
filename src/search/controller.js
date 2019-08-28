import { drawCard } from '../cardsComponentDrawer';

export const searchInputSelector = '[data-component="search-line"]';
export const searchButtonSelector = '[data-component="search-btn"]';
export const youtubeApiKey = 'AIzaSyC6gTRyOMegl9SFmaXEe5tjrHyD8bACV2M';

export const search = (query) => {
  const fetchResults = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&type=video&part=snippet&maxResults=15&q=${query}`);

  return fetchResults.then(res => res.json());
};

export const searchAndDraw = async query => drawCard((await search(query)).items);

export const keyboardPressHandler = async (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    await searchAndDraw(event.target.value);
  }
};

export const mouseButtonClickHandler = async (event) => {
  const userInput = document.querySelector(searchInputSelector);
  event.preventDefault();
  await searchAndDraw(userInput.value);
};

export const bindSearchComponentEvents = () => {
  const searchInput = document.querySelector(searchInputSelector);
  const searchButton = document.querySelector(searchButtonSelector);

  searchButton.addEventListener('click', mouseButtonClickHandler);
  searchInput.addEventListener('keypress', keyboardPressHandler);
};
