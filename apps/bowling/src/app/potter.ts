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
            if (!(unique_books.includes(this.books[bookindex]))){
                num_diff_books++;
                unique_books[currentindex++] = this.books[bookindex]
            }
        }

        let cost = 1 - 0.05*num_diff_books;
        price *= cost;
        
        return price;
    }
}
