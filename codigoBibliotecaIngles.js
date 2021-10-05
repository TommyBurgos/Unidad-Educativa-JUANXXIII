const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
const contador=document.querySelector(".contador");
//,
const lista= ["FactFiles-New York","The Canterville-Ghost","The happy Prince","The boy who cried wolf","The fox and the crow","The Magic Porridge pot","Sara says No","Emma","Pride and Prejudice","The black cat",
				"The diary of a young girl","Robin Hood","The Vicomte de Bragelonne","The two gentlemen of verona","The merchant of venice","What makes music so Wonderful","Oedipus the king","The narrative of Arthur Gordon","The Iliad",
				"The Odyssey","Crime and punishment","king Arthur and of his Noble Knights of the round table"];
const listaAutores=["John Scoot","Oscar Wilde","Oscar Wilde","Mairi Mackinnon","Mairi Mackinnon","The Brothers Grimm","Norman Whitney","Jane Austen","Jane Austen","Edgar Allan Poe",
				"Anne Frank","Walter Scoot","Alexandre Dumas","William Shakespeare","William Shakespeare","EM Ariza","Sophocales","Edgar Allan Poe","Homer",
				"Homer","Fedor Mikhilovitch Dostoievski","Thomas Malory"];
const listaGenero=["Informativo","Litario","Litario","Literario","Literario","Literario","Literario","Literario","Literario","Literario",
				"Literario","Literario","Literario","Literario","Literario","Literario","Literario","Literario","Literario","Literario",
				"Literario","Literario","Literario"];
const ListaEdad1=[9,12,12,7,7,7,13,15,15,15,
				15,15,15,15,15,15,15,15,15,15,
				15,15,15];
const ListaEdad2=[11,15,14,8,8,8,15,16,16,16,
				16,17,17,17,17,17,17,17,17,17,
				17,17,17];
const ListaImagenes=["Imagenes/Biblioteca/Ingles/newYork.jpg","Imagenes/Biblioteca/Ingles/theCantervilleGhost.jpg","Imagenes/Biblioteca/Ingles/the_happy_prince_and_other_tales.jpg","Imagenes/Biblioteca/Ingles/boyAndWolf.jpg","Imagenes/Biblioteca/Ingles/foxAndCrow.jpg",
					"Imagenes/Biblioteca/Ingles/magicePorride.jpg","Imagenes/Biblioteca/Ingles/saraSayNo.jpg","Imagenes/Biblioteca/Ingles/emma-hardcover.jpeg","Imagenes/Biblioteca/Ingles/Pride-and-Prejudice.jpg","Imagenes/Biblioteca/Ingles/blackCat.jpg",
					"Imagenes/Biblioteca/Ingles/diaryAna.jpg","Imagenes/Biblioteca/Ingles/robin-hood.jpg","Imagenes/Biblioteca/Ingles/the-vicomte-de-bragelonne.jpg","Imagenes/Biblioteca/Ingles/two-gentlemen-of-verona.jpg","Imagenes/Biblioteca/Ingles/the-merchant-of-venice.jpg",
					"Imagenes/Biblioteca/Ingles/musicBeatiful.jpg","Imagenes/Biblioteca/Ingles/OedipusKing.jpg","Imagenes/Biblioteca/Ingles/narrativeArthur.jpg","Imagenes/Biblioteca/Ingles/theIliad.jpg","Imagenes/Biblioteca/Ingles/the-odyssey.jpg",
					"Imagenes/Biblioteca/Ingles/crime-and-punishment.jpg","Imagenes/Biblioteca/Ingles/kingarthurbook.jpg"];
const listaDescarga=["https://drive.google.com/file/d/1leRshgFQuGMRXEe0rm9OilRzhZtNabml/view?usp=sharing","https://drive.google.com/file/d/1jv13DM_FUEIgsEIsIDT5DretqMaKqtY1/view?usp=sharing","https://drive.google.com/file/d/1zLtGeTBG-DwQRWm0UNKr4iZWjs7iVbJQ/view?usp=sharing","https://drive.google.com/file/d/1GM1kjkyamchIWoVbQIPzH7AyRjKiva2N/view?usp=sharing","https://drive.google.com/file/d/1yXCuIrJploQHqaCqO-3qw-PIpLqzHJ3I/view?usp=sharing",
					"https://drive.google.com/file/d/1m-Qv-vXkBSYY2s8_F_DYDp7CvaxG-eQ6/view?usp=sharing","https://drive.google.com/file/d/1nyvS24YZ2kTZUb70MTNJMDGDxc2GsBdK/view?usp=sharing","https://drive.google.com/file/d/18rcFQW7B0_2jW0Sh314YQ6wbVzyp4JXG/view?usp=sharing","https://drive.google.com/file/d/1GgAD02_nWNlHrQz7X7MylJId6adJy-Fv/view?usp=sharing","https://drive.google.com/file/d/1-GQbQSSDlOQHLW0korTkGeINkqjd7SiD/view?usp=sharing",
					"https://drive.google.com/file/d/17xrHGoaOt04btEkSk2eHzOJ1s3I08gys/view?usp=sharing","https://drive.google.com/file/d/1HE7yhF3NLrPMtXLE-VB_GFpchRS_QMX0/view?usp=sharing","https://drive.google.com/file/d/1Z87Gxf_vNImsKVLlfOduuiofVMnTU0EO/view?usp=sharing","https://drive.google.com/file/d/1ZZX0F652_UAt3Weo_n1ntU1TiJGGMK0L/view?usp=sharing","https://drive.google.com/file/d/1UXvxZzM4xyWy6FEYodAteUe2qJ3Iyved/view?usp=sharing",
					"https://drive.google.com/file/d/1KJL63b7uulQKUz04bbgKG9BZufXd68jj/view?usp=sharing","https://drive.google.com/file/d/1z2E4qMiLuWyj578X3dqDVsZkJAi8-u3u/view?usp=sharing","https://drive.google.com/file/d/1DZATBIao05P2S94OdouowQaswOxMozou/view?usp=sharing","https://drive.google.com/file/d/1m-GDSHyPi2WESsi6nkHoGtrkhhDf1Pyu/view?usp=sharing","https://drive.google.com/file/d/1U0YGrBAbwXiP59Us_7Kl6DC2HpS1BLHm/view?usp=sharing",
					"https://drive.google.com/file/d/1LPnvYBCtAksnnEDQJ8r_crVyrClqDyMh/view?usp=sharing","https://drive.google.com/file/d/1alUkrkWKdG34oTY-AgYNq_b6hH1YeYWI/view?usp=sharing"];


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
