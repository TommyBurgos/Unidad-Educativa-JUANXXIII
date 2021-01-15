const contenedor= document.querySelector(".flex-container");
//,
const lista= ["El Terror De SextoB","Amigo se escribe con H","Yo nunca digo adios"]
const listaAutores=["Yolanda reyes","Maria Fernanda Heredia","Maria Fernanda Heredia"];
const listaGenero=["Cuento","Cuento","Cuento"];
const ListaEdad1=[8,8,8];
const ListaEdad2=[10,10,10];
const ListaImagenes=["ElTerrorDeSextoB.jpg","Amigo_Se_Escribe_con_h.jpg","yo_nunca_digo_adios.jpg"];
const listaDescarga=["https://drive.google.com/file/d/18C0lIzTPLO1apstdxbkXBkkTJ5qXLc1t/view?usp=sharing","https://drive.google.com/file/d/1QO9DsgJHB3oapFvhOyUlokv5Cc05yHAj/view?usp=sharing","https://drive.google.com/file/d/1RDXGoKjkaNUnVOJyjLpVsaYCFZQ8Dhab/view?usp=sharing"];
function crearLibro(nombre, autor,genero, edad1, edad2, imagen,desc){
	nombre= `<h2>${nombre}</h2>`;
	autor= `<h3>Autor(a): <p>${autor}</p></h3>`;
	genero= `<h4> ${genero}</h4>`;
	edad1= edad1;
	edad2= edad2;
	imagen= `<img class='libros_img' src="${imagen}" >`;
	desc= `<a> href="${desc}" </a>`;

	return [imagen,nombre,autor,genero];
}
const changeHidden=(descarga)=>{
	document.querySelector(".descargarlib").href= `${descarga}`;
}
let documentFragment = document.createDocumentFragment();
for (var i = 0; i <lista.length; i++) {
	let nombre= lista[i];
	let autor= listaAutores[i];
	let genero= listaGenero[i];
	let edad1= ListaEdad1[i];
	let edad2= ListaEdad2[i];
	let imagen= ListaImagenes[i];
	let descarga= listaDescarga[i];
	let libro= crearLibro(nombre,autor,genero,edad1,edad2,imagen,descarga);
	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(descarga)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML= libro[0]+ libro[1]+libro[2];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

