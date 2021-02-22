const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
const contador=document.querySelector(".contador");
//,
const lista= ["El Terror De SextoB","Amigo se escribe con H","Yo nunca digo adios","La vida es un sueño","De la tierra a la luna","Huasipungo","Torre de Papel 'R Y M' investigadores","Pasion por la verdad","El puente de la soledad","El Fantasma de Canterville",
"Quien se ha llevado mi Queso","La isla misteriosa","Los miserables","La lluvia sabe Por qué","La isla del Tio Robinson","Matilda","El faro del fin del mundo","La esfinge de los hielos","Un capitan de 15 años","Las Cronicas de Narnia: El león, la bruja y el ropero",
"Las Cronicas de Narnia: El Principe Caspian","Cinco Semanas en Globo","La vuelta al mundo en 80 días","Caperucita Roja","Los musicos de Bremen","Las Aventuras de Pinocho","El soldadito de Plomo","El lobo y las 7 Cabritas","El cuento de la Tortuga","Pulgarcito",
"La Sirenita"];
const listaAutores=["Yolanda reyes","Maria Fernanda Heredia","Maria Fernanda Heredia","Pedro calderon de la barca","Julio Verne","Jorge Icaza","Ramon Diaz","Miguel Angel Carlceles","Maria Fernanda Heredia","Oscar Welde",
"Spencer Johnson","Julio Verne","Victor Hugo","Maria Fernanda Heredia","Julio Verne","Roald Dahl","Julio Verne","Julio Verne","Julio Verne","C.S.Lewis",
"C.S.Lewis","Julio Verne","Julio Verne","Charles Perrault","Jacob Grimm y Wilhelm Grimm","Carlo Collodi","Hans Christian Andersen", "Hermanos Grimm","libre","Charles Perrault",
"Hans Christian Andersen"];
const listaGenero=["Cuento","Cuento","Cuento","Literario","Literario","Literario","Cuento","Literario","Literario","Literario",
"Literario","Literario","Literario","Literario","Literario","Literario","Ficcion Aventura","Ficcion Aventura", "Ficcion Aventura","Ficcion Aventura",
"Ficcion Aventura","Ficcion Aventura","Ficcion Aventura","Literatura Infantil","Literatura Infantil","Literatura Infantil", "Literatura Infantil","Literatura Infantil","Cuento","Literatura Infantil",
"Literatura Infantil"];
const ListaEdad1=[10,10,10,12,10,11,10,15,12,12,
				  14,13,14,13,12,10,13,12,12,12,
				  12,10,10,6,6,6,6,6,6,6,6];
const ListaEdad2=[12,12,12,14,12,13,12,17,14,14,
				  17,17,17,17,14,14,16,14,14,17,
				  17,13,13,8,8,9,8,8,8,8,8];
