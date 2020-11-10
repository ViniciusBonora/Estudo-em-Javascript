let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function fin() {
    if (valores.length == 0) {
        window.alert = ('adicione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
        }

    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados</p>`
    res.innerHTML += `<p>O menor valor dentre os da lista é ${menor}</p>`
    res.innerHTML += `<p>O maior valor dentre os da lista é ${maior}</p>`
    res.innerHTML += `<p>A soma de todos os valores dentro da lista é ${soma}</p>`
    res.innerHTML += `<p>A media de todos os valores dentro da lista é ${soma/total}</p>`
}