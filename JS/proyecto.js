var inicio = 0;
carrusel();

function carrusel(){
	var i;
	var x = document.getElementsByClassName("fotosGal");
	for (var i = 0; i < x.length ; i++) {
		x[i].style.display = "none";
	}
	inicio++;
	if (inicio > x.length) {
		inicio = 1;
	}
	x[inicio - 1].style.display = "flex";
	setTimeout(carrusel,1800);
}

function desplegar(){
	//en asigno a la variable menu el elemento menu
	var menu = document.getElementById("menu");
	//classlist devuelve el nombre de la clase y con toggle añado o quito  a la clase menu el estilo desplegado
	menu.classList.toggle("desplegado");

	var gal = document.getElementById("galeria");
	gal.classList.toggle("esconder");
}

//creamos el script para validar el usuario con login

function validar(){
	//Almacenar los valores de las cajas en los que introducimos datos
	var mail, password, expresion;

	mail = document.getElementById("mail").value;
	password = document.getElementById("password").value;

	//Estructura de un correo electronico texto@texto.com, es, net
	expresion = /\w+@\w+\.+[a-z]/;

	/*********************************************/
	if (mail === "" || password === "") {
		alert("Todos los campos deben ser rellenados.");
		return false;
	} else if(mail.length > 50){
		alert("El número de caracteres introducidos supera el límite permitido: 50");
		return false;
	}else if(!expresion.test(mail)){
		alert("Correo no válido, por favor introduzca un valor correcto");
		return false;
	}else if(password.length > 8){
		alert("El número de caracteres introducidos supera el límite");
		return false;
	}


}
//creamos el script para validar el usuario con registro
function registro(){
	//Almacenar los valores de las cajas en los que introducimos datos
	var usuario,mail, password, rpassword, expresion;

	usuario = document.getElementById("usuario").value;
	mail = document.getElementById("mail").value;
	password = document.getElementById("password").value;
	rpassword = document.getElementById("rpassword").value;

	//Estructura de un correo electronico texto@texto.com, es, net
	expresion = /\w+@\w+\.+[a-z]/;

	/*********************************************/
	if (usuario === "" || mail === "" || password === "" || rpassword === "") {
		alert("Todos los campos deben ser rellenados.");
		return false;
	}else if(usuario.length > 50){
		alert("El número de caracteres introducidos para el nombre del usuario supera el límite permitido: 50");
		return false;
	} else if(mail.length > 50){
		alert("El número de caracteres introducidos para el mail supera el límite permitido: 50");
		return false;
	}else if(!expresion.test(mail)){
		alert("Correo no válido, por favor introduzca un valor correcto");
		return false;
	}else if(password.length > 8){
		alert("El número de caracteres introducidos supera el límite");
		return false;
	}else if(rpassword.length > 8){
		alert("El número de caracteres introducidos supera el límite");
		return false;
	}
	if(password != rpassword){
		alert("Las contraseñas introducidas no coinciden.");
		return false;
	}else{
		alert(usuario + "Muchas gracias por registrarse con su correo "+correo+" en nuestra página web. En breve recivirá una notificacion de que el proceso ha ido correctamente.");
		return true;
	}

}