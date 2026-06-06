const form = document.querySelector(".dialogForm");
const container = document.querySelector(".bookContainer");

function Book(title, author, pages, read) {
    if(!new.target)
    {
        throw Error("You must use the 'new' operator to call the constructor");
    }    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = -1;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

const myLibraryMap = new Map();

function AddToTheLibrary(title,author,pages,read)
{
    const book = new Book(title,author,pages,read);
    book.id = crypto.randomUUID();
    myLibraryMap.set(book.id, book);
    AddBooksToContainer(book);
}


function AddBooksToContainer(book)
{
    
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.setAttribute("data-id", book.id);
    const title = document.createElement("h2");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Read" : "Not Read";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    bookCard.append(title,author,pages,readBtn,removeBtn);
    container.appendChild(bookCard);

    removeBtn.addEventListener("click", function(){
        myLibraryMap.delete(book.id);
        container.removeChild(bookCard);
    });

    readBtn.addEventListener("click", function(){
        book.toggleRead();
        readBtn.textContent = book.read ? "Read" : "Not Read";
    });
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    AddToTheLibrary(title,author,pages,read);
    form.reset();
    document.querySelector("#addBookDialog").close();
});

