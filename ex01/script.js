
function c(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas` 
    
    if(hora >= 0 && hora <12){
        document.body.style.background = '#f0e30a'
        foto.src = 'fotomanhã.jpg'
    } else if (hora >=12 && hora <18) {
        foto.src = "fototarde.jpg"
        document.body.style.background ='#09094e'
    } else {
        foto.src= 'fotonoite.jpg'
        document.body.style.background = '#2d2d30'
    }
}