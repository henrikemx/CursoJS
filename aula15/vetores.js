let valores = [8, 1, 7 , 4, 2, 0]

// 2 formas de ler o conteúdo de um vetor
console.log('2 formas de ler o conteúdo de um vetor:\n')

// 1. através de laço via for

console.log('1. através do laço: "for(let pos = 0;pos < valores.length; pos++){}"\n')

for(let pos = 0;pos < valores.length; pos++){
    console.log(`O elemento ${pos} possui o valor ${valores[pos]}`)
}

// 2. através de laço via for e comando 'in'
console.log()
console.log('2. através do laço: "for (let pos in valores){}"\n')

for (let pos in valores){
    console.log(`O elemento ${pos} possui o valor ${valores[pos]}`)
}

console.log()
console.log('No exemplo acima, informamos o índice "let pos" no primeiro')
console.log('parâmetro e o nome da variável composta "valores" no 2º parâmetro.')