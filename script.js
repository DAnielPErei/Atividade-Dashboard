document.getElementById('gerar-relatorio').addEventListener('click', function () {
  const select = document.getElementById('relatorio-select');
  const reportOutput = document.querySelector('.report-output');
  const feedbackMessage = document.getElementById('feedback-message');

  if (select.value) {
    feedbackMessage.textContent = 'Relatório gerado com sucesso!';
    feedbackMessage.style.color = 'green';
  } else {
    feedbackMessage.textContent = 'Por favor, selecione um relatório.';
    feedbackMessage.style.color = 'red';
    reportOutput.innerHTML = '';
  }

  setTimeout(() => {
    feedbackMessage.textContent = '';
  }, 3500);
});

document.getElementById('cancelar-config').addEventListener('click', function () {
  document.getElementById('configForm').reset();
  document.getElementById('feedbackMessage').style.display = 'none';
});

document.getElementById('configForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const feedbackMessage = document.getElementById('feedbackMessage');

  if (!email || !senha) {
    feedbackMessage.style.display = 'block';
    feedbackMessage.textContent = 'Por favor, preencha todos os campos.';
    feedbackMessage.style.color = 'red';
    return;
  }

  if (senha.length <= 5) {
    feedbackMessage.style.display = 'block';
    feedbackMessage.textContent = 'A senha deve ter mais de 8 caracteres.';
    feedbackMessage.style.color = 'red';
    return;
  }

  feedbackMessage.style.display = 'block';
  feedbackMessage.textContent = 'Configurações salvas com sucesso!';
  feedbackMessage.style.color = 'green';

  this.reset();
});

function applyTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.getElementById('toggle-theme').textContent = theme === 'dark' ? 'Tema Claro' : 'Tema Escuro';
  }
}

document.getElementById('toggle-theme').addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');

  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  document.getElementById('toggle-theme').textContent = currentTheme === 'dark' ? 'Tema Claro' : 'Tema Escuro';
});

applyTheme();