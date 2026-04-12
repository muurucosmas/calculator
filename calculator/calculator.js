let historyTag =[]
function inputFunction (a,b,opt){
 let result;
 if (opt === '+')result = addNum(a,b)//
  else if (opt === '-')result = subtractNum(a,b)
else if (opt === '*') result = multipyNum(a,b)
  else if (opt === '/'|| b === 0) result = divideNum(a,b)

  function historyStore(){
    if(historyTag.push(result)){
  console.log(`your result is ${result}`) ;
 }else{
  return `you dont have any saved shit`
 }}
 
return historyStore()
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
