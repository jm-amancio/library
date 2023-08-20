const myLibrary = [];

function Book (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
    updateDisplay();
}

// Update HTML main-content 
function updateDisplay() {
    const content = document.querySelector('.content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    myLibrary.forEach((book) => {
        let div = document.createElement('div');
        div.classList.add('card');

        let h2 = document.createElement('h2');
        h2.textContent = `${book.title}`;
        div.appendChild(h2);
        
        let p = [];
        p[0] = document.createElement('p');
        p[0].textContent = `Title: ${book.title}`;
        p[1] = document.createElement('p');
        p[1].textContent = `Author: ${book.author}`;
        p[2] = document.createElement('p');
        p[2].textContent = `Pages: ${book.pages}`;
        p[3] = document.createElement('p');
        p[3].textContent = `Reading Status: ${book.haveRead}`;
        for(let i=0; i<4; i++)
            div.appendChild(p[i]);

        let divButtons = document.createElement('div');
        let button_edit = document.createElement('button');
        button_edit.textContent = `Edit`;
        let button_remove = document.createElement('button');
        button_remove.textContent = `Remove`;
        divButtons.appendChild(button_edit);
        divButtons.appendChild(button_remove);
        divButtons.classList.add('buttons');
        div.append(divButtons);

        content.appendChild(div);
    });
}

const addBookButton = document.getElementById("add-book-button");
const bookForm = document.getElementById("book-form");
const confirmBookButton = document.getElementById("confirm-button");
const cancelBookButton = document.getElementById("cancel-button");

addBookButton.addEventListener("click", () => { bookForm.showModal(); });
confirmBookButton.addEventListener("click", (e) => {
    e.preventDefault();

    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = document.getElementById("book-pages").value;
    const bookStatus = document.getElementById("book-status-unread").value;

    const book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    addBookToLibrary(book);
    
    bookForm.close();
});
cancelBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    bookForm.close();
});