function adicionarvetor(){
    let num = document.querySelector('input#txtn')
    
    let lista = document.querySelector('select#flista')
    let vetor = []
    
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
    let res = document.querySelector('div#res')
    if(vetor.length == 0){
        window.alert('Digite no minimo um numero')
    } else {
        let soma = 0
        for(let cont of vetor){
            soma += vetor[cont]
        }
        res.innerHTML = ''
        res.innerHTML += `${soma}`
    }
       
    
}