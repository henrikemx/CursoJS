function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `A hora atual é ${hora} hs`

    if (hora > 6 && hora <12){
        img.src = '/aula12ex/ex014/imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = '/aula12ex/ex014/imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = '/aula12ex/ex014/imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
}