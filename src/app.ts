showHello('greeting', 'TypeScript!');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

function getAllBooks() {
    let books = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ]
    // books[0].category = 'test'
    // books[0].category = 'test'
    return books;   
}
getAllBooks();

function logFirstAvailable(booksDiv:string, booksArr: any) {
    const bks = document.getElementById(booksDiv);
    let bookList = '';
    for (let book of booksArr) {
         bookList += '<li>' + book.title + ' | автор: ' + book.author + '</li>'
    }
    bks.innerHTML =
    `
    <p>Количество книг - ${booksArr.length}</p>
    <p>Название первой книги - ${booksArr[0].title}</p>
    <ul>${bookList}</ul>
    `
}
logFirstAvailable('booksList', getAllBooks());

enum Category {'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Angular'}






