function NumberReverse(str) { 
  let array = str.split(" ").map(Number);//changes to number

  array.sort((a, b) => b - a);
  //array.sort().reverse()

  return array.join(" ");
}

console.log(NumberReverse("100000000  30 40 90"));