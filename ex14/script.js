function ast(){
    
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    res.innerHTML = '';
    if(num.value.length == 0){
        window.alert('Digite um numero')
    } else {
        let n = Number(num.value)
        let last = ''
        for(let cont = 1; cont <= n; cont++){
            last += '*'         
            res.innerHTML += `<br>${last}`
        }
    }
    num.value = ''
}