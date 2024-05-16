
//FORMULARIO CONTACTO
const form = document.getElementById('needs-validation');
const nombre = document.getElementById('Nombre');
const apellido = document.getElementById('Apellido');
const email = document.getElementById('Email');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

}

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const nombreValue = nombre.value.trim();
	const apellidodValue = apellido.value.trim();
    const emailValue = email.value.trim();

    //AHORA VALIDAMOS
    if(nombreValue === '') {
		setErrorFor(nombre, 'Debe escribir su nombre.');
	} else {
		setSuccessFor(nombre);
	}

    if(apellidoValue === '') {
		setErrorFor(apellido, 'Debe escribir su apellido.');
	} else {
		setSuccessFor(apellido);
	}

    if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, mensaje) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = mensaje;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const campos ={
    nombre: false,
    apellido: false,
    correo: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            validarCampo(expresiones.usuario, e.target, 'Nombre');
        break;
        
        case "Apellido":
            validarCampo(expresiones.contrasena, e.target, 'Apellido');
        break;

        case "Email":
            validarCampo(expresiones.contrasena, e.target, 'Email');
        break;
    }
}
