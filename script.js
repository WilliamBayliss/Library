// HTML Elements / Document selectors
const libraryContainer = document.getElementById('library-container');
const newBookButton = document.getElementById('new-book-button');
const newBookForm = document.getElementById('new-book-form')

// Toggles display of the new book form in HTML
newBookButton.addEventListener('click', function(event) {
    newBookForm.classList.toggle('hidden-form');
});

// Array of Book objects
let myLibrary = [];

// Object constructor for Books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Will return a string with the properties of the book
    this.info = function() {
        if (read == true) {
            return `${title}, ${author}, ${pages} pages. You have read this book`;
        }
        else {
            return `${title}, ${author}, ${pages} pages. You have not read this book`;
        }
    };
};

// Takes a book and adds it to the myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
};

// For each book will call the displayBook function
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        displayBook(book)

    };
};

// Will create an HTML element for a Book object and append it to the libraryContainer
function displayBook(book) {
    // Create div
    let bookDisplay = document.createElement('div');
    bookDisplay.classList.toggle("book-box")
    
    // Create h3 for title, set inner HTML and append to div
    let bookTitle = document.createElement('h3');
    bookTitle.innerHTML = book.title;
    bookDisplay.appendChild(bookTitle)

    // Create p for book author, set inner HTML and append to div
    let bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = "by " + book.author;
    bookDisplay.appendChild(bookAuthor)

    // Create p for page count, set inner HTML and append to div
    let pageCount = document.createElement('p');
    pageCount.innerHTML = "" + book.pages + " pages.";
    bookDisplay.appendChild(pageCount)

    libraryContainer.appendChild(bookDisplay);

}

let book = new Book("The Lord of the Rings", "JRR Tolkein", 455, true);
addBookToLibrary(book);
console.log(book.info());
displayLibrary();