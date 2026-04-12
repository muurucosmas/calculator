let historyTag =[]
function inputFunction (a,b,opt){
 let result;
 if (opt === '+')result = addNum(a,b)//
  else if (opt === '-')result = subtractNum(a,b)
else if (opt === '*') result = multipyNum(a,b)
  else if (opt === '/'&& b !== 0) result = divideNum(a,b)

historyTag.push(`${a} ${opt} ${b} = ${result}`)
  
 
 
return result
}

function addNum(a,b){
 return a+b
}
function subtractNum(a,b){
  return a - b
}
function multipyNum(a,b){
  return a * b
}
function divideNum(a,b){
  return a /b 
}

console.log(inputFunction(2,3,'*'))
console.log(inputFunction(2,3,'-'))
console.log(`added history tag ${historyTag}`)
