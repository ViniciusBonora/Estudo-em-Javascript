function contar(){
    let ini = window.document.querySelector('input#txtini')
    let fim = window.document.querySelector('input#txtfim')
    let pas = window.document.querySelector('input#txtpas')
    let res = document.getElementById('res')
    //res.innerHTML = `${ini} e ${fim} e ${pas}`
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = `[ERROR] Faltam dados`
    } else {
        res.innerHTML = `Contando...`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        for(let c = i ; c <= f ; c += p){
            res.innerHTML += `${c}`
        }
    }
    
} 
