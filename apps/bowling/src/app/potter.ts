export class Potter {
    private books: number[] = [];
    private currentbook = 0;
    buy(book: number) {
        this.books[this.currentbook++] = book;
    }

    get price() {
        let price = 0;
        let num_diff_books = -1;
        let unique_books: number[] = [];
        let currentindex = 0;

        for (let bookindex = 0; bookindex < this.books.length; bookindex++){
            price += 100;
            if (this.uniquebook(unique_books, bookindex)){
                num_diff_books++;
                unique_books[currentindex++] = this.books[bookindex]
            }
        }

        price = this.aftercost(price, num_diff_books);
        
        return price;
    }

    private uniquebook(unique_books: number[], bookindex: number) {
        return !(unique_books.includes(this.books[bookindex]));
    }

    private aftercost(price: number, num_diff_books: number) {
        let cost = 1 - 0.05*num_diff_books;
        price *= cost;
        return price;
    }
}
