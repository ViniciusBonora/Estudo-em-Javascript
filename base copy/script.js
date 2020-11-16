function criarcelular(marcaCelular,tamanhodeTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhodeTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação')
    
        }
    }
}
function guardarDados(){
    let marca = document.getElementById('txtm')
    let tela = document.getElementById('txtt')
    let bateria =document.getElementById('txtb')
    let cel1 = criarcelular((marca.value),tela.value,bateria.value); 
    console.log(cel1) 
}

