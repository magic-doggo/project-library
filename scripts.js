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
    // this.info = function() {
    //     return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    // }
}

let table = document.getElementById("table");
function addBookToTable (bookInfo) {
    let row = document.createElement("tr");
    for (let i = 0; i < bookInfo.length; i++) {
        let cell = document.createElement("td");
        cell.innerHTML = bookInfo[i];
        row.appendChild(cell);
    }
    table.appendChild(row);
}

let form = document.querySelector("form")

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", addBookToLibrary);
function addBookToLibrary (event) {
    if (form.checkValidity() === true){
        event.preventDefault();
    }
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    document.querySelector("form").reset();
    let bookInfo = Object.values(newBook);
    if (bookInfo[0] != ""){
        addBookToTable(bookInfo)
    }
    return bookInfo;
}

// const harryPOOO = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")