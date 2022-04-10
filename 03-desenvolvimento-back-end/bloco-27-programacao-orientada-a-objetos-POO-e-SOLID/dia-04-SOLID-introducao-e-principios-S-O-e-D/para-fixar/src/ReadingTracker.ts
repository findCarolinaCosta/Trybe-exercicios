import progressNotification from './notifications';

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
        'Congratulations! You\'ve reached your reading goal!',
        'Console',
      );
      return;
    }
    progressNotification('There are still some books to go!', 'Console');
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
