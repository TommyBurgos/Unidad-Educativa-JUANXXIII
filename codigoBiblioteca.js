const contenedor= document.querySelector(".flex-container");
//,
const lista= ["El Terror De SextoB","Amigo se escribe con H","Yo nunca digo adios","La vida es un sueño","De la tierra a la luna","Huasipungo","Torre de Papel-'R Y M' <h3>investigadores</h3><br>","Pasion por la verdad","El puente de la soledad","El Fantasma de <h3>Canterville</h3><br>"]
const listaAutores=["Yolanda reyes","Maria Fernanda Heredia","Maria Fernanda Heredia","Pedro calderon de la barca","Julio Verne","Jorge Icaza","Ramon Diaz","Miguel Angel Carlceles","Maria Fernanda Heredia","Oscar Welde"];
const listaGenero=["Cuento","Cuento","Cuento","Literario","Literario","Literario","Cuento","Literario","Literario","Literario"];
const ListaEdad1=[8,8,8,10,10,8,8,14,12,13];
const ListaEdad2=[10,10,10,11,12,10,10,17,15,15];
const ListaImagenes=["el_Terror_De_SextoB.jpg","amigoSeEscribeConH.PNG","yo_nunca_digo_adios.jpg","la-vida-es-un-sueno.jpg","De_la_tierra_a_la_luna.jpg","huasipungo.jpg","torreDePapel.jpg","pasionPorLaVerdad.jpg","elPuenteDeLaSoledad.jpg","Fantasma-de-Canterville.jpg"];
const listaDescarga=["https://drive.google.com/file/d/18C0lIzTPLO1apstdxbkXBkkTJ5qXLc1t/view?usp=sharing","https://drive.google.com/file/d/1QO9DsgJHB3oapFvhOyUlokv5Cc05yHAj/view?usp=sharing","https://drive.google.com/file/d/1RDXGoKjkaNUnVOJyjLpVsaYCFZQ8Dhab/view?usp=sharing","https://drive.google.com/file/d/13y2na_Uwgwqy5mtx1VEQq5xl70M0G2j8/view?usp=sharing","https://drive.google.com/file/d/14bVXGxOYcbuX9DhXSQLi5yOpkaTIAYev/view?usp=sharing","https://drive.google.com/file/d/1_pmvbcsNnYP6NBvmPMJUTPiF1CdmYLk_/view?usp=sharing","https://drive.google.com/file/d/1ame7N1uw1IRabpr8cYfLk9v9Hf79vRS9/view?usp=sharing","https://drive.google.com/file/d/1nsMnni0gBb0u3IiLMKgLc3M73ISiueu9/view?usp=sharing","https://drive.google.com/file/d/19tRoqkEdXYyEzldIQr_3lC8XnJoNbWNO/view?usp=sharing","https://drive.google.com/file/d/1wpmeuJdjQRIhDHzdK40M6bZbyhCairML/view?usp=sharing"];
function crearLibro(nombre, autor,genero, edad1, edad2, imagen,desc){
	nombre= `<h2>${nombre}</h2>`;
	autor= `<h3>Autor(a):<p>${autor}</p></h3>`;
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

