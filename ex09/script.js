function verificar(vel){
    let velkm = document.getElementById('txtkm')
    let res = document.getElementById('res')
    if(velkm.value.length == 0){
        window.alert('[ERRO] Preencha os dados')
    } else {
        let vel = Number(velkm.value)
        //res.innerHTML += `${vel}`
        if(veMath.floor(vel)<= 70){
            
            return res.innerHTML += `Velocidade ok ${vel}`
        } else{
            return res.innerHTML = `multado`
        }
    }
}