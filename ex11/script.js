//let res = document.getElementById('res')
const filme = {
    Titulo: 'Vingadores',
    Ano: 2020 ,
    Personagem: 'Hulk'
};
exibirvalidar(filme);
function exibirvalidar(obj){
    for(prop in obj)
        if(typeof prop === 'string')
           console.log (prop,obj[prop]) 
}

