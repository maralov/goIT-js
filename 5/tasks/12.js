/* 
Задание

Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

*/

class Storage {

  constructor(items) {
    this.items = items;
  }

  static priority() {
    return {
      HIGTH: 'hight'
    }
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }
}

console.log(Storage.priority().HIGTH)
// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);

console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

/*
Тесты

Объявлен класс Storage.
Свойство items в классе Storage объявлено приватным.
Конструктор класса принимает свойство items.
Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
У объекта storage нет свойства items.
Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].
*/