<div class=”calculator”>
  <div class=”calculator__display”>0</div>
    <div class=”calculator__keys”> … 
      <button class="key--operator" data-action="add">+</button>
      <button class="key--operator" data-action="subtract">-</button
      <button class="key--operator" data-action="multiply">&times;</button>
      <button class="key--operator" data-action="divide">÷</button
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>0</button>
      <button data-action="decimal">.</button>
      <button data-action="clear">AC</button>
      <button class="key--equal" data-action="calculate">=</button>
</div>
</div>

const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType
const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

  if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
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

