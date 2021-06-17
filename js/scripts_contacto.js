function onChangeMotivo() {
	var e = document.getElementById("form-contacto-select");
	var valor_selector_motivo = e.selectedIndex;

	let campoDNI = document.getElementById("form_div_campoDNI");
	let campoCV = document.getElementById("form_div_campoCV");
	let campoComentarios = document.getElementById("form_div_campoComentarios");

	let inputDNI = document.getElementById("form_input_campoDNI");
	let inputCV = document.getElementById("form_input_campoCV");
	let input_comentarios = document.getElementById("form_input_comentarios");

	switch (valor_selector_motivo) {
		case 0: //solicitud de servicio
			inputDNI.required = true;
			inputCV.required = false;

			campoDNI.style.display = "inline-block";
			campoCV.style.display = "none";
			campoComentarios.style.display = "none";
			break;
		case 1: //laburo
			inputDNI.required = true;
			inputCV.required = true;

			campoDNI.style.display = "inline-block";
			campoCV.style.display = "inline-block";
			campoComentarios.style.display = "inline-block";
			break;
	}
}

function contacto_click_boton_enviar() {
	var e = document.getElementById("form-contacto-select");
	var valor_selector_motivo = e.selectedIndex;
	let inputNombre = document.getElementById("input_nombre");
	let inputApellido = document.getElementById("input_apellido");
	let inputTelefono = document.getElementById("input_telefono");
	let inputDNI = document.getElementById("form_input_campoDNI");
	let inputLocalidad = document.getElementById("input_localidad");
	let inputCV = document.getElementById("form_input_campoCV");
	let input_comentarios = document.getElementById("form_input_comentarios");

	const telefono = "541127667680";
	const urlDesktop = "https://api.whatsapp.com/send?phone=" + telefono + "&text=";
	const urlMobile = "whatsapp://send?phone=" + telefono + "&text=";

	let mensaje1;
	let mensaje2;
	let mensaje3;
	let mensaje4;
	let mensaje5;
	let mensaje6;
	let mensajeCompleto;

	switch (valor_selector_motivo) {
		case 0: //solicitud de servicio
			mensaje1 = "Hola. Mi nombre es " + inputNombre.value + " " + inputApellido.value;
			mensaje2 = "%0AMe comunico con ustedes para solicitar el alta del servicio de NiceTV";
			mensaje3 =
				"%0ADe ser su agrado, quisiera que se contacten conmigo. Dejo a continuación mis datos de contacto:";
			mensaje4 =
				"%0ADNI: " +
				inputDNI.value +
				"%0ATelefono:" +
				inputTelefono.value +
				"%0ALocalidad:" +
				inputLocalidad.value +
				"%0AMuchas Gracias!";
			mensajeCompleto = mensaje1 + mensaje2 + mensaje3 + mensaje4;
			console.log(mensajeCompleto);
			break;
		case 1: //laburo
			mensaje1 = "Hola. Mi nombre es " + inputNombre.value + " " + inputApellido.value;
			mensaje2 =
				"%0AMe comunico con ustedes para consultar la disponibilidad de ofertas laborales de NiceTV";
			mensaje3 =
				"%0ADe ser su agrado, Quisiera que se contacten conmigo. Dejo a continuación mis datos de contacto:";
			mensaje4 =
				"%0ADNI: " +
				inputDNI.value +
				"%0ATelefono:" +
				inputTelefono.value +
				"%0ALocalidad:" +
				inputLocalidad.value;
			mensaje5 = "%0Alink de mi CV online: " + inputCV.value + "%0A";
			mensaje6 =
				"%0A%0AQuisiera dejar expresado algunos datos extras que podrían ser de importancia: %0A" +
				input_comentarios.value +
				"%0AMuchas Gracias!";
			mensajeCompleto = mensaje1 + mensaje2 + mensaje3 + mensaje4 + mensaje5 + mensaje6;
			break;
	}

	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	) {
		window.open(urlMobile + mensajeCompleto);
	} else {
		window.open(urlDesktop + mensajeCompleto, "_blank");
	}
}
