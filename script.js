// HTML Elements / Document selectors
const libraryContainer = document.getElementById('library-container');
const newBookButton = document.getElementById('new-book-button');
const newBookFormContainer = document.getElementById('new-book-form-container');
const newBookForm = document.getElementById('new-book-form');
const newBookTitle = document.getElementById('title-input');
const newBookAuthor = document.getElementById('author-input');
const newBookPages = document.getElementById('pages-input');
const newBookRead = document.getElementById('read-checkbox');





newBookForm.addEventListener('submit', formEvent);

// Toggles display of the new book form in HTML
newBookButton.addEventListener('click', function(event) {
    newBookFormContainer.classList.toggle('hidden-form');
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

// Called when the new book form is submitted
function formEvent(event) {
    event.preventDefault(); // Prevents page from refreshing
    // Gets values from inputs and creates new book object
    book = new Book(
        newBookTitle.value,
        newBookAuthor.value,
        newBookPages.value,
        newBookRead.value
    );
    // Add to library and refresh display
    addBookToLibrary(book);
    refreshLibraryDisplay();
    clearFormInputs();
};

function clearFormInputs() {
    newBookTitle.value = ""
    newBookAuthor.value = ""
    newBookPages.vlaue = ""
    newBookRead.value = ""
}

// Takes a book and adds it to the myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
};

// For each book will call the displayBook function
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        displayBook(book, i)

    };
};

// As long as the library disply has a first child, deletes the last child of the display
function emptyLibraryDisplay() {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.lastChild);
    }
}

// Refreshes the Library display to prevent duplicates when a new book is added
function refreshLibraryDisplay() {
    emptyLibraryDisplay();
    displayLibrary();
}

// Will create an HTML element for a Book object and append it to the libraryContainer
function displayBook(book, index) {
    // Create div
    let bookDisplay = document.createElement('div');
    bookDisplay.classList.toggle("book-box");
    
    // Create header for book info, set inner HTML and append to div
    let bookInfo = document.createElement('h5');
    bookInfo.innerHTML = book.info();
    bookDisplay.appendChild(bookInfo);

    // Create delete button, set inner HTML, add button class and append to bookDisplay Div
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete Book"
    deleteButton.classList.add("button")
    bookDisplay.appendChild(deleteButton);

    // Add event listener to delete book on button press
    deleteButton.addEventListener('click', function(event) {
        deleteBook();
    });

    libraryContainer.appendChild(bookDisplay);
}

function deleteBook() {
    console.log('test');
}
displayLibrary();