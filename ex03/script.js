function contar() {
    let ini = window.document.querySelector('input#txtini')
    let fim = window.document.querySelector('input#txtfim')
    let pas = window.document.querySelector('input#txtpas')
    let res = document.getElementById('res')
    //res.innerHTML = `${ini} e ${fim} e ${pas}`
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = `[ERROR] Faltam dados`
    } else {
        res.innerHTML = `Contando...`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}`
            }
            /*
            let c = i
            while(c <= f){
                res.innerHTML += `${c}`
                c += p
            }
            if(i < f){
            let c = i
                do{
                    res.innerHTML += `${c}`
                    c += p
                }while(c <= f)
            */
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }


} 
