function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verefique os danos e tente novalmente!') 

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/crianca.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagem/jovem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagem/adulto.jpg')
            }else  {
                //Idoso
                img.setAttribute('src', 'imagem/idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/criancaf.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagem/mulherj.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagem/mulhera.jpg')
            }else  {
                //Idoso
                img.setAttribute('src', 'imagem/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}