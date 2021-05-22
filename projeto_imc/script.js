let peso;
let altura;
peso =150;
altura= 1.8
let imc= peso / (altura * altura);
console.log(imc)

if(imc < 18.5){
    console.log('voce esta abaixo do peso !')
}
else if(imc == 18.5 || imc <= 24.9 ){
    console.log('Seu peso esta normal, parabens !') 
}
else if(imc == 25 || imc <= 29.9){
    console.log('Voce esta com sobre peso fique atento !')
}
else if(imc == 30 || imc < 34.5){
    console.log('Obesidade grau 1, tome cuidado se preciso procure um medico !')
}
else if(imc == 35 || imc < 39.9){
    console.log('Obesidade grau 2, procure um medico !')
}
else if(imc > 40){
    console.log('Obesidade grau 3, procure um medico imediatamente !')
}
else{
    console.log('verifique se todos os daods foram preenchidos !')
}