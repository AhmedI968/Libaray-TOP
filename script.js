const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${read ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary() {
  // do stuff here
}
