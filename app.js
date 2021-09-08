const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)
const display = document.querySelector('.calculator__display')
const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add')       return firstNum + secondNum
  if (operator === 'subtract')  return firstNum - secondNum
  if (operator === 'multiply')  return firstNum * secondNum
  if (operator === 'divide')    return firstNum / secondNum
}  
  
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType
  if (!action) {
    if(previousKeyType==="equal"){
      calculator.dataset.firstValue = ""
    }
  if (displayedNum === '0' || previousKeyType === 'operator' ||previousKeyType === "equal"){ 
    display.textContent = keyContent
  }else{
    display.textContent += keyContent
  }
  calculator.dataset.previousKeyType = 'number'      
}
    
    
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
   const firstValue = calculator.dataset.firstValue
   const operator = calculator.dataset.operator
   const secondValue = displayNum
    
   if (firstValue && operator&&previousKeyType!=="operator"&&previousKeyType!=="equal") {
   const calcValue = calculate(firstValue, operator, secondValue)
   display.textContent = calcValue
   calculator.dataset.firstValue = calcValue
   }else{
  calculator.dataset.firstValue = displayedNum
  }
    
  calculator.dataset.operator = action
  console.log('operator key!')
  calculator.dataset.previousKeyType = 'operator'
}

    
if (action === 'decimal') {
  if(!displayNum.includes(".")){
    display.textContent+="."
  }
  ifpreviousKeyType==="operator"||previousKeyType==="equal"){
    display.textContent="0."
  }
  console.log('decimal key!')
  calculator.dataset.previousKeyType = 'decimal'
}
    
    
  if (action !=== 'clear'){
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
  if (action === 'clear'){
    if (key.textContent === 'AC'){
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
    }else{
      key.textContent = 'AC'
    }
    display.textContent = "0"
    console.log('clear key!')
    calculator.dataset.previousKeyType = 'clear'
  }
    
  
  if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayNum
    
    if (firstValue){
    if(previousKeyType==='equal'){
      firstValue = displayNum
      secondValue = calculator.dataset.modValue
    }
    display.textContent = calculate(firstValue,operator,secondValue)
      
    }
    calculator.dataset.modValue = secondValue
    calculator.dataset.previousKeyType = 'equal'
  }
       
      }
})


