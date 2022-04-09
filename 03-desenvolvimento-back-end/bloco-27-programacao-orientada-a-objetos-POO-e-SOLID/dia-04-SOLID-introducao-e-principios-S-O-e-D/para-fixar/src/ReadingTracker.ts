import progressNotification from "./notifications";

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      progressNotification(
        "Congratulations! You've reached your reading goal!"
      );
      return;
    }
    progressNotification("There are still some books to go!");
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);

// BooksWishlist.ts
type Book = {
  book: string;
  author: string;
  genre: string;
};

class BooksWishlist {
  private wishlist: Book[];
  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishList(newBook: Book): void {
    this.wishlist.push(newBook);
  }

  showWishlist(): void {
    return console.log(this.wishlist);
  }
}

const wishlist = new BooksWishlist({
  book: "The Road",
  author: "Cormac McCarthy",
  genre: "Dystopia",
});
wishlist.addToWishList({
  book: "Misery",
  author: "Stephen King",
  genre: "Thriller",
});
wishlist.showWishlist();
