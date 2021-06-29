const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
const contador=document.querySelector(".contador");
//,
const lista= ["Serenata a una Perrita","El vendedor de Alfombras","<br><br>Una Aguja en un pajar","El matrimonio Oson","El tigrito que se mordia las uñas","El buen tiempo y la lluvia","<br>Las patas de un elefante","El gato, el Zorro y el gallo","<br>El gatito glotón","El león y la ardillita",
"El egoista","Los dos Gatitos","Los dos cangrejos","La vaca y el perro","El oso valiente y miedoso","El lenguaje de un patito","Ya llega el invierno", "La liebre y la mariposa","El hormiguero y el ratón","El Dinosaurio",
"La gallina Enferma","Ratoncitos desobedientes","La ballenita Orgullosa","La Rana y el Buey","La paloma y la hormiguita","Los gatos y los ratones","La Leona","Doña Jirafa","<br> <br>La tortuga","El ciervo vanidoso","El pato Guason",
"Mini-Maus y MarraMiau","Galgos o Podencos"];
const listaMes=["Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero",
				"Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero",
				"Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero",
				"Febrero","Febrero"];
const ListaDia=[1,2,3,4,5,6,7,8,9,10,
				11,12,13,14,15,16,17,18,19,20,
				21,22,23,24,25,26,27,28,29,30,31,
				1,2];
