function tabuada(){
    let numb = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //res.innerHTML = `${numb}`
    
    if(numb.value.length == 0){
        window.alert('Favor digitar um numero')
    } else {
        let num = Number(numb.value)
        for(let c = 0; c <= 10 ; c ++){
        let item = document.createElement('option')
        item.text = `${c} x ${num} = ${c*num}`
        item.value = `tab${c}`
        tab.appendChild(item)   
        }
    }
    
}