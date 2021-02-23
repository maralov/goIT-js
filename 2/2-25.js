const getCommonElements = (array1, array2) => {
  // Пиши код ниже этой строки
  let commonArr = [];
  for (const item of array1) {
    if (array2.includes(item)) {
      commonArr.push(item)
    }
  }

  console.log(commonArr);

  return commonArr
  // Пиши код выше этой строки
}

getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])

