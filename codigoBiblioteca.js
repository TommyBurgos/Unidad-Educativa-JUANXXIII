const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
//,
const lista= ["El Terror De SextoB","Amigo se escribe con H","Yo nunca digo adios","La vida es un sueño","De la tierra a la luna","Huasipungo","Torre de Papel 'R Y M' investigadores","Pasion por la verdad","El puente de la soledad","El Fantasma de Canterville",
"Quien se ha llevado mi Queso","La isla misteriosa","Los miserables"]
const listaAutores=["Yolanda reyes","Maria Fernanda Heredia","Maria Fernanda Heredia","Pedro calderon de la barca","Julio Verne","Jorge Icaza","Ramon Diaz","Miguel Angel Carlceles","Maria Fernanda Heredia","Oscar Welde",
"Spencer Johnson","Julio Verne","Victor Hugo"];
const listaGenero=["Cuento","Cuento","Cuento","Literario","Literario","Literario","Cuento","Literario","Literario","Literario",
"Literario","Literario","Literario"];
const ListaEdad1=[8,8,8,10,10,8,8,14,12,13,
14,12,14];
const ListaEdad2=[10,10,10,11,12,10,10,17,14,14,
17,15,17];
const ListaImagenes=["el_Terror_De_SextoB.jpg","amigo-se-escribe.png","yo_nunca_digo_adios.jpg","la-vida-es-un-sueno.jpg","De_la_tierra_a_la_luna.jpg","huasipungo.jpg","torreDePapel.jpg","pasionPorLaVerdad.jpg","elPuenteDeLaSoledad.jpg","Fantasma-de-Canterville.jpg",
"quien-se-ha-llevado-mi-queso.jpg","la_isla-misteriosa.jpg","los-miserables.jpg"];
const listaDescarga=["https://drive.google.com/file/d/18C0lIzTPLO1apstdxbkXBkkTJ5qXLc1t/view?usp=sharing","https://drive.google.com/file/d/1QO9DsgJHB3oapFvhOyUlokv5Cc05yHAj/view?usp=sharing","https://drive.google.com/file/d/1RDXGoKjkaNUnVOJyjLpVsaYCFZQ8Dhab/view?usp=sharing",
"https://drive.google.com/file/d/13y2na_Uwgwqy5mtx1VEQq5xl70M0G2j8/view?usp=sharing","https://drive.google.com/file/d/14bVXGxOYcbuX9DhXSQLi5yOpkaTIAYev/view?usp=sharing","https://drive.google.com/file/d/1_pmvbcsNnYP6NBvmPMJUTPiF1CdmYLk_/view?usp=sharing",
"https://drive.google.com/file/d/1ame7N1uw1IRabpr8cYfLk9v9Hf79vRS9/view?usp=sharing","https://drive.google.com/file/d/1nsMnni0gBb0u3IiLMKgLc3M73ISiueu9/view?usp=sharing","https://drive.google.com/file/d/19tRoqkEdXYyEzldIQr_3lC8XnJoNbWNO/view?usp=sharing",
"https://drive.google.com/file/d/1wpmeuJdjQRIhDHzdK40M6bZbyhCairML/view?usp=sharing","https://drive.google.com/file/d/1uyO2pHUSfK7i3j7unR-xP_JgXfgU8QWP/view?usp=sharing","https://drive.google.com/file/d/1R4MocFXDulBHB9BGGw-eQB1Xfo_Sq569/view?usp=sharing","https://drive.google.com/file/d/1ygl-VZnXwqEjOBsrHbx2ohyB_Ax_kRiG/view?usp=sharing"];
function crearLibro(nombre, autor,genero, edad1, edad2, imagen,desc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	autor= `<h3>Autor(a):<p>${autor}</p></h3>`;
	genero= `<h4> ${genero}</h4>`;
	edad1= edad1;
	edad2= edad2;
	imagen= `<img class='libros_img' src="${imagen}" >`;
	desc= `<a> href="${desc}" </a>`;

	return [imagen,nombre,autor,genero,edad1,edad2];
}
class libro{
	constructor(nombre, autor,genero, edad1, edad2, imagen,desc){
		this.nombre=nombre;
		this.autor=autor;
		this.genero=genero;
		this.edad1=edad1;
		this.edad2=edad2;
		this.imagen=imagen;
		this.desc=desc;
	}
}
const changeHidden=(descarga)=>{
	document.querySelector(".descargarlib").href= `${descarga}`;
}
let documentFragmentG = document.createDocumentFragment();
let documentFragmentBI = document.createDocumentFragment();
let documentFragmentBE= document.createDocumentFragment();
let documentFragmentBS = document.createDocumentFragment();
let documentFragmentBACH = document.createDocumentFragment();

for (var i = 0; i <lista.length; i++) {
	let nombre= lista[i];
	let autor= listaAutores[i];
	let genero= listaGenero[i];
	let edad1= ListaEdad1[i];
	let edad2= ListaEdad2[i];
	let imagen= ListaImagenes[i];
	let descarga= listaDescarga[i];
	let libro= crearLibro(nombre,autor,genero,edad1,edad2,imagen,descarga);
	if (edad1>=8 && edad2<=10) {
		let divBI= document.createElement("DIVBI");
		divBI.addEventListener("click",()=>(changeHidden(descarga)))
		divBI.tabIndex = i;
		divBI.classList.add(`item-${i}`,'flex-item');
		divBI.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBI.appendChild(divBI);
		
	}else if(edad1>=10 && edad2<=12){
		let divBE= document.createElement("DIVBE");
		
		divBE.addEventListener("click",()=>(changeHidden(descarga)))
		divBE.tabIndex = i;
		divBE.classList.add(`item-${i}`,'flex-item');
		divBE.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBE.appendChild(divBE);
	}
	else if(edad1>=12 &&  edad2<=14){
		let divBS= document.createElement("DIVBS");
		divBS.addEventListener("click",()=>(changeHidden(descarga)))
		divBS.tabIndex = i;
		divBS.classList.add(`item-${i}`,'flex-item');
		divBS.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBS.appendChild(divBS);
	}
	else if(edad1>=14 && edad2<=17){
		let divBach= document.createElement("DIVBach");
		divBach.addEventListener("click",()=>(changeHidden(descarga)))
		divBach.tabIndex = i;
		divBach.classList.add(`item-${i}`,'flex-item');
		divBach.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBACH.appendChild(divBach);
	};

	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(descarga)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML= libro[0]+ libro[1]+libro[2];
	documentFragmentG.appendChild(div);
	
};
basInf.appendChild(documentFragmentBI);
contenedor.appendChild(documentFragmentG);
contenedorBE.appendChild(documentFragmentBE);
contenedorBS.appendChild(documentFragmentBS);
contenedorBGU.appendChild(documentFragmentBACH);



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
	
})
botonBE.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:flex';
})
botonBS.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:flex';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:none';
})
botonBGU.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:flex';
	contenedorBE.style='display:none';
})
botonSF.addEventListener("click",(e)=>{
	contenedor.style='display:flex' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:none';
})

