let soma = require('./funcao_soma')
let sub = require('./funcao_sub')
let mult = require('./funcao_mult')
let div = require('./funcao_div')

console.log(`SOMA: ${soma(2, 3)}`)
console.log(`SUBTRAÇÃO: ${sub(10, 7)}`)
console.log(`MULTIPLICAÇÃO: ${mult(10, 20)}`)
console.log(`DIVISÃO: ${div(81, 0)}`)

// "type": "module" no package.json
// import from
// exports default ...