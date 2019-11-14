// var agora = new Date()
// var hora = agora.getHours()
var hora = 1
console.log(`A hora atual do sistema: ${hora} hs`)
if (hora >= 6 && hora < 12){
    console.log('Bom dia !')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde !')
} else {
    console.log('Boa noite')
}