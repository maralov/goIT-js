
/* 
ES5
Переделать вызов родительского конструктора с call на apply
Добавить в TopLevelWorker новый метод getSalary, важно не дать экземпляру класса TopLevelWorker вызвать getSalary из прототипа родительского класса 
Создать новый класс BottomLevelWorker который тоже наследует класс Worker, у данного класса будет новое свойство experience (количество лет работы) и новый метод класса getLoyaltyLevel который будет проверять свойство experience: в зависимости от количества выводить сообщение - У ${User} уровень преданности ${LOYALTY_LEVEL}. LOYALTY_LEVEL может быть заранее заготовленным объектом констант
ES6
Переделать объект HIERARCHY_LEVEL (строка 202) в статичную функцию родительского класса которая будет возвращать данный объект
Удалить свойство salary и метод getSalary, в классе Worker1 создать новое приватное свойство #salary (минимальное значение 500), доступ и изменение свойства salary будет возможно только через getter и setter. До того как можно будет добавить зарплату для TopLevelWorker1, надо проверять что параметр это цифра и #salary не превышает 5000, если зарплата снижается то надо проверить параметр на число и чтобы зп не была ниже 500.
TopLevelWorker1 добавить метод setHierarchyLevel, которое принимает количество лет проведенные в компании и определяет значение свойства hierarchyLevel, если меньше года то функция пишет сообщение об этом
Создать новый класс BottomLevelWorker который наследует TopLevelWorker1, в экземпляре BottomLevelWorker прибавить ему зарплату и определить hierarchyLevel с помощью метода setHierarchyLevel

*/

// ES5

const Worker = function (name, surname, age, position, salary) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  return this.salary;
};

const TopLevelWorker = function (
  name,
  surname,
  age,
  position,
  salary,
  hierarchyLevel
) {
  Worker.call(this, name, surname, age, position, salary);
  this.hierarchyLevel = hierarchyLevel;
};

TopLevelWorker.prototype = Object.create(Worker.prototype);
TopLevelWorker.prototype.constructor = TopLevelWorker;

const worker1 = new TopLevelWorker(
  "Ашот",
  "Осипян",
  27,
  "Developer",
  100,
  HIERARCHY_LEVEL.BOTTOM
);

console.log(worker1.getSalary());

console.log(worker1);