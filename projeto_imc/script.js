const button = document.querySelector("#button-calcular");

const infoUser = document.querySelector("#resultado");

function imc() {
  
  const nome = document.querySelector("#nome").value;
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  
    if (nome !== '' && altura !== '' && peso !== ''){
      let calculaImc = peso/(altura * altura);
      let round = calculaImc.toFixed(2)

      if(calculaImc < 18.5){
        
        infoUser.innerHTML = `${nome} o seu IMC é, ${round}. Voçe esta abaixo do peso !`
        
      }
      if(calculaImc >= 18.5 && calculaImc < 24.9){
        
        infoUser.innerHTML = `${nome} o seu imc é, ${round}. Voçe esta com o peso normal !`
       
      }
      if(calculaImc >= 25 && calculaImc <= 29.9){
        
        infoUser.innerHTML = `${nome} o seu imc é, ${round} Voçe esta com sobrepeso !`
       
      }
      if(calculaImc >= 30 && calculaImc <=34.9){
        
        infoUser.innerHTML = `${nome} o seu imc é, ${round} Voçe esta com obesidade grau 1. Se possível procure um medico de sua confiança !`
        
      }
      if(calculaImc >= 35 && calculaImc <= 39.9){
        
        infoUser.innerHTML = `${nome} o seu imc é, ${round} Voçe esta com obesidade grau 2. Se possível procure um medico de sua confiança !`
        
      }
      if(calculaImc >= 40){
        
        infoUser.innerHTML = `${nome} o seu imc é, ${round} Voçe esta com obesidade grau 3. 
        Se possível procure um medico de sua confiança !`
        
      }
      
  }else{
    infoUser.innerText = 'Preencha todos os campos !'
  }
}
// determinar parametros que vao fazer o preenchimento dos campos 
button.addEventListener("click", imc);


