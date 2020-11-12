function verificar(n){
    let num = document.querySelector('input#txtn')
    let res = document.querySelector('div#res')
    if(num.value.length = 0){
        window.alert('Preencha todos os campos')
    } else {
        let n = Number(num.value)
        //res.innerHTML = `${n}`
        for(let cont = 0 ; cont <= n; cont++){
            if(cont % 2 == 0){
                res.innerHTML += `<br>${cont} Par`
            } else {
                res.innerHTML += `<br>${cont} Impar`
            }
        
        }
        
    }
    
}
