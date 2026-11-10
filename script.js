
document.querySelectorAll('[data-answer]').forEach(boton => {
  boton.addEventListener('click', () => {
    const pregunta = boton.closest('.quiz');
    const resultado = pregunta.querySelector('.feedback');

    if (boton.dataset.answer === 'si') {
      resultado.textContent = '¡Correcto! Muy bien.';
      resultado.style.color = '#87f7b3';
    } else {
      resultado.textContent = 'Inténtalo de nuevo.';
      resultado.style.color = '#ffb3a8';
    }
  });
});

document.querySelectorAll('[data-copy]').forEach(boton => {
  boton.addEventListener('click', async () => {
    const codigo = document.getElementById(boton.dataset.copy);
    if (!codigo) return;

    try {
      await navigator.clipboard.writeText(codigo.innerText);
      boton.textContent = '¡Copiado!';
    } catch (error) {
      boton.textContent = 'Selecciona el código para copiarlo';
    }

    setTimeout(() => {
      boton.textContent = 'Copiar código';
    }, 1800);
  });
});
