import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });

  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  test('buy one book', () => {
    buyMany([1]);
    expect(potter.price).toBe(100);
  });

  test('buy two different books', () => {
    buyMany([1, 2]);
    expect(potter.price).toBe(190);
  });

  test('buy three books', () => {
    buyMany([1, 2, 2]);
    expect(potter.price).toBe(290);
  });

  function buyMany(books: number[]) {
    for (let i = 0; i < books.length; i++) {
      potter.buy(i);
    }
  }
});