const ListaImagenes=["Imagenes/Biblioteca/Inicial/serenata.jpg","Imagenes/Biblioteca/Inicial/cerdoVendedor.jpg","Imagenes/Biblioteca/Inicial/unaAgujaEnUnPajar.jpg","Imagenes/Biblioteca/Inicial/matrimonioOson.jpg","Imagenes/Biblioteca/Inicial/elTigrito.jpg",
"Imagenes/Biblioteca/Inicial/buenTiempoyLLuvia.jpg","Imagenes/Biblioteca/Inicial/patasElefante.jpg","Imagenes/Biblioteca/Inicial/elGato,gallina.jpg","Imagenes/Biblioteca/Inicial/gatitoGloton.jpg","Imagenes/Biblioteca/Inicial/leonyArdilla.jpg",
"Imagenes/Biblioteca/Inicial/elEgoista.jpg","Imagenes/Biblioteca/Inicial/dosGatitos.jpg","Imagenes/Biblioteca/Inicial/dosCangrejos.jpg","Imagenes/Biblioteca/Inicial/laVacayElPerro.jpg","Imagenes/Biblioteca/Inicial/osoValienteyno.jpg",
"Imagenes/Biblioteca/Inicial/lenguajePatito.jpg","Imagenes/Biblioteca/Inicial/llegaInvierno.jpg","Imagenes/Biblioteca/Inicial/liebreyMariposa.jpg","Imagenes/Biblioteca/Inicial/elHormigueroyElRaton.jpg","Imagenes/Biblioteca/Inicial/elDinosaurio.jpg",
"Imagenes/Biblioteca/Inicial/gallinaEnferma.jpg","Imagenes/Biblioteca/Inicial/ratoncitos.jpg","Imagenes/Biblioteca/Inicial/ballenita.jpg","Imagenes/Biblioteca/Inicial/ranayBuey.jpg","Imagenes/Biblioteca/Inicial/laPalomayHormiga.jpg",
"Imagenes/Biblioteca/Inicial/gatosyRatones.jpg","Imagenes/Biblioteca/Inicial/laLeona.jpg","Imagenes/Biblioteca/Inicial/doniaJirafa.jpg","Imagenes/Biblioteca/Inicial/laTortuga.jpg","Imagenes/Biblioteca/Inicial/ciervo.jpg",
"Imagenes/Biblioteca/Inicial/patoGuason.jpg","Imagenes/Biblioteca/Inicial/miniMaus.jpg","Imagenes/Biblioteca/Inicial/galgos.jpg"];
const listaDescarga=["https://drive.google.com/file/d/1EBhz_1wdQfYrpSPx1dQQNE-SrWyyf61A/view?usp=sharing","https://drive.google.com/file/d/13sUyEBlRvOBT2ZoDFUvF-dIw-SoKhmu3/view?usp=sharing","https://drive.google.com/file/d/1EEiEiMD8801RJu97vdIJuloUckoY6xJ5/view?usp=sharing","https://drive.google.com/file/d/1JGDSEL9JP9xf2S4WP9OJKJa6C6uleyqy/view?usp=sharing","https://drive.google.com/file/d/1KRBM0MgbgQJxys0RVSLrNd0N2ffongCj/view?usp=sharing",
"https://drive.google.com/file/d/1mycnx4h94vm30m0lXEW3sICi4zFDNk8i/view?usp=sharing","https://drive.google.com/file/d/1AsiRZ7frZrSrBCU092N8y2PkLjyXrrVJ/view?usp=sharing","https://drive.google.com/file/d/1vEWsLf0u4F0o-FV1Pvcqw3WcQtg5V6Q2/view?usp=sharing","https://drive.google.com/file/d/1EHE0TxPoAYxbwz_k3dRE-cyBLi9P3cfz/view?usp=sharing","https://drive.google.com/file/d/1V-4G5gDgStBf6vHYASFPosxb12kiE1gq/view?usp=sharing",
"https://drive.google.com/file/d/1IIaTX7f_3Xc-bR4BeXVXgOdBmYLal0RK/view?usp=sharing","https://drive.google.com/file/d/1ZC_QDlzabMXqLUOWlN-tB_bLrZGd9cKV/view?usp=sharing","https://drive.google.com/file/d/1-sfSVOCTonzHbd6DpDw3z0TIBtjQ6i20/view?usp=sharing","https://drive.google.com/file/d/1Wltj84lXyjHkeLVRe9W_vS1IcicSmUp1/view?usp=sharing","https://drive.google.com/file/d/1TwI6TnYCOc1c8b4iLMj7h9Zsef_OwXVW/view?usp=sharing",
"https://drive.google.com/file/d/12iFr27EsjWJ9hwqeN-Ks0sPKAQUdV7aa/view?usp=sharing","https://drive.google.com/file/d/1PL08QIAMjtLvEQ28t6n4FynuMmx_QDYu/view?usp=sharing","https://drive.google.com/file/d/1nLI02I8Z8cvFUDn0NA4BWMqiZsaYcTp1/view?usp=sharing","https://drive.google.com/file/d/1jOdGjpJbc5CS_pyPI1d7CRGTGvqEYoa6/view?usp=sharing","https://drive.google.com/file/d/16sLCS_vS24kgrG5YbsDTH-uYofgZaSNA/view?usp=sharing",
"https://drive.google.com/file/d/1RYIRqufw9RaiVvN51EdVgJ090T6QASB2/view?usp=sharing","https://drive.google.com/file/d/1gNuEbruErL_QB7-QHdNioKdjI6R2Tacm/view?usp=sharing","https://drive.google.com/file/d/15tdX3MleEobOJMlnWbG3G3HIvCGzeCJo/view?usp=sharing","https://drive.google.com/file/d/1tjnk6sqETOYO_buJPInFLw9IaH5G8fHM/view?usp=sharing","https://drive.google.com/file/d/1QTX5IFWCQk5MKuqouqAU1JNwlplxZ94b/view?usp=sharing",
"https://drive.google.com/file/d/180oP3VsAuTyXH8EHgqaIPUJ8Dr_dkhi-/view?usp=sharing","https://drive.google.com/file/d/1CKb-azkXaWo3N9T5sc-kG9DIZdmki-fJ/view?usp=sharing","https://drive.google.com/file/d/1oFP9upUHmrmbasXL7NM6wk0gQxrrD-4o/view?usp=sharing","https://drive.google.com/file/d/1kIc45Ectg-j2ou4HGLx8NywTYzki0k4J/view?usp=sharing","https://drive.google.com/file/d/1RAArs2pAub1ZCLnv6NnfYMIdg8nsFtkJ/view?usp=sharing",
"https://drive.google.com/file/d/1G5qUYtplkMEMABTqgerGTHm3t8GqLyC1/view?usp=sharing","https://drive.google.com/file/d/1MVpVR1EUe6CJGoGWgpaf4fUKvOxoYRAm/view?usp=sharing","https://drive.google.com/file/d/1tjzRqC0LHMxrUXFjxa7akQYlysaVBmwd/view?usp=sharing"];

