/* 
Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
*/

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const {
  today: {
    high: highToday,
    low: lowToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    high: highTomorrow,
    low: lowTomorrow,
    icon: tomorrowIcon = 'http://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast

console.log('highToday :', highToday);
console.log('lowToday :', lowToday);
console.log('todayIcon :', todayIcon);
console.log('highTomorrow :', highTomorrow);
console.log('lowTomorrow :', lowTomorrow);
console.log('tomorrowIcon :', tomorrowIcon);

/*
Тесты

Объявлена переменная forecast.
Значение переменной forecast это объект.
Объявлена переменная highToday с помощью деструктуризации.
Значение переменной highToday это число 32.
Объявлена переменная lowToday с помощью деструктуризации.
Значение переменной lowToday это число 28.
Объявлена переменная todayIcon с помощью деструктуризации.
Значение переменной todayIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'.
Объявлена переменная highTomorrow с помощью деструктуризации.
Значение переменной highTomorrow это число 31.
Объявлена переменная lowTomorrow с помощью деструктуризации.
Значение переменной lowTomorrow это число 27.
Объявлена переменная tomorrowIcon с помощью деструктуризации.
Значение переменной tomorrowIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
Используется синтаксис деструктуризации объекта highTemperatures.
*/