// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Prototype function to toggle read status
Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

let library = [];

// Function to add book to library
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
    displayLibrary();
}

// Function to display books
function displayLibrary() {
    const libraryDisplay = document.getElementById("libraryDisplay");
    libraryDisplay.innerHTML = "";

    library.forEach((book, index) => {
        let bookCard = document.createElement("div");
        bookCard.className = "bg-white p-4 rounded-lg shadow-md w-60 text-left";

        bookCard.innerHTML = `
            <strong class="text-lg">${book.title}</strong><br>
            <span class="text-gray-700">Author: ${book.author}</span><br>
            <span class="text-gray-700">Pages: ${book.pages}</span><br>
            <span class="text-gray-700">Read: <span class="font-bold">${book.read ? "Yes" : "No"}</span></span><br>
            <button class="bg-yellow-500 text-white px-3 py-1 rounded mt-2 w-full" onclick="toggleReadStatus(${index})">
                ${book.read ? "Mark as Unread" : "Mark as Read"}
            </button>
            <button class="bg-red-500 text-white px-3 py-1 rounded mt-2 w-full" onclick="removeBook(${index})">
                Remove
            </button>
        `;
        libraryDisplay.appendChild(bookCard);
    });
}

// Function to remove a book
function removeBook(index) {
    library.splice(index, 1);
    displayLibrary();
}

// Function to toggle read status
function toggleReadStatus(index) {
    library[index].toggleRead();
    displayLibrary();
}

// Modal Functions
function toggleModal() {
    document.getElementById("bookModal").classList.toggle("hidden");
}

// Form Submission
document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    document.getElementById("bookForm").reset();
    toggleModal();
});

// Event Listeners
document.getElementById("newBookBtn").addEventListener("click", toggleModal);
document.getElementById("closeModal").addEventListener("click", toggleModal);

// Preload Books for Testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);