function crearLibro(nombre, mes, dia, imagen,desc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	mes= `<h3>Fabula 365- Día: <p>${mes} ${dia}</p> </h3>`;
	dia= dia;
	imagen= `<img class='libros_img' src="${imagen}" >`;
	desc= `<a> href="${desc}" </a>`;
	return [imagen,nombre,mes,dia];
}
class libro{	
	constructor(nombre, mes, dia, imagen,desc){
		this.nombre=nombre;
		this.mes=mes;
		this.dia=dia;
		this.imagen=imagen;
		this.desc=desc;
	}
}
const changeHidden=(descarga)=>{
	document.querySelector(".descargarlib").href= `${descarga}`;
};

let documentFragmentG = document.createDocumentFragment();
let documentFragmentBI = document.createDocumentFragment();
let documentFragmentBE= document.createDocumentFragment();
let documentFragmentBS = document.createDocumentFragment();
let documentFragmentBACH = document.createDocumentFragment();

let ctBI=0;
let ctBM=0;
let ctBS=0;
let ctBGU=0;
let ctGeneral=0;

for (var i = 0; i <lista.length; i++) {
	let nombre= lista[i];
	let mes= listaMes[i];
	let dia= ListaDia[i];
	let imagen= ListaImagenes[i];
	let descarga= listaDescarga[i];
	let libro= crearLibro(nombre,mes,dia,imagen,descarga);
	if (listaMes[i]=="Enero") {
		let divBI= document.createElement("DIVBI");
		let vacio= document.createElement("DIVBI");
		divBI.addEventListener("click",()=>(changeHidden(descarga)))
		divBI.tabIndex = i;
		divBI.classList.add(`item-${i}`,'flex-item');
		divBI.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBI.appendChild(divBI);
		ctBI ++

		
	}if((listaMes[i]=="Febrero")){
		let divBE= document.createElement("DIVBE");			
		divBE.addEventListener("click",()=>(changeHidden(descarga)))
		divBE.tabIndex = i;
		divBE.classList.add(`item-${i}`,'flex-item');
		divBE.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBE.appendChild(divBE);
		ctBM ++

	}
	if((listaMes[i]=="Marzo")){
		let divBS= document.createElement("DIVBS");
		divBS.addEventListener("click",()=>(changeHidden(descarga)))
		divBS.tabIndex = i;
		divBS.classList.add(`item-${i}`,'flex-item');
		divBS.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBS.appendChild(divBS);
		ctBS ++

	}
	if (listaMes[i]=="Abril") {
		let divBach= document.createElement("DIVBach");
		divBach.addEventListener("click",()=>(changeHidden(descarga)))
		divBach.tabIndex = i;
		divBach.classList.add(`item-${i}`,'flex-item');
		divBach.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBACH.appendChild(divBach);
		ctBGU ++
	}
	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(descarga)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML= libro[0]+ libro[1]+libro[2];
	documentFragmentG.appendChild(div);
	ctGeneral++;
	
};
basInf.appendChild(documentFragmentBI);
contenedor.appendChild(documentFragmentG);
contenedorBE.appendChild(documentFragmentBE);
contenedorBS.appendChild(documentFragmentBS);
contenedorBGU.appendChild(documentFragmentBACH);
contador.innerHTML='<p><b>Total de libros: </b></p>' + ctGeneral;

let botonDescarga= document.querySelector('descargarlib');


const basicaInferior= document.querySelector(".flex-itemBI");
const botonBI= document.querySelector(".basicaInferior");
const botonBE= document.querySelector(".basicaElemental");
const botonBS= document.querySelector(".basicaSuperior");
const botonBGU= document.querySelector(".bachillerato");
const botonSF=document.querySelector(".vaciar");

botonBI.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:flex';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBI;
	
})
botonBE.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:flex';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBM;
})
botonBS.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:flex';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBS;
})
botonBGU.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:flex';
	contenedorBE.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBGU;
})
botonSF.addEventListener("click",(e)=>{
	contenedor.style='display:flex' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:none';
	contador.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b>Total de libros: </b></p>' + ctGeneral;

})


$(document).ready(function(){
	let altura= $('.botonDes').offset().top;	
	/*
	$(window).scroll(function(){
		if ($(window).scrollTop() < altura){
			$('.nav').addClass('menu-fixed');
			$('.opcion').addClass('menu-li');
		} else{
			$('.nav').removeClass('menu-fixed');
			$('.opcion').removeClass('menu-li');

		}
	})*/
	
	
})