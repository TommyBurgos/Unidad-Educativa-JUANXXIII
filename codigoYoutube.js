const contenedor= document.querySelector(".flex-container");
//s
const lista= ["Prekinder","kinder","Primero","Segundo","Tercero","Cuarto","Quinto","Sexto","Septimo","Octavo","Noveno","Decimo","1ro de Bachillerato","2do de Bachillerato","3ro de Bachillerato"];
const listaGenero=[""];
const ListaEdad1=[];
const ListaEdad2=[];
const ListaImagenes=["portadaPrekinder.png","portadakinder.png","portadaPrimero.png","portadaSegundo.png","portadaTercero.png","portadaCuarto.png","portadaQuinto.png","portadaSexto.png","portadaSeptimo.png"];
const listaDescarga=[""];
function crearLibro(nombre ,genero, edad1, edad2, imagen,desc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	genero= `<h4> ${genero}</h4>`;
	edad1= edad1;
	edad2= edad2;
	imagen= `<img class='canal_img' src="${imagen}" >`;
	desc= `<a> href="${desc}" </a>`;

	return [imagen,nombre,genero];
}
const changeHidden=(descarga)=>{
	document.querySelector(".descargarlib").href= `${descarga}`;
}
let documentFragment = document.createDocumentFragment();
for (var i = 0; i <lista.length; i++) {
	let nombre= lista[i];
	let genero= listaGenero[i];
	let edad1= ListaEdad1[i];
	let edad2= ListaEdad2[i];
	let imagen= ListaImagenes[i];
	let descarga= listaDescarga[i];
	let libro= crearLibro(nombre,genero,edad1,edad2,imagen,descarga);
	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(descarga)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML= libro[0]+ libro[1];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

