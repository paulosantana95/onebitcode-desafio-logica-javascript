function media(numbers) {
  let sum = 0
  //Uma maneira
  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }

  //Outra meneira
  numbers.forEach(number => {
    sum += number
    
  });

  const average = sum / numbers.length
  return average
}


console.log(media([10, 9, 6, 8, 9, 1, 5, 7])) // 6.875
console.log(media([2, 5, 7, 1, -2])) // 2.6
console.log(media([10, 10, 10, 10, 9])) // 9.8
console.log(media([25, 75])) //50
