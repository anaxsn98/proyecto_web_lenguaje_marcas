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
function validar(){
	
	var mail, password, expresion;

	mail = document.getElementById("mail").value;
	password = document.getElementById("password").value;
	
	expresion = /\w+@\w+\.+[a-z]/;


	if (mail === "" || password === "") {
		alert ("ESTOS CAMPOS SON OBLIGATORIOS");
		return false;
	}else if(mail.lenght > 30){
		alert("SUPERA EL LIMITE DE CARACTERES");
		return false;
	}else if(!expresion.test(mail)){
		alert("CORREO ELECTRONICO NO VALIDO");
		return false;
	}else if (password.lenght > 8) {
		alert("CONTRASEÑA INVALIDA");
		return false;
	}
}