const numeros = [1,12,2,4,21]
const strings = ['edson','taina','casa','carro']
const mistura = [1,'portugal', true]

const numerosCopia = numeros.slice()
console.log(numeros, numerosCopia);

const stringsCopia = strings.slice()
console.log(strings, stringsCopia);

const misturaCopia = mistura.slice()
console.log(mistura, misturaCopia);

numeros.push(6)
console.log(numeros, numerosCopia);

strings.pop()
console.log(strings, stringsCopia);

mistura.splice(1,1)
console.log(mistura, misturaCopia);