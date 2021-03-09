/* 
Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

Не объявляй дополнительные параметры функции composeMessage(position).
Используй call для вызова функции в контексте одного объекта-заказа.
Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.
*/

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {

  const orderPosition = position + 1;
  const { dish, email } = this;

  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${orderPosition}-й в очереди.`

}

const messages = orders.map((item, index) => composeMessage.call(item, index));



/*
Тесты

Объявлена переменная orders.
Значение переменной orders это исходный массив объектов-заказов.
Объявлена функция composeMessage(position).
У функции composeMessage объявлен один параметр position.
В теле функции composeMessage используется this.
Объявлена переменная messages.
Переменной messages с помощью метода map присваивают значение - массив, создаваемый вызовом функции composeMessage. Значение this при вызове функции переопределяется с помощью метода call.
Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

*/