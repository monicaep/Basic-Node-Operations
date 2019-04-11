function reverseString(inputString) {
  let wordArr = inputString.split(' ');
  let reversedArr = [];
  wordArr.forEach((item) => {
    reversedArr.push((item.split('').reverse().join('')) + ' ');
  });
  return reversedArr.join(' ');
}

let string = "I'm learning to program algorithms!";
console.log(reverseString(string));
