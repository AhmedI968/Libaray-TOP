const myLibrary = [
];

const addBookBtn = document.querySelector('.addBookBtn');
const form = document.getElementById('myDialog');
const closeButton = document.querySelector('.close');
let currentIndex = 0

addBookBtn.addEventListener('click', () => {
    form.showModal();
});

closeButton.addEventListener('click', () => {
    form.close();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    
    myLibrary.push(new Book(title, author, pages, read));

    currentIndex++;
    form.close();
    display();
    console.log(myLibrary);
});

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = currentIndex;

  this.info = function() {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  }
}

function removeBookFromLibrary(index) {
    const bookIndex = myLibrary.findIndex(book => book.index === index);
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
        // Adjust indices of remaining books
        for (let i = bookIndex; i < myLibrary.length; i++) {
            myLibrary[i].index = i;
        }
        display();
    }
};

function display() {
    const library = document.querySelector('.library');
    library.innerHTML = '';


    myLibrary.forEach((book) => {
        // Create a card element
        const card = document.createElement('div');
        card.className = 'book-card';
        
        // Create and append delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            removeBookFromLibrary(book.index);
        };
        card.appendChild(deleteBtn);

        // Create and append book information elements
        const title = document.createElement('h3');
        title.textContent = book.name;
        card.appendChild(title);

        // Create and append book information elements
        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const readStatus = document.createElement('p');
        readStatus.textContent = `Status: ${book.read ? 'Read' : 'Not Read Yet'}`;
        card.appendChild(readStatus);

        // Append the card to the container
        library.appendChild(card);
    });
};

display();
