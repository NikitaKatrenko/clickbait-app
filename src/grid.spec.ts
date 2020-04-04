import { Grid } from './grid';

describe('Grid', () => {
    it('should greet', () => {
        const elem = document.createElement('div');
        const greeter = new Grid(elem);
        const methodToHaveBeenCalled = spyOn(Grid.prototype, "setData");

        greeter.setData();

        expect(methodToHaveBeenCalled).toHaveBeenCalled();
    });
});
