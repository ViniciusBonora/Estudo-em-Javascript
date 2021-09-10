function guardarDados() {
    let rua = document.getElementById('txtrua')
    let cidade = document.getElementById('txtcid')
    let cep = document.getElementById('txtcep')
    let res = document.getElementById('res')
    if (rua.value.length == 0 || cidade.value.length == 0 || cep.value.length == 0) {
        window.alert('Preencha todos os campos')
    } else {
        return
        function let endereco = {
            rua: rua.value,
            cid: cidade.value,
            c: (cep.value),
            ExibirEndereco(endereco) {
                res.innerHTML = `${ Object.values(endereco)}`
            }
        }
    }
}

