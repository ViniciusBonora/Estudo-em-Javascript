function trocar(){
    let a1 = document.getElementById('txta')
    let b1 = document.getElementById('txtb')
    let res = document.querySelector('div#res')
    let a = a1.value
    let b = b1.value
    let c = a
    a = b
    b = c
    
    res.innerHTML = `A variavel A:${a} e a B:${b}`

}