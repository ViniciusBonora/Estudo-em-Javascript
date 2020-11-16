function criarcelular(marcaCelular, tamanhodeTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhodeTela,
        capacidadeBateria,
        /*ligar(){
            return res.innerHTML = `<br>Fazendo ligação`
        }*/
    }
}
function celular(marcaCelular, tamanhodeTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhodeTela = tamanhodeTela,
        this.capacidadeBateria = capacidadeBateria
        /*this.ligar = function(){
        res.innerHTML = '<br>Fazendo ligação'
        }*/
}


function guardarDados() {
    let marca = document.getElementById('txtm')
    let tela = document.getElementById('txtt')
    let bateria = document.getElementById('txtb')
    let res = document.getElementById('res')

    let cel1 = criarcelular((marca.value), tela.value, bateria.value);
    res.innerHTML = `${Object.entries(cel1)}<br>`
    let cel = new celular((marca.value), tela.value, bateria.value);
    res.innerHTML += `${Object.entries(cel)}`
}

