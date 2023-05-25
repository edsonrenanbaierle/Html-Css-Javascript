const names = ['Edson', 'Cauã', 'Rafa', 'Djeison', 'Kristian', 'Amadeo']

console.log(...names)
console.log(...names[0])

const copyNames = names

names.pop()
names.push('Ezequiel')
console.log({names, copyNames})//occore pois o copy names apenas aponta para names e não clona

const cloneNames = [...names]
cloneNames.push('Amadeo')
console.log(cloneNames)

const objectsName = {...names}
console.log(objectsName)//cria um objeto com as propriedades dos nomes('que massa')