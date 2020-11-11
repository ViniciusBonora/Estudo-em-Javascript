
function resultado(m){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if(num.value.length == 0){
       window.alert('[ERRO] Preencha os dados') 
       
    } else {
        let n = (num.value)
        let m = Number(num.value)
        //res.innerHTML = `${n}`
        if (m != n){
            return res.innerHTML = `Não é um numero`
        } else if ((m % 3) === 0 && (n % 5) === 0 ){
            return res.innerHTML = `FIZZBUZZ`
        } else if (m % 3 === 0){
            return res.innerHTML = `FIZZ`
        } else if (m % 5 === 0){
            return res.innerHTML = `BUZZ`
        } else {
            return res.innerHTML = `${m}`
        }
        
    }
    
}
