function validar(){
    let res = document.getElementById('res')
    let filme = {
        titulo: document.getElementById('txt1'),
        ano: document.getElementById('txt2'),
        pers: document.getElementById('txt3')
    };
    if(filme.titulo.value.length == 0 || filme.ano.value.length == 0 || filme.pers.value.length == 0){
        window.alert('Preencha todos os campos')
    }else{
        let fil = {
            t: filme.titulo.value,
            a: filme.ano.value,
            p: filme.pers.value
        };
        /* jeito que deveria funcionar mas ele não reconhece number, so strings
        for(prop in fil)
            if(typeof fil[prop] == 'string')
            res.innerHTML += `${prop}: ${fil[prop]}`
        */
        let f = {
            tn: Number(filme.titulo.value),
            an: Number(filme.ano.value),
            pn: Number(filme.pers.value)
        };
        //fn = Object.values(f) mostra todos os values do objetc 
        //res.innerHTML = `${fn}`
        if(fil.t != f.tn){
            res.innerHTML = `<p>Titulo: ${fil.t}</p>`
        }if(fil.a != f.an){
            res.innerHTML += `<p>Ano: ${fil.a}</p>`
        }if(fil.p != f.pn){
            res.innerHTML += `<p>Personagem: ${fil.p}</p>`
        }
    }  
}


