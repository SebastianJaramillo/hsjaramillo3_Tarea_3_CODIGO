function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	
	else if(telefono.length!=10){
		alert("El telefono es Incorrecto");
		return false;
	}

	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	else
	{
		checkSubmit();				
		setTimeout(regresar,500);
		alert('DATOS ENVIADOS CORRECTAMENTE !!!!!');
	}
}

function checkSubmit() {
    document.getElementById("btnEnviar").value = "Enviando...";
    document.getElementById("btnEnviar").disabled = true;
    return true;
}

function regresar() {
	window.location = '../index.html';
}