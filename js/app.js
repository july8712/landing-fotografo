const menuBtn = document.querySelector(".menu-btn");
const menuLateral = document.querySelector(".menu-lateral");
const menu = document.querySelector(".menu");
let menuOpen = false;



menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menu.classList.add('corrido');
        menuLateral.classList.remove('cerrado');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('corrido');
        menuLateral.classList.add('cerrado');
        menuOpen = false;
    }
})

// Formulario

const form = document.querySelector("#formContact")
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#mail');
const asuntoInput = document.querySelector('#asunto');
const mensajeInput = document.querySelector('#mensaje');

// Expresiones regulares para validación
const nombreRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función de validación del formulario
function validarFormulario(e) {
  e.preventDefault();

  // Obtén los valores de los campos
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  // Validación del campo nombre
  if (!nombreRegex.test(nombre)) {
    alert('Por favor, ingresa un nombre válido');
    return;
  }

  // Validación del campo email
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un email válido');
    return;
  }

  // Validación del campo mensaje (opcional)
  if (mensaje === '') {
    alert('Por favor, ingresa un mensaje');
    return;
  }

  // Si se superan todas las validaciones, puedes enviar el formulario o realizar otras acciones
  alert('El formulario se ha enviado correctamente');
  form.reset();
}

// Agrega el evento de escucha al formulario
form.addEventListener('submit', validarFormulario);
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const contForm = new FormData(e.target)
    console.log(contForm.get('nombre'));
} )