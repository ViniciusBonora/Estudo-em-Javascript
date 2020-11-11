/*let res = document.querySelector('div#res')
const cores = ['verde','preto', 'amarelo']

for(let cor of cores){
    res.innerHTML += `<br>${cor}`
}

const pessoa = {
    nome: 'joão',
    age: 25 ,
    peso: 67.8 
};

for(let dados in pessoa){
    res.innerHTML += `<br>${dados,pessoa['peso']}`
}*/
function Comparar(n1, n2){
    let num1 = document.querySelector('input#txtn1')
    let num2 = document.querySelector('input#txtn2')
    let res = document.querySelector('div#res')
    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos')
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)//res.innerHTML = `${n1} e ${n2}`
        if(n1 > n2){
            return res.innerHTML = `${n1} é o maior`
        } else if (n2 > n1){
            return  res.innerHTML = `${n2} é o maior`
        } else {
            return res.innerHTML = `${n1} e ${n2} são iguais`
        }
    }
}
