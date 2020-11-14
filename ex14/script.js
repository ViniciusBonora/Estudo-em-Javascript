function ast(){
    
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    res.innerHTML = '';
    if(num.value.length == 0){
        window.alert('Digite um numero')
    } else {
        let n = Number(num.value)
        let last = ''
        if(n % 2 == 0){
            for(let cont = 1; cont <= n-1; cont++){
                last += '*'         
                res.innerHTML += `<br>${last}`
            }
        }
        else{
            for(let cont = 1; cont <= n-1; cont++){
                last += '*'         
                res.innerHTML += `<br>${last}`
            }
        }

    }
    num.value = ''
}