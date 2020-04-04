import { Grid } from './grid';

document.addEventListener('DOMContentLoaded', (event: CustomEvent) => {
  const cardGrid = document.querySelector('.card-grid');
  const input = document.querySelector('.search-input');
  const grid = new Grid(cardGrid);

  grid.setData();

  input.addEventListener('input', function() {
    grid.sortData(this.value);
  });
});
