
const inicio= document.querySelector(".HistoriaGeneral");
const comunidad=document.querySelector(".historiaComunidad");
const botonV= document.querySelector(".vaciar");
const botonG= document.querySelector(".general");
const botonC= document.querySelector(".comunidad");


botonG.addEventListener("click",(e)=>{
	inicio.style = 'display:flex' ;
	comunidad.style= 'display:none'
})
botonC.addEventListener("click",(e)=>{
	inicio.style = 'display:none' ;
	comunidad.style= 'display:flex'
})
botonV.addEventListener("click",(e)=>{
	inicio.style = 'display:none' ;
	comunidad.style= 'display:none'
})
	
	

