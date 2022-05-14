export class Potter {
    private books: number[] = [];
    private currentbook = 0;
    buy(book: number) {
        this.books[this.currentbook++] = book;
    }

    get price() {
        let price = 0;
        for (let bookindex = 0; bookindex < this.books.length; bookindex++){
            price += 100;
        }
        return price;
    }
}
