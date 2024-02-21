let title;
let author;
let pages;
let read;
let trash;
// let remove;

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.remove = remove;
}

let table = document.getElementById("table");
function addBookToTable (bookInfo) {
    let row = document.createElement("tr");
    for (let i = 0; i < (bookInfo.length); i++) {
        let cell = document.createElement("td");
        cell.innerHTML = bookInfo[i];
        row.appendChild(cell);
    }
    let trash = row.insertCell(-1);
    trash.innerHTML = "<img src='trash-can-outline.svg' width='20px'/>";
    table.appendChild(row);
    trash.addEventListener("click", function() {
        trash.parentNode.remove();        
    })
}

let form = document.querySelector("form")

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", addBookToLibrary);
function addBookToLibrary (event) {
    if (form.checkValidity() === true){ //if it's true, we do not need "required attribute". if it is not correct, we do not need preventDefault(). Is this correct?
        event.preventDefault();
    }
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;
    // let img = document.createElement("img");
    // remove = document.getElementById("remove").value;
    // remove = document.getElementById("myImg").src;
    // img.src = "trash-can-outline.svg";
    // remove.appendChild(img);
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    document.querySelector("form").reset();
    let bookInfo = Object.values(newBook);
    if (bookInfo[0] != ""){ //without this, even invalid inputs add to table
        addBookToTable(bookInfo)
    }
    return bookInfo;
}

// const harryPOOO = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")