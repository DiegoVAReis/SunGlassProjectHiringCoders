/*
Tratar o formulário para captação de e-mail. 
A titúlo de estudo salvará apenas no localStorage sem uso de DB externo.
*/

const form = document.getElementById('formRegister')

form.addEventListener('submit', (e) => {

  e.preventDefault();

  let name = document.getElementById('nomeInput').value;
  let email = document.getElementById('emailInput').value;

  if (!validateEmail(email)){
    /*Se o email não for válido retorna uma msg para o usuário abaixo do campo de email.*/

    let elementError = document.getElementById('validate-msg');
    let messageErrorEmailInvalid = `<p> * Email inválido, por favor digite um e-mail válido.</p>`;

    elementError.innerHTML = messageErrorEmailInvalid;

  }else {

    /*Se o email for um email válido armazena no localStorage*/

    let data = [{
        name,
        email,
      }]
      
      let dadosGravados = localStorage.getItem('SunglassEmailRecepted');

      if (dadosGravados != null){
          let dadosGravadosAux = JSON.parse(dadosGravados);
          
          console.log(dadosGravadosAux);
          console.log(JSON.parse(dadosGravados).lenght);

          for (var i in dadosGravadosAux) {
            data.push(dadosGravadosAux[i]);
          }

      }

      let convertStringData = JSON.stringify(data);

      localStorage.setItem('SunglassEmailRecepted', convertStringData);

      let elementError = document.getElementById('validate-msg');
      let clearMessageEmailInvalid = ``;
      elementError.innerHTML = clearMessageEmailInvalid;

      let contentRegister = document.getElementById('content-register');
      let contentRegisterCurrentHTML = document.getElementById('content-register').innerHTML;

      let loading = `<span>Enviando Informação...<img src="assets/images/loading.gif"></span>`
    
      contentRegister.innerHTML = loading;
    
      setTimeout(() => {
        contentRegister.innerHTML = contentRegisterCurrentHTML
      }, 1000)
  } 

})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
