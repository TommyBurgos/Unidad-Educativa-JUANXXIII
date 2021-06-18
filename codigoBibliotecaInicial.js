const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
const contador=document.querySelector(".contador");
//,
const lista= ["Serenata a una Perrita","El vendedor de Alfombras","<br><br>Una Aguja en un pajar","El matrimonio Oson","El tigrito que se mordia las uñas","El buen tiempo y la lluvia","<br>Las patas de un elefante","El gato, el Zorro y el gallo","<br>El gatito glotón"];
const listaAutores=[1,2,3,4,5,6,7,8,9];
const listaGenero=["Fabulas","Fabulas","Fabulas","Fabulas","Fabulas","Fabulas","Fabulas","Fabulas","Fabulas"];
const ListaEdad1=[4,4,4,4,4,4,4,4,4];
const ListaEdad2=[8,8,8,8,8,8,8,8,8];
const ListaImagenes=["Imagenes/Biblioteca/Inicial/serenata.jpg","Imagenes/Biblioteca/Inicial/cerdoVendedor.jpg","Imagenes/Biblioteca/Inicial/unaAgujaEnUnPajar.jpg","Imagenes/Biblioteca/Inicial/matrimonioOson.jpg","Imagenes/Biblioteca/Inicial/elTigrito.jpg",
"Imagenes/Biblioteca/Inicial/buenTiempoyLLuvia.jpg","Imagenes/Biblioteca/Inicial/patasElefante.jpg","Imagenes/Biblioteca/Inicial/elGato,gallina.jpg","Imagenes/Biblioteca/Inicial/gatitoGloton.jpg"];
const listaDescarga=["https://drive.google.com/file/d/1EBhz_1wdQfYrpSPx1dQQNE-SrWyyf61A/view?usp=sharing","https://drive.google.com/file/d/13sUyEBlRvOBT2ZoDFUvF-dIw-SoKhmu3/view?usp=sharing","Imagenes/Biblioteca/Inicial/","https://drive.google.com/file/d/1JGDSEL9JP9xf2S4WP9OJKJa6C6uleyqy/view?usp=sharing","https://drive.google.com/file/d/1KRBM0MgbgQJxys0RVSLrNd0N2ffongCj/view?usp=sharing",
"https://drive.google.com/file/d/1mycnx4h94vm30m0lXEW3sICi4zFDNk8i/view?usp=sharing","https://drive.google.com/file/d/1AsiRZ7frZrSrBCU092N8y2PkLjyXrrVJ/view?usp=sharing","https://drive.google.com/file/d/1vEWsLf0u4F0o-FV1Pvcqw3WcQtg5V6Q2/view?usp=sharing","https://drive.google.com/file/d/1EHE0TxPoAYxbwz_k3dRE-cyBLi9P3cfz/view?usp=sharing"];

function crearLibro(nombre, autor,genero, edad1, edad2, imagen,desc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	autor= `<h3>Fabula 365- Día:<p>${autor}</p></h3>`;
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
	let autor= listaAutores[i];
	let genero= listaGenero[i];
	let edad1= ListaEdad1[i];
	let edad2= ListaEdad2[i];
	let imagen= ListaImagenes[i];
	let descarga= listaDescarga[i];
	let libro= crearLibro(nombre,autor,genero,edad1,edad2,imagen,descarga);
	if (edad1>=4 && edad1<=6) {
		let divBI= document.createElement("DIVBI");
		let vacio= document.createElement("DIVBI");
		divBI.addEventListener("click",()=>(changeHidden(descarga)))
		divBI.tabIndex = i;
		divBI.classList.add(`item-${i}`,'flex-item');
		divBI.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBI.appendChild(divBI);
		ctBI ++

		
	}if((edad2>=6 && edad2<=8) || (edad1>=6 && edad1<=8)){
		let divBE= document.createElement("DIVBE");			
		divBE.addEventListener("click",()=>(changeHidden(descarga)))
		divBE.tabIndex = i;
		divBE.classList.add(`item-${i}`,'flex-item');
		divBE.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBE.appendChild(divBE);
		ctBM ++

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
/*


*/