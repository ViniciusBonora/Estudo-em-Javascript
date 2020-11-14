let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let vetor = []
let res = document.querySelector('div#res')
function adicionarvetor(){
    if(Number(num.value) > 0 && Number(num.value) <=100){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Nota adicionada : ${num.value}`
        lista.appendChild(item)
    } else {
        window.alert ('Digite um numero entre 0 a 100')
    }
    num.value = ''
    num.focus()
}
function m(){
    if(vetor.length == 0){
        window.alert('Digite no minimo um numero')
    } else {
        let soma = 0
        let conc = ''
        let tot = vetor.length
        for(let cont in vetor){
            soma += vetor[cont]
        }
        let media = (soma / tot).toFixed(2)
        if(media <= 59){
            conc = 'E'
        } else if (media <= 69){
            conc = 'D'
        } else if (media <= 79){
            conc = 'C'
        } else if (media <= 89){
            conc = 'B'
        } else {
            conc = 'A'
        }
        res.innerHTML = `Sua Média é ${media} <br>Ficou com ${conc}`
    }  
}

