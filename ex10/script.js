function verificar(n){
    let num = document.querySelector('input#txtn')
    let res = document.querySelector('div#res')
    if(num.value.length = 0){
        window.alert('Preencha todos os campos')
    } else {
        let n = Number(num.value)
        res.innerHTML = `${n}`
    }
}