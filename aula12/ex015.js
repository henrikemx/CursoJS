var agora = new Date()
var DiaSemana = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()

// var DiaSemana = 4
/* Os dias da semana são:
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
// console.log(DiaSemana)

switch(mes){
    case 0:
        Mes = 'Janeiro'
        break
    case 1:
        Mes = 'Fevereiro'
        break
    case 2:
        Mes = 'Março'
        break
    case 3:
        Mes = 'Abril'
        break
    case 4:
        Mes = 'Maio'
        break
    case 5:
        Mes = 'Junho'
        break
    case 6:
        Mes = 'Julho'
        break
    case 7:
        Mes = 'Agosto'
        break
    case 8:
        Mes = 'Setembro'
        break
    case 9:
        Mes = 'Outubro'
        break
    case 10:
        Mes = 'Novembro'
        break
    case 11:
        Mes = 'Dezembro'
        break
    default:
        break
}

switch(DiaSemana){
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log(`Hoje é Segunda, ${dia} de ${Mes} de ${ano}`)
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('Erro: Dia da Semana inválido')
    }