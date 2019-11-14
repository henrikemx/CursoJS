// let num = [5, 8, 2 ,9 ,3]
let num = [5, 8, 4]

/*
//console.log(num)
console.log(`Este Vetor tem ${num.length} elementos`)
console.log(`Nosso Vetor é o ${num}`)
console.log(`O conteúdo do vetor 2 antes de sort() é ${num[2]}`)
console.log(`Os elementos ordenados ficam: ${num.sort()}`)
console.log(`O conteúdo do vetor 2 depois de sort() é ${num[2]}`)

console.log('------------------------')
num[3] = 6

//console.log(num)
console.log(`Este Vetor tem ${num.length} elementos`)
console.log(`Nosso Vetor é o ${num}`)
console.log(`O conteúdo do vetor 3 é ${num[3]}`)
console.log(`Os elementos ordenados ficam: ${num.sort()}`)
console.log(`O conteúdo do vetor 3 é ${num[3]}`)
*/

console.log('------------------------')
num.push(7) // aqui foi adicionado 7 ao final da sequencia

//console.log(num)
console.log(`Nosso Vetor contém: ${num}`)
console.log()
console.log(`Este Vetor tem ${num.length} elementos`)
let pos = num.indexOf(8)
// console.log(`O índice ${pos} possui o conteúdo ${num[pos]}`)
console.log(`O valor ${num[pos]} está no índice ${pos}`)
console.log()
console.log(`O conteúdo do vetor 4 antes de sort() é ${num[3]}`)
console.log(`Os elementos ordenados ficam: ${num.sort()}`)
console.log()
console.log(`O conteúdo do vetor 4 depois de sort() é ${num[3]}`)
pos = num.indexOf(8)
// console.log(`O índice ${pos} possui o conteúdo ${num[pos]}`)
// console.log(`O valor ${num[pos]} está no índice ${pos}`)
console.log()
if (pos == -1){
    console.log('Não existe esse valor nesse vetor')
} else {
    console.log(`O valor ${num[pos]} está no índice ${pos}`)
}
