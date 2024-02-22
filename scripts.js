let title;
let author;
let pages;
let read;
let trash;
let readUnread;
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
    // let readUnreadStatus = bookInfo[3];
    // readUnreadStatus.classList.add("readUnread")
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
    // read = document.getElementById("read").value;
    if (document.getElementById("read").validity.valueMissing == true) {
        read = "unread " + "<img src='swap-vertical-bold.svg' width='20px'/>" 
    }   else {
        read = "read" + "<img src='swap-vertical-bold.svg' width='20px'/>"
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

readUnread = document.querySelectorAll('td:nth-child(4)');
// readUnread.forEach(pizza => {
//     pizza.addEventListener("click", swapReadUnread);
//     function swapReadUnread () {
//         console.log("pizza")
//     }
// })

//check if can align all trash icons. maybe remove default book from
//find way to difference between ticked and unticked checkbox.
//add event listener for read/unread and change the value