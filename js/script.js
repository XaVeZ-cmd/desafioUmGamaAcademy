const formulario = document.getElementById('formulario');

function home(){

}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data =  {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData);

  let content = document.getElementById('content');

  let carregando = `<img src="./assets/loader.gif">`;

  let pronto = `<p>Cadastro realizado com sucesso!!!</p><br/>
                <input type='submit' onClick="window.location.href = 'http://127.0.0.1:5500/index.html'" id="button" value='Home' />`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;   
  }, 1000)


})