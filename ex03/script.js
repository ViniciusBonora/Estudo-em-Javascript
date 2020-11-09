function contar(){
    var ini = window.document.querySelector('input#txtini')
    var ini = Number(ini.value)
    var fim = window.document.querySelector('input#txtfim')
    var fim = Number(fim.value)
    var pas = window.document.querySelector('input#txtpas')
    var pas = Number(pas.value)
    var res = document.getElementById('res')
    //res.innerHTML = `${ini} e ${fim} e ${pas}`
    for(ini; ini <= fim; pas++){
        res.innerHTML = `${pas}`
    }
    
} 
