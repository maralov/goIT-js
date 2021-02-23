/* 
Задание

Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

{
  name: 'Дыхание дракона',
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
*/

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    const { potions } = this

    for (const { name } of potions) {

      if (name === potionName) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
    }

    potions.push(potionName);

    return `Зелье ${potionName.name} добавлено в инвентарь!`;
  },

  removePotion(potionName) {
    const { potions } = this

    for (let i = 0; i < potions.length; i++) {
      const { name } = potions[i];

      if (name === potionName) {
        potions.splice(i, 1);
        return `Зелье ${potionName} удалено из инвентаря!`
      }
    }

    return `Зелья ${potionName} нет в инвентаре!`;

  },

  updatePotionName(oldName, newName) {
    const { potions } = this

    for (const potion of potions) {

      if (potion.name === oldName) {
        potion.name = newName;
        return `Зелье ${oldName} обновлено в инвентаре!`;
      }
    }

    return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};

// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 })
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 })
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion('Дыхание дракона')
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
/*

Тесты

Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.getPotions это метод объекта.
Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Значение свойства atTheOldToad.addPotion это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
Значение свойства atTheOldToad.removePotion это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Значение свойства atTheOldToad.updatePotionName это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].
*/