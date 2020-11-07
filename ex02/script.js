function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(Fano.value.length == 0 || Number(Fano.value) > ano ){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = `Idade calcuada: ${idade} anos` 
        if (sex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 20){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if(idade <50){
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if(sex[1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 20){
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if(idade <50){
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com idade ${idade} anos`
        res.appendChild(img)
        
    }
        
}