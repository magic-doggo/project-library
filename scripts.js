let title;
let author;
let pages;
let read;

const myLibrary = [
    // {
    //     title: "The Hobbit",
    //     author: "J.R.R. Tolkien",
    //     pages: 200,
    //     read: "not read yet"
    // }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", addBookToLibrary);
function addBookToLibrary (event) {
    event.preventDefault();
    //do stuff here. add event listeners and stuff
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    // return(myLibrary)
}

// console.log(myLibrary) does not work yet


// const harryPotter = new Book("harry potter", "J.K. Rowling", 215, "read")
// myLibrary.push(harryPotter)
// addBookToLibrary()

// const harryPOOO = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
