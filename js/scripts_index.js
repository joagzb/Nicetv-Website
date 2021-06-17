/*
simplemente agradecimientos a terceros por el uso gratuito de contenido digital
 */
window.onload = function () {
	console.log(
		"Iconos diseñados por https://www.flaticon.es/autores/dinosoftlabs DinosoftLabs from https: //www.flaticon.es"
	);
	console.log("Developed by: Joaquin Mariano Gonzalez Budiño - www.joaquin-gzb.website");
	console.log("Designs by: Cristian Fernando Díaz");
	console.log("Copyright: Amacom Media S.R.L - NiceTV");

};

/*
gestiona el cambio de vista de la seccion beneficios en base a la pestana seleccionada
 */
function changeBenefitsTab() {
	document.getElementById("tab_beneficios_acerca").setAttribute("class", "uk-active");
	document.getElementById("tab_beneficios_comofunciona").classList.toggle("uk-active", false);
	document.getElementById("tab_beneficios_beneficio").classList.toggle("uk-active", false);

	let switcher_beneficios = document.getElementById("contenido-seccion-beneficios");
	UIkit.switcher(switcher_beneficios).show(2);
}

/*
determinar si la pagina web se ha abierto desde el movil o desde un PC de escritorio
 */
function isMobile() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
        return true;
    } else {
        return false;
    }
}
