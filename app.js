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
  
 



if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

  
  display.textContent = calculate(firstValue, operator, secondValue)
  
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    
  if (!action) {
    console.log('number key!')
  }
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!') {
  key.classList.add('is-depressed')
}
     calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }

  if (action === 'clear') {
    console.log('clear key!')
  }

  if (action === 'calculate') {
    console.log('equal key!')
  }
  if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  }
}
  if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
    if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}
      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
      calculator.dataset.previousKeyType = 'operator'
    }
  }
})

