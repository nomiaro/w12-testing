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
});
