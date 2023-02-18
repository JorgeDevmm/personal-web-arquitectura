// pasamos dos parametor el boton y el atributo de los selectores a cambiar
export default function temaOscuro(btn, classOscuro) {
  const temaBtn = document.querySelector(btn);
  const selector = document.querySelectorAll('[data-oscura]'); //estilos por atributo

  let moon = '☽︎',
    sun = '☀';

  document.addEventListener('click', (event) => {
    if (event.target.matches(btn)) {
      console.log(temaBtn.textContent);

      if (temaBtn.textContent === moon) {
        selector.forEach((elemento) => {
          elemento.classList.add(classOscuro);
        });
        temaBtn.textContent = sun;
      } else {
        selector.forEach((elemento) => {
          elemento.classList.remove(classOscuro);
        });
        temaBtn.textContent = moon;
      }
    }
  });
}
