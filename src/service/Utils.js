/*
Tratar o formulário para captação de e-mail. 
A titúlo de estudo salvará apenas no localStorage sem uso de DB externo.
*/

const form = document.getElementById('formRegister')

form.addEventListener('submit', (e) => {

  e.preventDefault();

  let name = document.getElementById('nomeInput').value;
  let nameElement = document.getElementById('nomeInput');

  let email = document.getElementById('emailInput').value;
  let emailElement = document.getElementById('emailInput');

  if (!validateEmail(email)){
    /*Se o email não for válido retorna uma msg para o usuário abaixo do campo de email.*/

    let elementError = document.getElementById('validate-msg');
    let messageErrorEmailInvalid = `<p> * Email inválido, por favor digite um e-mail válido.</p>`;

    elementError.innerHTML = messageErrorEmailInvalid;

    emailElement.focus();

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

      let clearElement = ``;

      let elementError = document.getElementById('validate-msg');
      elementError.innerHTML = clearElement;

      let loadingRegister = document.getElementById('loading-register');

      let loading = `<span><img src="assets/images/loading.gif" height="40px"></span><span> Enviando dados.</span>`
    
      loadingRegister.innerHTML = loading;
    
      setTimeout(() => {
        loadingRegister.innerHTML = clearElement;
      }, 1000)


      nameElement.value = '';
      emailElement.value = '';
  } 

})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
