function findLongestWord(string) {
  // Пиши код ниже этой строки
  const splitStringArray = string.split(' ');
  let longestWord = splitStringArray[0]

  for (let i = 1; i < splitStringArray.length; i += 1) {
    if (splitStringArray[i].length > longestWord.length) {
      longestWord = splitStringArray[i];
    }
  }
  return longestWord
  // Пиши код выше этой строки
}

findLongestWord('The quick brown fox jumped over the lazy dog')