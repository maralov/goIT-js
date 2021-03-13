
/* 
ES5
Переделать вызов родительского конструктора с call на apply +

Добавить в TopLevelWorker новый метод getSalary, важно не дать экземпляру класса TopLevelWorker вызвать getSalary из прототипа родительского класса +
Создать новый класс BottomLevelWorker который тоже наследует класс Worker, у данного класса будет новое свойство experience (количество лет работы) и новый метод класса getLoyaltyLevel который будет проверять свойство experience: в зависимости от количества выводить сообщение - У ${User} уровень преданности ${LOYALTY_LEVEL}. LOYALTY_LEVEL может быть заранее заготовленным объектом констант
ES6
Переделать объект HIERARCHY_LEVEL (строка 202) в статичную функцию родительского класса которая будет возвращать данный объект
Удалить свойство salary и метод getSalary, в классе Worker1 создать новое приватное свойство #salary (минимальное значение 500), доступ и изменение свойства salary будет возможно только через getter и setter. До того как можно будет добавить зарплату для TopLevelWorker1, надо проверять что параметр это цифра и #salary не превышает 5000, если зарплата снижается то надо проверить параметр на число и чтобы зп не была ниже 500.
TopLevelWorker1 добавить метод setHierarchyLevel, которое принимает количество лет проведенные в компании и определяет значение свойства hierarchyLevel, если меньше года то функция пишет сообщение об этом
Создать новый класс BottomLevelWorker который наследует TopLevelWorker1, в экземпляре BottomLevelWorker прибавить ему зарплату и определить hierarchyLevel с помощью метода setHierarchyLevel

*/
const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom"
};

const LOYALTY_LEVEL = {
  LOW: "низкий",
  MIDDLE: "умеряный",
  HIGH: "высокий",
}

// ES5

/* const checkAndBindContext = function (parentClass, params) {
  if (!Array.isArray(params)) {
    console.error('First argument must be an array')
    return
  }

  parentClass.apply(this, params);
} */


// Worker
const Worker = function (name, surname, age, position, salary) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  console.log('getSalary call from Worker')
  return this.salary;
};
// Worker end

// TopLevelWorker
const TopLevelWorker = function (workerParams, hierarchyLevel) {
  if (!Array.isArray(workerParams)) {
    console.error('First argument must be an array')
    return
  }

  Worker.apply(this, workerParams);

  this.hierarchyLevel = hierarchyLevel;
};

TopLevelWorker.prototype = Object.create(Worker.prototype);
TopLevelWorker.prototype.constructor = TopLevelWorker;

TopLevelWorker.prototype.getSalary = function () {
  console.log('getSalary call from TopLevelWorker')
  return this.salary;
};
// TopLevelWorker end

// BottomLevelWorker
const BottomLevelWorker = function (workerParams, experience) {

  if (!Array.isArray(workerParams)) {
    console.error('First argument must be an array')
    return
  }

  Worker.apply(this, workerParams);
  this.experience = experience;
}

BottomLevelWorker.prototype = Object.create(Worker.prototype);
BottomLevelWorker.prototype.constructor = BottomLevelWorker;
BottomLevelWorker.prototype.getLoyaltyLevel = function () {

  const exp = this.experience

  if (exp < 3) {
    return `У ${this.name} ${this.surname} уровень преданности ${LOYALTY_LEVEL.LOW}`
  } else if (exp >= 3 && exp <= 5) {
    return `У ${this.name} ${this.surname} уровень преданности ${LOYALTY_LEVEL.MIDDLE}`
  } else {
    return `У ${this.name} ${this.surname} уровень преданности ${LOYALTY_LEVEL.HIGH}`
  }
}
// BottomLevelWorker end

const worker1 = new TopLevelWorker(
  ["Ашот", "Осипян", 27, "Developer", 100],
  HIERARCHY_LEVEL.BOTTOM
);

console.log(worker1.getSalary());
console.log(worker1);

const worker2 = new BottomLevelWorker(
  ["Ден", "Абрамов", 30, "Developer", 100500],
  15
);

console.log(worker2);
console.log(worker2.getLoyaltyLevel());