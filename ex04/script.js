function tabuada(){
    let numb = document.getElementById('txtn')
    let num = Number(numb.value)
    let res = document.getElementById('res')
    //res.innerHTML = `${num}`
    
    for(let c = 0; c <= 10 ; c ++){
        r = num * c
        res.innerHTML += `${c} x ${num} = ${r}`
    }
}