const ListaImagenes=["el_Terror_De_SextoB.jpg","amigo-se-escribe.png","yo_nunca_digo_adios.jpg","la-vida-es-un-sueno.jpg","De_la_tierra_a_la_luna.jpg","huasipungo.jpg","torreDePapel.jpg","pasionPorLaVerdad.jpg","elPuenteDeLaSoledad.jpg","Fantasma-de-Canterville.jpg",
"quien-se-ha-llevado-mi-queso.jpg","la_isla-misteriosa.jpg","los-miserables.jpg","la-lluvia-sabe-porque.jpg","la-isla-del-tio-Robinson.jpeg","matilda.png","el-faro-del-fin-del-mundo.jpg","la-esfinge-hielo.png","un-capitan-de-15.años.png","narnia-El-león-la-bruja-y-el-ropero.png",
"Narnia-el-principe-caspian.png","cincoSemanasEnGlobo.jpg","laVueltaAlMundoEn80Dias.jpg","CaperucitaRoja.jpg","losMusicosDeBremen.jpg","lasAventurasDePinocho.png","ElSoldaditoDePlomo.png","ElLoboyLosSieteCabritos.png","elCuentoDeLaTortuga.png","pulgarcito.png","laSirenita.jpg"];
const listaDescarga=["https://drive.google.com/file/d/18C0lIzTPLO1apstdxbkXBkkTJ5qXLc1t/view?usp=sharing","https://drive.google.com/file/d/1QO9DsgJHB3oapFvhOyUlokv5Cc05yHAj/view?usp=sharing","https://drive.google.com/file/d/1RDXGoKjkaNUnVOJyjLpVsaYCFZQ8Dhab/view?usp=sharing","https://drive.google.com/file/d/13y2na_Uwgwqy5mtx1VEQq5xl70M0G2j8/view?usp=sharing","https://drive.google.com/file/d/14bVXGxOYcbuX9DhXSQLi5yOpkaTIAYev/view?usp=sharing",
"https://drive.google.com/file/d/1_pmvbcsNnYP6NBvmPMJUTPiF1CdmYLk_/view?usp=sharing","https://drive.google.com/file/d/1ame7N1uw1IRabpr8cYfLk9v9Hf79vRS9/view?usp=sharing","https://drive.google.com/file/d/1nsMnni0gBb0u3IiLMKgLc3M73ISiueu9/view?usp=sharing","https://drive.google.com/file/d/19tRoqkEdXYyEzldIQr_3lC8XnJoNbWNO/view?usp=sharing","https://drive.google.com/file/d/1wpmeuJdjQRIhDHzdK40M6bZbyhCairML/view?usp=sharing",
"https://drive.google.com/file/d/1uyO2pHUSfK7i3j7unR-xP_JgXfgU8QWP/view?usp=sharing","https://drive.google.com/file/d/1R4MocFXDulBHB9BGGw-eQB1Xfo_Sq569/view?usp=sharing","https://drive.google.com/file/d/1ygl-VZnXwqEjOBsrHbx2ohyB_Ax_kRiG/view?usp=sharing","https://drive.google.com/file/d/1UiJ-LfKZsTrruVzspM51K9QfQCcUnBlz/view?usp=sharing","https://drive.google.com/file/d/1w-G6TTXsPiy5R-3RbYDcC9iRpiEwMNSW/view?usp=sharing",
"https://drive.google.com/file/d/1N8Nct0fV6KePUIZTMw1pWHJ196QT4U_J/view?usp=sharing","https://drive.google.com/file/d/18X2gv8QfCXj-vjgU6Y0XRY4QOkuRHR5f/view?usp=sharing","https://drive.google.com/file/d/1T-im8rWnAhamHc6abVdO4-tdifv6LlE6/view?usp=sharing","https://drive.google.com/file/d/1jckJxCe12gBlfhn2JkGnXf2oBCtF-3Sa/view?usp=sharing","https://drive.google.com/file/d/1ZVC0INhxxbHpGLJXVXmQ4TE8K2TK2Uwd/view?usp=sharing",
"https://drive.google.com/file/d/1Vcgv4xGxueIOTP-CiGbKM_l_qH0oHbn-/view?usp=sharing","https://drive.google.com/file/d/1O_QkrHedJeAsvxbZ_PYp2tzH8YwyfpPO/view?usp=sharing","https://drive.google.com/file/d/1cJEv6GHlC-cVk3pV83lKMUo0YYq7e6YK/view?usp=sharing","https://drive.google.com/file/d/1gg75GWdV53YgKh6S6piQ_mBSmI6tQfKH/view?usp=sharing","https://drive.google.com/file/d/1Fon96hakFP-HhVddAIqoq40zoiIii3AP/view?usp=sharing",
"https://drive.google.com/file/d/1CSEeRRlhFsr9JDk1wNjSA6fFmnTYUvxk/view?usp=sharing","https://drive.google.com/file/d/1EqmpeEaOQAy3jSSDDwxNAo3EDtmJfhEA/view?usp=sharing","https://drive.google.com/file/d/1vETNVbI0wPBjyg6nAWtiJDqY3L4jhNit/view?usp=sharing","https://drive.google.com/file/d/1ySvTtbdWn3yKUFyvd5TGAD6XB87RXLmX/view?usp=sharing","https://drive.google.com/file/d/19hyorVF61A-bvxPiS0UGplJ5f4W093CC/view?usp=sharing",
"https://drive.google.com/file/d/1bBd1CiylYXpnSbQu3oOaMIOWgdBDfe9s/view?usp=sharing"];

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
		divBI.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBI.appendChild(divBI);
		ctBI ++

		
	}if((edad2>=9 && edad2<=11) || (edad1>=9 && edad1<=11)){
		let divBE= document.createElement("DIVBE");			
		divBE.addEventListener("click",()=>(changeHidden(descarga)))
		divBE.tabIndex = i;
		divBE.classList.add(`item-${i}`,'flex-item');
		divBE.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBE.appendChild(divBE);
		ctBM ++

	}
	if((edad1>=12 && edad1<=14) || (edad2>=12 && edad2<=14)){
		let divBS= document.createElement("DIVBS");
		divBS.addEventListener("click",()=>(changeHidden(descarga)))
		divBS.tabIndex = i;
		divBS.classList.add(`item-${i}`,'flex-item');
		divBS.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBS.appendChild(divBS);
		ctBS ++

	}
	if (edad2>14) {
		let divBach= document.createElement("DIVBach");
		divBach.addEventListener("click",()=>(changeHidden(descarga)))
		divBach.tabIndex = i;
		divBach.classList.add(`item-${i}`,'flex-item');
		divBach.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBACH.appendChild(divBach);
		ctBGU ++
	}
	/*else if(edad1>=10){
		console.log("hola");
		let divBach= document.createElement("DIVBach");
		divBach.addEventListener("click",()=>(changeHidden(descarga)))
		divBach.tabIndex = i;
		divBach.classList.add(`item-${i}`,'flex-item');
		divBach.innerHTML= libro[0]+ libro[1]+libro[2];
		documentFragmentBACH.appendChild(divBach);
	}*/

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

