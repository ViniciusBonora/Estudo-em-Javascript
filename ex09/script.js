function verificar(vel){
    let velkm = document.getElementById('txtkm')
    let res = document.getElementById('res')
    if(velkm.value.length == 0){
        window.alert('[ERRO] Preencha os dados')
    } else {
        let velk = Number(velkm.value)
        let vel = Math.floor(velk)
        //res.innerHTML += `${vel}`
        if(vel <= 70){
            return res.innerHTML = `Velocidade Ok`
        } else {
            let pts = (velk - 70) / 5 
            let p = Math.floor(pts)
            if(p < 12){
                return res.innerHTML = `Multado ${p} pontos na carteira`
            }else{
                return res.innerHTML = `Carteira Suspensa`   
            }
        }
    }   
}