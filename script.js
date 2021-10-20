let libraryContainer = document.getElementById('library-container');
let newBoookButton = document.getElementById('new-book-button')
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read == true) {
            return `${title}, ${author}, ${pages} pages. You have read this book`;
        }
        else {
            return `${title}, ${author}, ${pages} pages. You have not read this book`;
        }
    };
};

function addBookToLibrary(book) {
    //stuff
    myLibrary.push(book);
};

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookDisplay = document.createElement('div');
        bookDisplay.innerHTML = book.title;

        libraryContainer.appendChild(bookDisplay);


    };
};

function displayBook(book) {

}

let book = new Book("The Lord of the Rings", "JRR Tolkein", 455, true);
addBookToLibrary(book);
console.log(book.info());
displayLibrary();