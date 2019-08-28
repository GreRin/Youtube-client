import { bindSearchComponentEvents } from './search/controller';
import { drawSearchComponent } from './cardsComponentDrawer';

const init = () => {
  drawSearchComponent();
  bindSearchComponentEvents();
};

init();
