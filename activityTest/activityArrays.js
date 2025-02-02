let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter( name => name.startsWith('B'));
console.log('OS NAMES:', namesB)

const namesLength = names.map(name => name.length)
console.log('OS NAMES Length:', namesLength)

console.log(names.reduce((totalFinal, item) => totalFinal + item.length, 0) / names.length)