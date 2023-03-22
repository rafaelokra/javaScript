function carregar(){
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#e2cd2f'
        img.src = 'imagem/bom.dia.webp'

    } else if (hora >= 12 && hora <18){
        document.body.style.background = '#b9848f'
        img.src = 'imagem/boa.tarde.webp'

    } else {
        document.body.style.background= '#515154'
        document.body.style.color= 'white'
    
        img.src = 'imagem/boa-noite.webp'
    }
}