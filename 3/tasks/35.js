/* 
Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
*/

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const books = this.books
    const i = this.books.indexOf(oldName)

    books.splice(i, 1, newName)

    // Пиши код выше этой строки
  },
};

bookShelf.updateBook('Мгла', 'Хроники подземелий')
console.log(bookShelf.books)
bookShelf.updateBook('Последнее королевство', 'Дюна')
console.log(bookShelf.books)

/*
Тесты

Объявлена переменная bookShelf.

Значение переменной bookShelf это объект.

Значение свойства bookShelf.updateBook это метод объекта.

После вызова метода bookShelf.updateBook('Мгла', 'Хроники подземелий'), значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

После вызова метода bookShelf.updateBook('Последнее королевство', 'Дюна'), значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].
*/