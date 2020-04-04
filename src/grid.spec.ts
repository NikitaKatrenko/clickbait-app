import { Grid } from './grid';

let elem = document.createElement('div');
let grid = new Grid(elem);
let set: Set<string> = new Set();
let sortValue = '';

describe('Grid', () => {
  it('should initialize', () => {
    let setToHaveBeenCalled = spyOn(Grid.prototype, 'setData');

    grid.setData();

    expect(setToHaveBeenCalled).toHaveBeenCalled();
  });

  it('should sort', () => {
    set.add('video');
    let sortToHaveBeenCalled = spyOn(Grid.prototype, 'sortData');

    grid.sortData(sortValue, set);

    expect(sortToHaveBeenCalled).toHaveBeenCalled();
  });

  it('should generate card', () => {
    let content = {
      title: 'Это видео взорвало интернет',
      category: 'video'
    };
    let string = `<article class="card-grid-item">
        <a class="card-link" href=""></a>
        <div class="card-wrapper">
          <div class="card-container">
            <div class="card-image">
              <span class="centered video-type-image"></span>
            </div>
            <div class="card-content">
              <span class="card-title">Это видео взорвало интернет</span>
              <span class="card-category">#video</span>
              <span class="more-info">Смотреть больше <i class="arrow-ico"></i></span>
            </div>
          </div>
        </div>
      </article>`;

    let result = grid.generateCard(content);

    expect(result).toBe(string);
  });
});
