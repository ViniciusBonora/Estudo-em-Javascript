function somar(){
    let num = document.querySelector('input#txtn')
    let res = document.querySelector('div#res')
    if(num.value.length == 0){
        window.alert('Preencha o campo numero')
    }else{
        let somatotal = 0
        
        let n = Number(num.value)
        for(let cont = 0 ; cont <= n; cont++){
            if(cont % 3 === 0 ||cont % 5 === 0){
               somatotal += cont
            }
            res.innerHTML = `${somatotal}`  
        }
    }
}
