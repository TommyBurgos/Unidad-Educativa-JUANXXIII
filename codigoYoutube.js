const contenedor= document.querySelector(".flex-container");
//s
const lista= ["<h3 class='inicial'>Prekinder</h3>","<h3 class='inicial2'>Kinder</h3>","<h3 class='primeroB'>Primero</h3>","Segundo","Tercero","Cuarto","Quinto","Sexto","Septimo","Octavo","Noveno","Decimo","1ro de Bachillerato","2do de Bachillerato","3ro de Bachillerato"];
const listaDescripcion=["Aprenderemos a: <br>  <ul style='list-style-image:url(oso.png)'> <li>Realizar los primeros trazo</li><li>Aprender las primeras nociones de colores</li></ul>" ,"Aprenderemos a: <br> *Realizar los primeros trazos <br> *Nociones de colores <br> * Nuestros primero números, y más ","Aprenderemos a: <br> *Realizar los primeros trazos <br> *Nociones de colores <br> * Nuestros primero números, y más ","Aprenderemos a: <br> *Realizar los primeros trazos <br> *Nociones de colores <br> * Nuestros primero números, y más "];
const ListaEdad1=[];
const ListaEdad2=[];
const ListaImagenes=["portadaPrekinder.png","portadakinder.png","portadaPrimero.png","portadaSegundo.png","portadaTercero.png","portadaCuarto.png","portadaQuinto.png","portadaSexto.png","portadaSeptimo.png","8voBasica.png","9noBasica.png","10moBasica.png","1roBachillerato.png","2doBachillerato.png","3roBachillerato.png"];
const listaDireccion=["https://www.youtube.com/channel/UCfcJ6_dARpQ3G8eB0I5SnQA","https://www.youtube.com/channel/UCstDXYrhvMrhvNp2uH2YP9Q","https://www.youtube.com/channel/UCQApvOiPUYjxM019zaTPutw","https://www.youtube.com/channel/UCVjYWgqeVQm9x6A95-WPcXw","https://www.youtube.com/channel/UCf2JOYzLDcrB5-MD4GiXFFw","https://www.youtube.com/channel/UCIPJUFzOOD9JaIS7mQlT8Vg","https://www.youtube.com/channel/UCeTLR2JnU-IFoga7MeAiB_w/videos","https://www.youtube.com/channel/UCpek3BFWNXt_EWVJTJavDQg/videos","https://www.youtube.com/channel/UCfshcfNL1HW-s3vHRa_Wf6w","https://www.youtube.com/channel/UCq8xZVp9ApXOvzQWnOO-BfA","https://www.youtube.com/channel/UCQoCsCFZsF6sZ-3T7Z7jhog","https://www.youtube.com/channel/UC3h8pFakLqRfL-51_l_0gQg","https://www.youtube.com/channel/UCr0f8LuLnkXKPiyXkXD8MfQ","https://www.youtube.com/channel/UCo0ND6jHHL072_TNjEUTtHw","https://www.youtube.com/channel/UCzYaLmP4ukpC0XCoquSJgFg"];
function crearLibro(nombre ,descripcion, edad1, edad2, imagen,direc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	descripcion= `<h4> ${descripcion}</h4>`;
	edad1= edad1;
	edad2= edad2;
	imagen= `<img class='canal_img' src="${imagen}" >`;
	direc= `<a href="${direc}"> <button class="ir"> IR AL CANAL <i class="fas fa-arrow-right"></i> </button> </a>`;

	return [imagen,nombre,descripcion,direc];
}
const changeHidden=(Direccion)=>{
	document.querySelector(".Direccionlib").href= `${Direccion}`;
}
let documentFragment = document.createDocumentFragment();
for (var i = 0; i <lista.length; i++) {
	let nombre= lista[i];
	let descripcion= listaDescripcion[i];
	let edad1= ListaEdad1[i];
	let edad2= ListaEdad2[i];
	let imagen= ListaImagenes[i];
	let Direccion= listaDireccion[i];
	let libro= crearLibro(nombre,descripcion,edad1,edad2,imagen,Direccion);
	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(Direccion)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	
	div.innerHTML= libro[0]+ libro[1]+libro[2]+libro[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

