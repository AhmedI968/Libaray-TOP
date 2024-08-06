const myLibrary = [
];

const addBookBtn = document.querySelector('.addBookBtn');
const dialog = document.getElementById('myDialog');
const closeButton = document.querySelector('.close');

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary() {
  
}

function display() {
    const library = document.querySelector('.library');
    library.innerHTML = '';


    myLibrary.forEach((book) => {
        // Create a card element
        const card = document.createElement('div');
        card.className = 'book-card';
        
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
