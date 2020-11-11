function verificar(vel){
    let velkm = document.getElementById('txtkm')
    let res = document.getElementById('res')
    if(velkm.value.length == 0){
        window.alert('[ERRO] Preencha os dados')
    } else {
        const velmax = 70;
        const ptsporkm = 5;
        let velk = Number(velkm.value)
        //let vel = Math.floor(velk)
        //res.innerHTML += `${vel}`
        if(velk <= velmax){
            return res.innerHTML = `Velocidade Ok`
        } else {
            const pts = Math.floor(((velk - velmax) / ptsporkm)) 
            //let p = Math.floor(pts)
            if(pts < 12){
                return res.innerHTML = `Multado ${pts} pontos na carteira`
            }else{
                return res.innerHTML = `Carteira Suspensa`   
            }
        }
    }   
}