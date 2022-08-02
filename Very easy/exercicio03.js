function reverseArray(arr) {
  const reversedArray = [];

  for(let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length -1 - i];
  }
  return reversedArray;
}


console.log(reverseArray([0, 9, 6, 8, 9, 1, 5, 7])) // 7, 5, 1, 9, 8, 6, 9, 0
console.log(reverseArray(['Oh', 'Hi', 'Mark'])) // 'Mark', 'Hi', 'Oh'
console.log(reverseArray([false, true, true, true])) // true, true, true, false
console.log(reverseArray(["It's", "not", true, 0])) // 0, true, "not", "It's"
