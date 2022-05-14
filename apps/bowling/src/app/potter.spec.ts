import { Potter } from './potter';

describe('Potter', () => {
  it('should create an instance', () => {
    expect(new Potter()).toBeTruthy();
  });

  test('buy one book', () => {
    const potter = new Potter();
    potter.buy(1);

    expect(potter.price).toBe(100);
  });

  test('buy two different books', () => {
    const potter = new Potter();
    potter.buy(1);
    potter.buy(2);

    expect(potter.price).toBe(190);
  });
});
