const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
const contador=document.querySelector(".contador");
//,
const lista= ["Ajedrez logico","Ajedrez HiperModerno 1","Ajedrez HiperModerno 2","Los secretos de la estrategia moderna en Ajedrez","Fundamentos de Ajedrez","Los 100 finales que hay que saber","222 celadas en las aperturas","Las mil y una lecciones de ajedrez","Ajedrez de los grandes maestros jugada a jugada","La pasión del Ajedrez",
"101miniaturasBrillantes.png","El ajedrez de torneo","Princesa Del Ajedrez","Fundamentos estrategicos de Ajedrez","24 lecciones de Ajedrez","Entender las Aperturas.jpg","Mi sistema Ninsowitch","Descubrir las aperturas"];
const listaAutores=["Irving Chernev ", "R. Aguilera y R.J. Perez","R. Aguilera y Francisco Jose Perez","John Wattson","Enrique P. Falcon","Jesus de la villa","Karsten Muller","Mi angel Martin","John Nunn","Gary Casparov",
"John Nunn","D.Bronstein","Judit Polgar","Y.B. Estrin","Garri Kasparov","Sam Collins","AAron Ninsowitch","john emms"];
const listaGenero=["Informativa","Informativa","Informativa","Informativa","Informativa","Informativa","Informativa","Informativa","Informativa","Informativa",
"Informativa","Informativa","Literario","Informativa","Informativa","Informativa","Informativa","Informativa"];
const ListaEdad1=[12,12,12,12,12,12,12,12,12,12,
				  12,12,12,12,12,12,12,12];
const ListaEdad2=[17,17,17,17,17,17,17,17,17,17,
				  17,17,17,17,17,17,17,17];
const ListaImagenes=["Imagenes/Biblioteca/Ajedrez/AjedrezLogico.jpg","Imagenes/Biblioteca/Ajedrez/AjedrezModerno.JPG","Imagenes/Biblioteca/Ajedrez/AjedrezHipermoderno2.jpg","Imagenes/Biblioteca/Ajedrez/secretosAjedrez.jpg","Imagenes/Biblioteca/Ajedrez/fundamentosAjedrez.jpg","Imagenes/Biblioteca/Ajedrez/los100Finales.jpg","Imagenes/Biblioteca/Ajedrez/222.jpg","Imagenes/Biblioteca/Ajedrez/lasMilYunaAventura.jpg","Imagenes/Biblioteca/Ajedrez/ajedrezdelosgrandesmaestros.jpg",
"Imagenes/Biblioteca/Ajedrez/laPasionDelAjedrez.jpg","Imagenes/Biblioteca/Ajedrez/101miniaturasBrillantes.png","Imagenes/Biblioteca/Ajedrez/elAjedrezdeTorneo.png","Imagenes/Biblioteca/Ajedrez/princesaDelAjedrez.jpg","Imagenes/Biblioteca/Ajedrez/estrategias.png","Imagenes/Biblioteca/Ajedrez/24Lecciones.jpg","Imagenes/Biblioteca/Ajedrez/entenderAperturas.jpg","Imagenes/Biblioteca/Ajedrez/miSistema.jpg","Imagenes/Biblioteca/Ajedrez/descubrirLasAperturas.jpg"];
const listaDescarga=["https://drive.google.com/file/d/1t3UU5zTuLLfV0M2CN1X2pAytOp2X_JlM/view?usp=sharing","https://drive.google.com/file/d/1-5QSmVKxi3m6IkITXcWcBDwERPPq118U/view?usp=sharing","https://drive.google.com/file/d/1BSMsAr8Gqi70beNQz-l0ZVInsP8tXXss/view?usp=sharing","https://drive.google.com/file/d/1jU1pNbw01JEWeLqoyAaR0l8S0Yw5b12U/view?usp=sharing","https://drive.google.com/file/d/1vNnv9PPR88r5tPZ5KsQUbmVNUwpbi-OU/view?usp=sharing",
"https://drive.google.com/file/d/1DqunFiNzyreUijgqEGqtDr7xYLLhph3C/view?usp=sharing","https://drive.google.com/file/d/1DLhTV-pFG_wqoyvJPk9IWo5WDqAcjXNB/view?usp=sharing","https://drive.google.com/file/d/1ikCmIAF9MBuj3YeLbhyzuC_V809oi2XP/view?usp=sharing","https://drive.google.com/file/d/14s14728cbMv4GtEQWqKnO3kqR8H6RICF/view?usp=sharing","https://drive.google.com/file/d/1RhzacCxSAUJ2SmNthmp0IzdAfgoWonvB/view?usp=sharing",
"https://drive.google.com/file/d/17sLbQJw1t8uI3uRFnLhqM8FdCjmkIwF0/view?usp=sharing","https://drive.google.com/file/d/1XxDxxaNBQvIf3bm2VSNTxnKwK78f8wwP/view?usp=sharing","https://drive.google.com/file/d/1CYHMeiU6t9M72noX-lfccmBt1dGwManl/view?usp=sharing","https://drive.google.com/file/d/1x8Hk2mWawR72GLGgAyldGCEQKp2Ql102/view?usp=sharing","https://drive.google.com/file/d/15SuXEKfrEO7UOXPEanubY5mvGilu1rv5/view?usp=sharing",
"https://drive.google.com/file/d/16U4TWE27SobZc2I-pE3uu-08BtGT3_65/view?usp=sharing","https://drive.google.com/file/d/1CtIZCw2lMB5idvqjaCmHKS4pHtiqMGLa/view?usp=sharing","https://drive.google.com/file/d/1enor8Jac_fqpNG5EHSkOggL4BDVQVPht/view?usp=sharing"];


function crearLibro(nombre, autor,genero, edad1, edad2, imagen,desc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	autor= `<h3>Autor(a):<p>${autor}</p></h3>`;
	genero= `<h4> ${genero}</h4>`;
	edad1= edad1;
	edad2= edad2;
	imagen= `<img class='libros_img' src="${imagen}" >`;
	desc= desc;

	return [imagen,nombre,autor,genero,edad1,edad2,desc];
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
	if (edad1>=6 && edad1<=8) {
		let divBI= document.createElement("DIVBI");
		let vacio= document.createElement("DIVBI");
		divBI.addEventListener("click",()=>(changeHidden(descarga)))
		divBI.tabIndex = i;
		divBI.classList.add(`item-${i}`,'flex-item');
		divBI.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[6]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBI.appendChild(divBI);
		ctBI ++

		
	}if((edad2>=9 && edad2<=11) || (edad1>=9 && edad1<=11)){
		let divBE= document.createElement("DIVBE");			
		divBE.addEventListener("click",()=>(changeHidden(descarga)))
		divBE.tabIndex = i;
		divBE.classList.add(`item-${i}`,'flex-item');
		divBE.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[6]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBE.appendChild(divBE);
		ctBM ++

	}
	if((edad1>=12 && edad1<=14) || (edad2>=12 && edad2<=14)){
		let divBS= document.createElement("DIVBS");
		divBS.addEventListener("click",()=>(changeHidden(descarga)))
		divBS.tabIndex = i;
		divBS.classList.add(`item-${i}`,'flex-item');
		divBS.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[6]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBS.appendChild(divBS);
		ctBS ++

	}
	if (edad2>14) {
		let divBach= document.createElement("DIVBach");
		divBach.addEventListener("click",()=>(changeHidden(descarga)))
		divBach.tabIndex = i;
		divBach.classList.add(`item-${i}`,'flex-item');
		divBach.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[6]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBACH.appendChild(divBach);
		ctBGU ++
	}

	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(descarga)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[6]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
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

