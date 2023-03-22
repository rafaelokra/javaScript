function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   // var hora = data.getHours()
    var hora =8
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#e2cd9f'
        //Bom dia!
        img.src = '/aula14/dia.jpeg'
    }else if (hora >= 12 && hora <18){
        //Boa Tarde!
        document.body.style.background = '#b9848f'
        img.src = '/aula14/fim-de-tarde.jpg'
    } else {
        //Boa Noite!
        img.src = '/aula14/fim-de-tarde.jpg'
        document.body.style.background= '#515154'
    }
}
