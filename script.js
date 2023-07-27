let myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return(title+" by "+author+", "+String(pages)+" pages, not read yet");
    }
}

function addBookToLibrary(BookObject) {
    
        myLibrary.push(BookObject);
    
}


const Hobbit = new Book("Hobbit", "Tolkien", 200);
const LOTR = new Book("Lord of the Rings", "Tolkien", 300);
const Hamlet = new Book("The Hamlet", "Shakespeare", 100);
console.log(Hobbit.title)
addBookToLibrary(Hobbit);
addBookToLibrary(LOTR);
addBookToLibrary(Hamlet);
console.log(typeof myLibrary);



const container = document.getElementById("container");
console.log(myLibrary.length)
function displayBooks(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    for (let i = 0; i<myLibrary.length; i++){
       
        const bookhtml = document.createElement('div');
        bookhtml.textContent = myLibrary[i].title+" by "+myLibrary[i].author+", "+String(myLibrary[i].pages)+" pages, not read yet";

        
        container.appendChild(bookhtml);

    }
}

displayBooks();

//form

newBookForm = document.getElementById("newBookForm");
newBookForm.onsubmit = function() {
    title = document.getElementById("bookTitle").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    const newBook = new Book(title,author,pages);
    addBookToLibrary(newBook);
    displayBooks();
    console.log(myLibrary);

    document.getElementById("bookTitle").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
}
function handleForm(event) {event.preventDefault(); }
newBookForm.addEventListener('submit', handleForm);

document.getElementById('newBook').addEventListener('click', ()=>{document.getElementById('newBookForm').style.visibility = 'visible'})
document.getElementById('hideForm').addEventListener('click', ()=>{document.getElementById('newBookForm').style.visibility = 'hidden'})