import {Content, GridConfig} from './grid.config';

export class Grid {
  cardGrid: Element;
  content: GridConfig[] = Content;

  constructor(grid: Element) {
    this.cardGrid = grid;
  }

  setData() {
    const gridNode = document.createElement('div');
    gridNode.className = 'card-grid-row';
    this.content.map(item => {
      gridNode.insertAdjacentHTML('afterbegin', this.generateCard(item));
    });
    this.cardGrid.replaceChild(gridNode, this.cardGrid.childNodes[0]);
  }

  sortData(sortValue: string, filter: Set<string>) {
    const regexp = new RegExp(sortValue, 'i');
    this.content = Content.filter(item => {
      return item.title.match(regexp) && filter.has(item.category)
        || item.title.match(regexp) && !filter.size;
    });
    this.setData();
  }

  generateCard(content: GridConfig): string {
    return `<article class="card-grid-item">
        <a class="card-link" href=""></a>
        <div class="card-wrapper">
          <div class="card-container">
            <div class="card-image">
              <span class="centered ${content.category}-type-image"></span>
            </div>
            <div class="card-content">
              <span class="card-title">${content.title}</span>
              <span class="card-category">#${content.category}</span>
              <span class="more-info">Смотреть больше <i class="arrow-ico"></i></span>
            </div>
          </div>
        </div>
      </article>`;
  }

}
