function ast(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if(num.value.length == 0){
        window.alert('Digite um numero')
    } else {
        let n = Number(num.value)
        let ast = '*'
        for(let cont = 1; cont <= n; cont++){
            ast += ast
            res.innerHTML += `<br>${ast}`
        }
    }
}