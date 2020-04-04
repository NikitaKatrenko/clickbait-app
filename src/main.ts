import { Grid } from './grid';

document.addEventListener('DOMContentLoaded', (event: CustomEvent) => {
  const cardGrid = document.querySelector('.card-grid');
  const input = document.querySelector('.search-input');
  const filters = document.querySelectorAll('.filter-form input');
  const checked: Set<string> = new Set();
  const grid = new Grid(cardGrid);
  let inputValue: string = '';

  grid.setData();

  input.addEventListener('input', function() {
    inputValue = this.value;
    grid.sortData(this.value, checked);
  });

  Array.prototype.forEach.call(filters, function (el: Element) {
    el.addEventListener('change', toggleCheckbox);
  });

  function toggleCheckbox(e: any) {
    (e.target.checked) ? checked.add(e.target.value) : checked.delete(e.target.value);
    grid.sortData(inputValue, checked);
  }

});
