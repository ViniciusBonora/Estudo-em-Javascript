function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} : ${min} horas` 
    
    if(hora >= 0 && hora <12){
        img.scr = 'fotomanhã.jpg'
        document.body.style.background = '#f0e30a'
    } else if (hora >=12 && hora <18) {
        img.scr = 'fototarde.jpg'
        document.body.style.background ='#09094e'
    } else {
        img.scr= 'fotonoite.jpg'
        document.body.style.background = '#2d2d30'
    }
}