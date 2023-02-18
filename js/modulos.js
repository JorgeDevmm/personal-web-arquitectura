import temaOscuro from './tema_oscuro.js';

// carga evento al analizar html por completo
document.addEventListener('DOMContentLoaded', (evento) => {
  temaOscuro('.tema-oscuro-btn', 'modo-oscuro');
});
