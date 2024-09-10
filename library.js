// Sample data to simulate books and borrowing history
const books = [
  { title: 'The God of Small Things', author: 'Amitabh Roy', category: 'Fiction', available: true },
  { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', available: true },
  { title: 'The Theory of Everything', author: 'Stephen Hawking', category: 'Science', available: false },
  { title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', available: true },
  { title: 'The Art of War', author: 'Sun Tzu', category: 'History', available: true }
];

const borrowHistory = [
  { book: 'The God of Small Things', borrower: 'Badrinath reddy', borrowDate: '2024-08-01', returnDate: '2024-08-15' },
  { book: 'Sapiens', borrower: 'Annangi Harsha', borrowDate: '2024-07-10', returnDate: '2024-07-25' }
];

// Function to display book list
function displayBooks(bookList) {
  const bookListDiv = document.getElementById('bookList');
  bookListDiv.innerHTML = ''; // Clear the book list

  bookList.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Category: ${book.category}</p>
          <p>Available: ${book.available ? 'Yes' : 'No'}</p>
      `;
      bookListDiv.appendChild(bookItem);
  });
}

// Function to display borrowing history
function displayHistory(historyList) {
  const historyListDiv = document.getElementById('historyList');
  historyListDiv.innerHTML = ''; // Clear the history list

  historyList.forEach(history => {
      const historyItem = document.createElement('div');
      historyItem.classList.add('history-item');
      historyItem.innerHTML = `
          <h3>${history.book}</h3>
          <p>Borrower: ${history.borrower}</p>
          <p>Borrow Date: ${history.borrowDate}</p>
          <p>Return Date: ${history.returnDate}</p>
      `;
      historyListDiv.appendChild(historyItem);
  });
}

// Search books by title
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
  displayBooks(filteredBooks);
});

// Filter books by category
document.getElementById('filterBtn').addEventListener('click', () => {
  const selectedCategory = document.getElementById('categorySelect').value;
  const filteredBooks = selectedCategory === 'all' 
      ? books 
      : books.filter(book => book.category === selectedCategory);
  displayBooks(filteredBooks);
});

// Initial rendering of books and history
displayBooks(books);
displayHistory(borrowHistory);
