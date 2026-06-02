const formAddBtn = document.querySelector(".FormAddBtn");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = -1;
}

const myLibrary = [];

function AddToTheLibrary(title,author,pages,read)
{
    const book = new Book(title,author,pages,read);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

function DisplayBooks()
{
    for(const book of myLibrary)
    {
        console.log(book);
    }
}

formAddBtn.addEventListener("click", function(e){
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    document.querySelector("#addBookDialog").close();
    AddToTheLibrary(title,author,pages,read);
    DisplayBooks();
});

