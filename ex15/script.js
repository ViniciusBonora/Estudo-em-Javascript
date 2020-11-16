function verificar(lim){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    res.innerHTML = '';
    if(num.value.length == 0){
        window.alert ('Preencha o campo limite')
    } else {
        let lim = Number(num.value);
        
        //res.innerHTML= `${lim}`
        for(let i = 2; i <= lim; i++){
            let primo = true;
            for(let div = 2; div < i; div++){
                if(i % div === 0){
                    primo = false;
                    break    
                }
            }    
            if(primo) res.innerHTML += `  ${i}`;
        }
    }
    num.value = ''
    num.focus()
    
} 