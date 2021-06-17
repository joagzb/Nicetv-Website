/*
cambiar la pestaña del modal "donde pagar"
 */
function changePaymentModalTab(tab, tab_deDonde) {
	let element = document.getElementById("tab_modal_dondePagar");
	document.getElementById(tab_deDonde).click();
	UIkit.switcher(element).show(tab);
}


/*
funcion que genera un mensaje de whatsapp para requerir el CODIGO DE REFERENCIA DE PAGO
 */
function mi_referencia_pago() {
	let inputNombre = document.getElementById("input_modalReferencia_nombre");
	let inputdni = document.getElementById("input_modalReferencia_dni");
	let inputemail = document.getElementById("input_modalReferencia_email");
	let inputtelefono = document.getElementById("input_modalReferencia_telefono");

	const telefono = "541127667680";
	const urlDesktop = "https://api.whatsapp.com/send?phone=" + telefono + "&text=";
	const urlMobile = "whatsapp://send?phone=" + telefono + "&text=";

	let mensaje1;
	let mensaje2;
	let mensaje3;
	let mensaje4;
	let mensajeCompleto;

	mensaje1 = "Hola. Mi nombre es " + inputNombre.value;
	mensaje2 = "%0AQuisiera solicitar mi código de referencia de pago";
	mensaje3 = "%0ADejo a continuación mis datos de contacto como titular del servicio:";
	mensaje4 =
		"%0ADNI: " +
		inputdni.value +
		"%0AEmail:" +
		inputemail.value +
		"%0ATelefono:" +
		inputtelefono.value +
		"%0AMuchas Gracias!";
	mensajeCompleto = mensaje1 + mensaje2 + mensaje3 + mensaje4;

	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	) {
		window.open(urlMobile + mensajeCompleto);
	} else {
		window.open(urlDesktop + mensajeCompleto);
	}
}

/*
abrir la ventana emergente MODAL para solicitar el codigo de referencia de pago
 */
async function closeModalDondePagar() {
	let modal = document.getElementById("modalPagos");
	UIkit.modal(modal).hide();
	await getCodigoReferenciaPago();
}

/*
abrir la ventana emergente MODAL para solicitar el codigo de referencia de pago
 */
async function getCodigoReferenciaPago() {
	let modal = document.getElementById("modalReferenciaPago");
	UIkit.modal(modal).show();
}
