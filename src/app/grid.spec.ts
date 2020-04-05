import { Grid } from './grid';

const elem = document.createElement('div');
const grid = new Grid(elem);
const set: Set<string> = new Set();
const sortValue = '';

describe('Grid', () => {
  it('should initialize', () => {
    const setToHaveBeenCalled = spyOn(Grid.prototype, 'setData');

    grid.setData();

    expect(setToHaveBeenCalled).toHaveBeenCalled();
  });

  it('should sort', () => {
    set.add('video');
    const sortToHaveBeenCalled = spyOn(Grid.prototype, 'sortData');

    grid.sortData(sortValue, set);

    expect(sortToHaveBeenCalled).toHaveBeenCalled();
  });

  it('should generate card', () => {
    const content = {
      title: 'Это видео взорвало интернет',
      category: 'video'
    };
    const string = `<article class="card-grid-item">
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

    const result = grid.generateCard(content);

    expect(result).toBe(string);
  });
});
