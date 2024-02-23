let title;
let author;
let pages;
let read;
let trash;
let readUnread;
let form = document.querySelector("form")
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    readUnread = document.querySelectorAll("td:nth-child(4)")
    readUnread.forEach(bookStatus => {
        bookStatus.addEventListener("click", swapReadUnread);
        function swapReadUnread () {
            if (bookStatus.innerHTML == 'read') {
                bookStatus.innerHTML = 'unread <img src="swap-vertical-bold.svg" width="20px">';
            }
            else if (bookStatus.innerHTML == 'unread') {
                bookStatus.innerHTML = 'read <img src="swap-vertical-bold.svg" width="20px">'
            }
            else if (bookStatus.innerHTML == 'unread <img src="swap-vertical-bold.svg" width="20px">') {
                bookStatus.innerHTML = 'read <img src="swap-vertical-bold.svg" width="20px">'
            }
            // else if (bookStatus.innerHTML == 'read <img src="swap-vertical-bold.svg" width="20px">') 
            else {
                bookStatus.innerHTML = 'unread <img src="swap-vertical-bold.svg" width="20px">'
            }
            console.log(bookStatus)
        }
    })
}

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", addBookToLibrary);
function addBookToLibrary (event) {
    if (form.pages.checkValidity() === true){ //if it's true, we do not need "required attribute". if it is not correct, we do not need preventDefault(). Is this correct?
        event.preventDefault();
    // }
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    if (document.getElementById("read").validity.valueMissing == true) {
        read = "unread " + "<img src='swap-vertical-bold.svg' width='20px'/>" 
    }   else {
        read = "read " + "<img src='swap-vertical-bold.svg' width='20px'/>"
    }

    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    // document.querySelector("form").reset();
    let bookInfo = Object.values(newBook);
    if (bookInfo[0] != "" && bookInfo[1] != "" && bookInfo[2] != ""){ //without this, even invalid inputs add to table
        addBookToTable(bookInfo);
        document.querySelector("form").reset();
    }
    return bookInfo;
}
}

//check if can align all trash icons. maybe remove default book from
