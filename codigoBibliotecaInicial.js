const contenedor= document.querySelector(".flex-container");
const basInf= document.querySelector(".flex-containerBI");
const contenedorBE= document.querySelector(".flex-containerBE");
const contenedorBS= document.querySelector(".flex-containerBS");
const contenedorBGU= document.querySelector(".flex-containerBGU");
const contenedorMayo= document.querySelector(".flex-containerMayo");
const contenedorJunio= document.querySelector(".flex-containerJunio");


const contador=document.querySelector(".contador");
//,
const lista= ["Serenata a una Perrita","El vendedor de Alfombras","<br><br>Una Aguja en un pajar","El matrimonio Oson","El tigrito que se mordia las uñas","El buen tiempo y la lluvia","<br>Las patas de un elefante","El gato, el Zorro y el gallo","<br>El gatito glotón","El león y la ardillita",
"El egoista","Los dos Gatitos","Los dos cangrejos","La vaca y el perro","El oso valiente y miedoso","El lenguaje de un patito","Ya llega el invierno", "La liebre y la mariposa","El hormiguero y el ratón","El Dinosaurio",
"La gallina Enferma","Ratoncitos desobedientes","La ballenita Orgullosa","La Rana y el Buey","La paloma y la hormiguita","Los gatos y los ratones","La Leona","Doña Jirafa","<br> <br>La tortuga","El ciervo vanidoso","El pato Guason",//Termino Enero
"Mini-Maus y MarraMiau","Galgos o Podencos","Los 3 Zorritos","El zorro y el cuervo","Fiesta","El gato mendigo","El león y el mosquito","El Pingüino glotón","La abeja Holgazana","El cerdo y el Jabali",
"El mapache herido","La liebre que tocaba el violin","Los cerdos debiles","El oso pescador","El buey y el caballo","La Codicia","El erizo generoso","El cerdito Gordo","La tortuga y el aguila","La oveja Negra",
"El pavo real y la grulla","El caballo descontento","La liebre y el cordero", "El perro y el zorro","El cocodrilo mentiroso","Los lobos y los corderos","La Zorra y la rana lista","La ratita presumida",//Terminó Febrero
"El gusanillo","El lobo y el cabrito","El cangrejo colorado","La lechuza","La patita presumida","El ratoncito orgulloso","Los dos burros","La urraca Ladrona","La pluma de Ganso","La lechuza y las palomas",
"Las dos Ramas","El elefante Blanco","El lobito Guardian","Las dos mariquitas","La nutria","El Rey mono y la zorra","El juego del escondite","La cabra y la mula","El pulpo goloso","La tortuga y el chimpance",
"La reunión","El tejon trasnochador","El mirlo Blanco","La luciernaga","La liebre y el gato","La foca y los libros","La abejita exigente","La familia Liron","El cumpleaños de Doña Hormiga","Conejita la castañera","La zoora y la Cigüeña", //Terminó Marzo
"La conejita de las orejas grandes","Las liebres y las ramas","La perrita que no comia","La urraca","La obeja Golosa","El topo descontento","El ratoncillo que queria volar","La liebre de la pascua","El lobo Fanfaron","El caracol envidioso",
"El oso Malo","El saltamontes mensajero","Los Burros listos","El canguro salvador","El puerco-espin guardian","Los tres buenos amigos","El patito feo","El hipopotamo que quería ser delgado","El perrito constructor de cometas","La pantera burlada",
"El saltamontes y el perro","El oso Goloso","La trompa del elefante","El lobo y la luna","El ratoncillo Desobediente","El fin de un sueño","El elefante cobardica","La vanidad Burlada","Todos desean lo que no tienen","El cumpleaños de minino",//Termina Abril
"El tío generoso","El maestro Uva","EL chimpance constructor","La sorpres de Don Liron","La trucha traviesa","El grillo Afonico","El conejito Comilon","El buho Miope","El pato deportista","La ovejita dormilona",
"La vivienda del gusanillo","Un loro poco puntual","Dos Amiguitas","Cuatro cerditos","Dos mariquitas","Dos moscas y un juego","El cervatillo y su prima","El pequeño Gorrion","La estrellita de mar","La cigarra Desobediente",
"Las apariencias","La hormiga que no guarda secretos","El gatito y el canario","Terry y el gatito malo","El saltamontes triste","El pececito de colores","El pavo Real","La pulga y el perro","El canto del Ruiseñor","El pollito Mentiroso","El toro y las cabras",//Termino mayo,31
"El flamenco avaricioso","El tigre dibujante","El burro tramposo","El pulpo aventurero","Profesor Delfín","La hormigaa trabajadora","Las dos arañas","El rinoceronte y la Gaviota","La pantera Juguetona","El señor y la señora Avestruz",
"La ratita Bailarina","El pelicano Ladron","El canguro que saltaba hacia atras"];
const listaMes=["Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero",
				"Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero",
				"Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero",
				"Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero",
				"Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero",
				"Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero","Febrero",
				"Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo",
				"Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo",
				"Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo","Marzo",
				"Marzo",
				"Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril",
				"Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril",
				"Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril","Abril",
				"Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo",
				"Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo",
				"Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo","Mayo",
				"Junio","Junio","Junio","Junio","Junio","Junio","Junio","Junio","Junio","Junio",
				"Junio","Junio","Junio"];

const ListaDia=[1,2,3,4,5,6,7,8,9,10,
				11,12,13,14,15,16,17,18,19,20,
				21,22,23,24,25,26,27,28,29,30,31,
				1,2,3,4,5,6,7,8,9,10,
				11,12,13,14,15,16,17,18,19,20,
				21,22,23,24,25,26,27,28,
				1,2,3,4,5,6,7,8,9,10,
				11,12,13,14,15,16,17,18,19,20,
				21,22,23,24,25,26,27,28,29,30,31,
				1,2,3,4,5,6,7,8,9,10,
				11,12,13,14,15,16,17,18,19,20,
				21,22,23,24,25,26,27,28,29,30,
				1,2,3,4,5,6,7,8,9,10,
				11,12,13,14,15,16,17,18,19,20,
				21,22,23,24,25,26,27,28,29,30,31,
				1,2,3,4,5,6,7,8,9,10,
				11,12,13];
const ListaImagenes=["Imagenes/Biblioteca/Inicial/serenata.jpg","Imagenes/Biblioteca/Inicial/cerdoVendedor.jpg","Imagenes/Biblioteca/Inicial/unaAgujaEnUnPajar.jpg","Imagenes/Biblioteca/Inicial/matrimonioOson.jpg","Imagenes/Biblioteca/Inicial/elTigrito.jpg",
"Imagenes/Biblioteca/Inicial/buenTiempoyLLuvia.jpg","Imagenes/Biblioteca/Inicial/patasElefante.jpg","Imagenes/Biblioteca/Inicial/elGato,gallina.jpg","Imagenes/Biblioteca/Inicial/gatitoGloton.jpg","Imagenes/Biblioteca/Inicial/leonyArdilla.jpg",
"Imagenes/Biblioteca/Inicial/elEgoista.jpg","Imagenes/Biblioteca/Inicial/dosGatitos.jpg","Imagenes/Biblioteca/Inicial/dosCangrejos.jpg","Imagenes/Biblioteca/Inicial/laVacayElPerro.jpg","Imagenes/Biblioteca/Inicial/osoValienteyno.jpg",
"Imagenes/Biblioteca/Inicial/lenguajePatito.jpg","Imagenes/Biblioteca/Inicial/llegaInvierno.jpg","Imagenes/Biblioteca/Inicial/liebreyMariposa.jpg","Imagenes/Biblioteca/Inicial/elHormigueroyElRaton.jpg","Imagenes/Biblioteca/Inicial/elDinosaurio.jpg",
"Imagenes/Biblioteca/Inicial/gallinaEnferma.jpg","Imagenes/Biblioteca/Inicial/ratoncitos.jpg","Imagenes/Biblioteca/Inicial/ballenita.jpg","Imagenes/Biblioteca/Inicial/ranayBuey.jpg","Imagenes/Biblioteca/Inicial/laPalomayHormiga.jpg",
"Imagenes/Biblioteca/Inicial/gatosyRatones.jpg","Imagenes/Biblioteca/Inicial/laLeona.jpg","Imagenes/Biblioteca/Inicial/doniaJirafa.jpg","Imagenes/Biblioteca/Inicial/laTortuga.jpg","Imagenes/Biblioteca/Inicial/ciervo.jpg","Imagenes/Biblioteca/Inicial/patoGuason.jpg"/*Termino Enero*/,
"Imagenes/Biblioteca/Inicial/miniMaus.jpg","Imagenes/Biblioteca/Inicial/galgos.jpg","Imagenes/Biblioteca/Inicial/treszorritos.jpg","Imagenes/Biblioteca/Inicial/zorroGuason.jpg","Imagenes/Biblioteca/Inicial/fiesta.jpg","Imagenes/Biblioteca/Inicial/gatoMendigo.jpg",
"Imagenes/Biblioteca/Inicial/elLeonyElMosquito.jpg","Imagenes/Biblioteca/Inicial/pinguinoGloton.jpg","Imagenes/Biblioteca/Inicial/abeja.jpg","Imagenes/Biblioteca/Inicial/cerdoJabali.jpg",
"Imagenes/Biblioteca/Inicial/mapacheHerido.jpg","Imagenes/Biblioteca/Inicial/liebreViolin.jpg","Imagenes/Biblioteca/Inicial/cerdosDebiles.jpg","Imagenes/Biblioteca/Inicial/osoPescador.jpg","Imagenes/Biblioteca/Inicial/bueyCaballo.jpg",
"Imagenes/Biblioteca/Inicial/laCodicia.jpg","Imagenes/Biblioteca/Inicial/erizoGeneroso.jpg","Imagenes/Biblioteca/Inicial/cerditoGordo.jpg","Imagenes/Biblioteca/Inicial/tortugaYaguila.jpg","Imagenes/Biblioteca/Inicial/ovejaNegra.jpg",
"Imagenes/Biblioteca/Inicial/pavoYgrulla.jpg","Imagenes/Biblioteca/Inicial/caballoDescontento.jpg","Imagenes/Biblioteca/Inicial/liebreYcordero.jpg","Imagenes/Biblioteca/Inicial/perroYzorro.jpg","Imagenes/Biblioteca/Inicial/cocodriloMentiroso.jpg","Imagenes/Biblioteca/Inicial/lobosYcorderos.jpg","Imagenes/Biblioteca/Inicial/zorraYrana.jpg","Imagenes/Biblioteca/Inicial/ratitaPresumida.jpg",//Terminó Febrero
"Imagenes/Biblioteca/Inicial/gusanillo.jpg","Imagenes/Biblioteca/Inicial/loboYcabrito.jpg","Imagenes/Biblioteca/Inicial/cangrejoColorado.jpg","Imagenes/Biblioteca/Inicial/laLechuza.jpg","Imagenes/Biblioteca/Inicial/patitaPresumida.jpg",
"Imagenes/Biblioteca/Inicial/ratoncitoOrgulloso.jpg","Imagenes/Biblioteca/Inicial/dosBurros.jpg","Imagenes/Biblioteca/Inicial/urracaLadrona.jpg","Imagenes/Biblioteca/Inicial/plumaGanzo.jpg","Imagenes/Biblioteca/Inicial/lechuzaYpalomas.jpg",
"Imagenes/Biblioteca/Inicial/dosRanas.jpg","Imagenes/Biblioteca/Inicial/elefanteBlanco.jpg","Imagenes/Biblioteca/Inicial/lobitoGuardian.jpg","Imagenes/Biblioteca/Inicial/dosMariquitas.jpg","Imagenes/Biblioteca/Inicial/laNutria.jpg",
"Imagenes/Biblioteca/Inicial/monoYzorra.jpg","Imagenes/Biblioteca/Inicial/juegoEscondite.jpg","Imagenes/Biblioteca/Inicial/cabraYmula.jpg","Imagenes/Biblioteca/Inicial/pulpoGoloso.jpg","Imagenes/Biblioteca/Inicial/tortugaYchimpance.jpg",
"Imagenes/Biblioteca/Inicial/laReunion.jpg","Imagenes/Biblioteca/Inicial/tejonTrassnochador.jpg","Imagenes/Biblioteca/Inicial/mirloBlanco.jpg","Imagenes/Biblioteca/Inicial/luciernaga.jpg","Imagenes/Biblioteca/Inicial/liebreYgato.jpg",
"Imagenes/Biblioteca/Inicial/focaYlibros.jpg","Imagenes/Biblioteca/Inicial/abejaExigente.jpg","Imagenes/Biblioteca/Inicial/familiaLiron.jpg","Imagenes/Biblioteca/Inicial/cumpleHormiga.jpg","Imagenes/Biblioteca/Inicial/conejitacoce.jpg","Imagenes/Biblioteca/Inicial/zorraYciguenia.jpg",//Terminó Marzo
"Imagenes/Biblioteca/Inicial/conejitaOreajasGrandes.jpg","Imagenes/Biblioteca/Inicial/liebreYranas.jpg","Imagenes/Biblioteca/Inicial/perritaNoComia.jpg","Imagenes/Biblioteca/Inicial/urraca.jpg","Imagenes/Biblioteca/Inicial/obejaGolosa.jpg",
"Imagenes/Biblioteca/Inicial/topoDescontento.jpg","Imagenes/Biblioteca/Inicial/ratoncilloQueriaVolar.jpg","Imagenes/Biblioteca/Inicial/liebreDeLaPascua.jpg","Imagenes/Biblioteca/Inicial/loboFanfarron.jpg","Imagenes/Biblioteca/Inicial/caracolEnvidioso.jpg",
"Imagenes/Biblioteca/Inicial/ososMalo.jpg","Imagenes/Biblioteca/Inicial/saltamontesMensajero.jpg","Imagenes/Biblioteca/Inicial/BurrosListos.jpg","Imagenes/Biblioteca/Inicial/canguroSalvador.jpg","Imagenes/Biblioteca/Inicial/puercoEspinGuardian.jpg",
"Imagenes/Biblioteca/Inicial/3BuenosAmigos.jpg","Imagenes/Biblioteca/Inicial/patitoFeo.jpg","Imagenes/Biblioteca/Inicial/hipopotamoDelgado.jpg","Imagenes/Biblioteca/Inicial/perritoCometas.jpg","Imagenes/Biblioteca/Inicial/panteraBurlada.jpg",
"Imagenes/Biblioteca/Inicial/saltamontesYperro.jpg","Imagenes/Biblioteca/Inicial/osoGoloso.jpg","Imagenes/Biblioteca/Inicial/trompaDeElefante.jpg","Imagenes/Biblioteca/Inicial/loboYLuna.jpg","Imagenes/Biblioteca/Inicial/ratoncilloObediente.jpg",
"Imagenes/Biblioteca/Inicial/finDsuenio.jpg","Imagenes/Biblioteca/Inicial/elefanteCobardica.jpg","Imagenes/Biblioteca/Inicial/vanidadBurlada.jpg","Imagenes/Biblioteca/Inicial/deseanNotienen.jpg","Imagenes/Biblioteca/Inicial/cumpleDelMinino.jpg",
"Imagenes/Biblioteca/Inicial/tioGeneroso.jpg","Imagenes/Biblioteca/Inicial/maestroUva.jpg","Imagenes/Biblioteca/Inicial/chimpanceConstructor.jpg","Imagenes/Biblioteca/Inicial/sorpresaLiron.jpg","Imagenes/Biblioteca/Inicial/truchaTraviesa.jpg",
"Imagenes/Biblioteca/Inicial/grilloAfonico.jpg","Imagenes/Biblioteca/Inicial/conejitoComillon.jpg","Imagenes/Biblioteca/Inicial/buhoMiope.jpg","Imagenes/Biblioteca/Inicial/patoDeportista.jpg","Imagenes/Biblioteca/Inicial/ovejitaDormilona.jpg",
"Imagenes/Biblioteca/Inicial/viviendaGusanillo.jpg","Imagenes/Biblioteca/Inicial/loroNoPuntual.jpg","Imagenes/Biblioteca/Inicial/dosAmiguitas.jpg","Imagenes/Biblioteca/Inicial/4cerditos.jpg","Imagenes/Biblioteca/Inicial/2Mariquitas.jpg",
"Imagenes/Biblioteca/Inicial/2moscas1juegos.jpg","Imagenes/Biblioteca/Inicial/cervatilloYprima.jpg","Imagenes/Biblioteca/Inicial/pequeñoGorrion.jpg","Imagenes/Biblioteca/Inicial/estrellitaMar.jpg","Imagenes/Biblioteca/Inicial/cigarraDesobediente.jpg",
"Imagenes/Biblioteca/Inicial/apariencias.jpg","Imagenes/Biblioteca/Inicial/hormigaNoSecretos.jpg","Imagenes/Biblioteca/Inicial/gatitoYcanaraio.jpg","Imagenes/Biblioteca/Inicial/terryYgatito.jpg","Imagenes/Biblioteca/Inicial/saltamontesTriste.jpg",
"Imagenes/Biblioteca/Inicial/pececitoDeColores.jpg","Imagenes/Biblioteca/Inicial/pavoReal.jpg","Imagenes/Biblioteca/Inicial/pulgaYperro.jpg","Imagenes/Biblioteca/Inicial/cantoRuisenior.jpg","Imagenes/Biblioteca/Inicial/pollitoMentiroso.jpg","Imagenes/Biblioteca/Inicial/toroYcabras.jpg",//Termina mayo
"Imagenes/Biblioteca/Inicial/flamencoAvaricioso.jpg","Imagenes/Biblioteca/Inicial/tigreDibujante.jpg","Imagenes/Biblioteca/Inicial/burroTramposo.jpg","Imagenes/Biblioteca/Inicial/pulpoAventurero.jpg","Imagenes/Biblioteca/Inicial/profesorDelfin.jpg",
"Imagenes/Biblioteca/Inicial/hormigaTrabajadora.jpg","Imagenes/Biblioteca/Inicial/dosArañas.jpg","Imagenes/Biblioteca/Inicial/rinoceronteYgaviota.jpg","Imagenes/Biblioteca/Inicial/panteraJuguetona.jpg","Imagenes/Biblioteca/Inicial/senioraAvestruz.jpg",
"Imagenes/Biblioteca/Inicial/ratitaBailarina.jpg","Imagenes/Biblioteca/Inicial/pelicanoLadron.jpg","Imagenes/Biblioteca/Inicial/canguroSaltoAtras.jpg"];

const listaDescarga=["https://drive.google.com/file/d/1EBhz_1wdQfYrpSPx1dQQNE-SrWyyf61A/view?usp=sharing","https://drive.google.com/file/d/13sUyEBlRvOBT2ZoDFUvF-dIw-SoKhmu3/view?usp=sharing","https://drive.google.com/file/d/1EEiEiMD8801RJu97vdIJuloUckoY6xJ5/view?usp=sharing","https://drive.google.com/file/d/1JGDSEL9JP9xf2S4WP9OJKJa6C6uleyqy/view?usp=sharing","https://drive.google.com/file/d/1KRBM0MgbgQJxys0RVSLrNd0N2ffongCj/view?usp=sharing",
"https://drive.google.com/file/d/1mycnx4h94vm30m0lXEW3sICi4zFDNk8i/view?usp=sharing","https://drive.google.com/file/d/1AsiRZ7frZrSrBCU092N8y2PkLjyXrrVJ/view?usp=sharing","https://drive.google.com/file/d/1vEWsLf0u4F0o-FV1Pvcqw3WcQtg5V6Q2/view?usp=sharing","https://drive.google.com/file/d/1EHE0TxPoAYxbwz_k3dRE-cyBLi9P3cfz/view?usp=sharing","https://drive.google.com/file/d/1V-4G5gDgStBf6vHYASFPosxb12kiE1gq/view?usp=sharing",
"https://drive.google.com/file/d/1IIaTX7f_3Xc-bR4BeXVXgOdBmYLal0RK/view?usp=sharing","https://drive.google.com/file/d/1ZC_QDlzabMXqLUOWlN-tB_bLrZGd9cKV/view?usp=sharing","https://drive.google.com/file/d/1-sfSVOCTonzHbd6DpDw3z0TIBtjQ6i20/view?usp=sharing","https://drive.google.com/file/d/1Wltj84lXyjHkeLVRe9W_vS1IcicSmUp1/view?usp=sharing","https://drive.google.com/file/d/1TwI6TnYCOc1c8b4iLMj7h9Zsef_OwXVW/view?usp=sharing",
"https://drive.google.com/file/d/12iFr27EsjWJ9hwqeN-Ks0sPKAQUdV7aa/view?usp=sharing","https://drive.google.com/file/d/1PL08QIAMjtLvEQ28t6n4FynuMmx_QDYu/view?usp=sharing","https://drive.google.com/file/d/1nLI02I8Z8cvFUDn0NA4BWMqiZsaYcTp1/view?usp=sharing","https://drive.google.com/file/d/1jOdGjpJbc5CS_pyPI1d7CRGTGvqEYoa6/view?usp=sharing","https://drive.google.com/file/d/16sLCS_vS24kgrG5YbsDTH-uYofgZaSNA/view?usp=sharing",
"https://drive.google.com/file/d/1RYIRqufw9RaiVvN51EdVgJ090T6QASB2/view?usp=sharing","https://drive.google.com/file/d/1gNuEbruErL_QB7-QHdNioKdjI6R2Tacm/view?usp=sharing","https://drive.google.com/file/d/15tdX3MleEobOJMlnWbG3G3HIvCGzeCJo/view?usp=sharing","https://drive.google.com/file/d/1tjnk6sqETOYO_buJPInFLw9IaH5G8fHM/view?usp=sharing","https://drive.google.com/file/d/1QTX5IFWCQk5MKuqouqAU1JNwlplxZ94b/view?usp=sharing",
"https://drive.google.com/file/d/180oP3VsAuTyXH8EHgqaIPUJ8Dr_dkhi-/view?usp=sharing","https://drive.google.com/file/d/1CKb-azkXaWo3N9T5sc-kG9DIZdmki-fJ/view?usp=sharing","https://drive.google.com/file/d/1oFP9upUHmrmbasXL7NM6wk0gQxrrD-4o/view?usp=sharing","https://drive.google.com/file/d/1kIc45Ectg-j2ou4HGLx8NywTYzki0k4J/view?usp=sharing","https://drive.google.com/file/d/1RAArs2pAub1ZCLnv6NnfYMIdg8nsFtkJ/view?usp=sharing",
"https://drive.google.com/file/d/1G5qUYtplkMEMABTqgerGTHm3t8GqLyC1/view?usp=sharing","https://drive.google.com/file/d/1MVpVR1EUe6CJGoGWgpaf4fUKvOxoYRAm/view?usp=sharing","https://drive.google.com/file/d/1tjzRqC0LHMxrUXFjxa7akQYlysaVBmwd/view?usp=sharing","https://drive.google.com/file/d/1dkx2lFFJ9bkvqB7vjSgBLNM_NIglJE9j/view?usp=sharing","https://drive.google.com/file/d/1P-P7JBkC5BZpeIpuHnE8koX2FcokTHf5/view?usp=sharing",
"https://drive.google.com/file/d/1oaLYyODJrXLtrlqRpcvSYbyco9f3B-Sz/view?usp=sharing","https://drive.google.com/file/d/1NafpOOh0w0FZztWzucSnniW2gnJ4yXPh/view?usp=sharing","https://drive.google.com/file/d/10LaCel7CJFEsM1B23wYh70-aYKt5c6_8/view?usp=sharing","https://drive.google.com/file/d/19LRatXlI2qcBW1pBQ8L1VCzlIS84TH5m/view?usp=sharing","https://drive.google.com/file/d/1XJF-GzXVSUDVUb5X-xHfDQLNuwP4o2Nk/view?usp=sharing","https://drive.google.com/file/d/18AiD3EFMOb6y1erZGkQVuVZH6ijlLzHO/view?usp=sharing",
"https://drive.google.com/file/d/1khj_8o8HnCtZDsS0_OwBzRXPkI2gDjSe/view?usp=sharing","https://drive.google.com/file/d/1wjQMkMi5a0ryW6kIQKhslRee2xxYPGhk/view?usp=sharing","https://drive.google.com/file/d/1_N4lZ_SvcKHpl_cdZI0ZcWAKpmc8H9pJ/view?usp=sharing","https://drive.google.com/file/d/19DiJo93nX3TgVJwcI3ZaQ-nsyaiGmIBd/view?usp=sharing","https://drive.google.com/file/d/1ZF5FRoKSY7tjAoDessVG0YuBH0AE-oNz/view?usp=sharing",
"https://drive.google.com/file/d/1ru09D3YL64D7nTp7dWuyM9uLQKLr055l/view?usp=sharing","https://drive.google.com/file/d/1zr_yRLc8a5__AfVWIrc6ga8LVk0h7eF0/view?usp=sharing","https://drive.google.com/file/d/1P9tMhBk1vTfqUy9jTsH1D_xWM9W2wf6u/view?usp=sharing","https://drive.google.com/file/d/1vp8UVYbqFtKTg8v0riube9W6TXBElaBr/view?usp=sharing","https://drive.google.com/file/d/1aoQS2WW05DGEsrUicq7Dm26bEkSY18WH/view?usp=sharing",
"https://drive.google.com/file/d/1DhlSvyVXw_PB9WFEwkno2MGkeVI9sUYu/view?usp=sharing","https://drive.google.com/file/d/1xn0YCy4Xm2-JHEZdUmhXnwwde326_fP3/view?usp=sharing","https://drive.google.com/file/d/1kC2zPlto3zOrbdI_kRT5nh4yYArJmZ97/view?usp=sharing","https://drive.google.com/file/d/15kCfqhGLqvD93DyfBqp3W-5KCX21moX1/view?usp=sharing","https://drive.google.com/file/d/1qYsBjHHHZ9hLdFewNb7Hr2U30loqxCZM/view?usp=sharing",
"https://drive.google.com/file/d/1oZ3vrywn4HxALSXgCJ-XbmCjG5MUmrUn/view?usp=sharing","https://drive.google.com/file/d/1ScUd00m2jpnTFLfIiLRnU5hNcKYGOGQE/view?usp=sharing","https://drive.google.com/file/d/1qjBSvHmNrJlyYTiVCKxBfmXTPCBqmQyl/view?usp=sharing",
"https://drive.google.com/file/d/1lu3j9ku4zVZSj1wrUo2NUgoQ7dNDI7yc/view?usp=sharing","https://drive.google.com/file/d/1NoYRziXgzQPUoGV2aR0sbogUY_EgWM25/view?usp=sharing","https://drive.google.com/file/d/1CXNmFscQcXB9Pj0lZ8yXUjjcHGihAT8f/view?usp=sharing","https://drive.google.com/file/d/1dNZJ22aNUZ0F6jmWoHwkK0LLKV4DKDf5/view?usp=sharing","https://drive.google.com/file/d/1s6pIs_Zn4wJGw5aY3zwXBqIfoVT3k74l/view?usp=sharing",
"https://drive.google.com/file/d/1_KY9l5ZfOA2iau5opH_SG1mgS6jViwZK/view?usp=sharing","https://drive.google.com/file/d/1FuSK8uGvu8xjT0bvu-SLjSp6N6S4p7w-/view?usp=sharing","https://drive.google.com/file/d/1a0m_vm811tjx4cw8EdVI6HbPbQBM9ToQ/view?usp=sharing","https://drive.google.com/file/d/1PJ_4nCCsyhNEtCKeV4Qcrq_LYrfVHpJF/view?usp=sharing","https://drive.google.com/file/d/1JxhvJ5nV6AG3-U4tLI68bg4OVj69jLZl/view?usp=sharing",
"https://drive.google.com/file/d/1Q8Jdg3ERtwnVCgPS-RBE__RQ1OH9ZiZi/view?usp=sharing","https://drive.google.com/file/d/1qRIi2n7x0wadFeo5GpCVJAAc1OzMnpQB/view?usp=sharing","https://drive.google.com/file/d/1R-NDUd638AOZvREbOrKhHobkfwJgy51P/view?usp=sharing","https://drive.google.com/file/d/1O06jhWAyYgok5jAAxk5IQIXWoLypw1Vm/view?usp=sharing","https://drive.google.com/file/d/1KoVCkFfPR7cW_BVv29DTX2nB-h3NAW4W/view?usp=sharing",
"https://drive.google.com/file/d/1aEQdwShRzOcmw_7xoeSWIARjGlGKVzlQ/view?usp=sharing","https://drive.google.com/file/d/1JSqtazR7dGW5pZKorfPoVAVmZr_7zdBY/view?usp=sharing","https://drive.google.com/file/d/13zbqdi5DUyQVvdmR3oPyYtsn7uo68DG5/view?usp=sharing","https://drive.google.com/file/d/1D2-IhRgfRGGeYyTZY9LGwPsxf6ea6Tlh/view?usp=sharing","https://drive.google.com/file/d/1gFeYIgiUc5npKF-MalgA47-QApvlsjwK/view?usp=sharing",
"https://drive.google.com/file/d/1aVNkL4bEARRq9Nw2WVkf3ZM3CQ3iIk6t/view?usp=sharing","https://drive.google.com/file/d/10m_MLDhXz6dYhanxo0MWTIjysl3zHwYU/view?usp=sharing","https://drive.google.com/file/d/1KqC_1GaJIP8wAt20CbviwQLWnm2q7aNq/view?usp=sharing","https://drive.google.com/file/d/1Z4OmjKAvOk7_degfgnovfIBl2yvFozNK/view?usp=sharing","https://drive.google.com/file/d/1PvxQZPTDUb51VPZA10NYNwpFTAU8frTI/view?usp=sharing",
"https://drive.google.com/file/d/1wh23lgL0tNym_4FW3mFQj2f9cJk3dgto/view?usp=sharing","https://drive.google.com/file/d/14TAG0mGX_w1puIBtnQv5Wqz3mCYxZMLa/view?usp=sharing","https://drive.google.com/file/d/1B9rFaMuxgQ1EYX86eP1oEGuKqlmCeB69/view?usp=sharing","https://drive.google.com/file/d/1PvpEdXdykHKJgqoaPmFNGouA5HVcX3kH/view?usp=sharing","https://drive.google.com/file/d/15xa9rkZUf0guaRiTKII4K1gYCZJZIs-0/view?usp=sharing",
"https://drive.google.com/file/d/1mOPToRBPJERMtJgLZdS5pC-Y04Z86Ru-/view?usp=sharing",//TERMINA MARZO
"https://drive.google.com/file/d/1sVt2q5xqC9eCHtn16lyR5iwDZJoLa3Rx/view?usp=sharing","https://drive.google.com/file/d/1QUzVYSZiH5_qwbZjl8o1ZZhX6WLI18RR/view?usp=sharing","https://drive.google.com/file/d/1PssfXyfSoM1Nn0SfrUArYcr2UOAGbyar/view?usp=sharing","https://drive.google.com/file/d/1r5e3limdeTsq57OgpD0E1H2hlRnpmi-o/view?usp=sharing","https://drive.google.com/file/d/1tJNjMMWWIzUM3Lsgv35jpWYVzBwce7E6/view?usp=sharing",
"https://drive.google.com/file/d/19TY5xTa7Q7MAJJEo9-b1wGDDk_7NcDdM/view?usp=sharing","https://drive.google.com/file/d/11s4cbfkvMbJ1Bny5nJp24MkJT2nvqgtq/view?usp=sharing","https://drive.google.com/file/d/1KJX07iNGpiIRHOcgxiQXPp7ZxiFDlrs_/view?usp=sharing","https://drive.google.com/file/d/1bpeLPcqdHczY_YWzSvbsxGfgi_mpHIVe/view?usp=sharing","https://drive.google.com/file/d/1_vZ4Fx6ljel60_nY3Gt5xSGEcEA099Jt/view?usp=sharing",
"https://drive.google.com/file/d/15N4CjqR1Phtvk61Druh6-fmZE6NOha1a/view?usp=sharing","https://drive.google.com/file/d/1DMbsqWKUpASWtmYETRPjkpo9c7MZ2ZOc/view?usp=sharing","https://drive.google.com/file/d/1FS3_sCiW2L1-tRGthcknH_PzNTkHYFFd/view?usp=sharing","https://drive.google.com/file/d/1vzG2qrjhf4YZcDQiW4lVoFow5VVY9rd4/view?usp=sharing","https://drive.google.com/file/d/1YzPHCeMcZsapcDee7eEydnCzIw85YcsS/view?usp=sharing",
"https://drive.google.com/file/d/1izuhzzGmlQF6wDpfjvwVbXmS6CJEBAOm/view?usp=sharing","https://drive.google.com/file/d/1uDb02O0HJBWLJXjI9rjn9yYJ_9VdeXQR/view?usp=sharing","https://drive.google.com/file/d/1cZkOSaBJYe-kQrY4CTy3JmfjGdhIiR_Y/view?usp=sharing","https://drive.google.com/file/d/1TRA1Qytl1T3ttX4fDE51BghFbDFoJhj1/view?usp=sharing","https://drive.google.com/file/d/15ycQx_QRBwINWyqgkrG4GkwJeDInA96U/view?usp=sharing",
"https://drive.google.com/file/d/1Zfs383az_s-a223DkYKsG-ZDOxC4tYPX/view?usp=sharing","https://drive.google.com/file/d/11gQd2fw9wcTFT0YG9_b9ZrKEjW46lqLK/view?usp=sharing","https://drive.google.com/file/d/1nl4QvevoWV1wVEPr5RCeKQLTawdhfFUb/view?usp=sharing","https://drive.google.com/file/d/1xm9eYDkmDD1ec1xBh-1GOXJ5m9y2ETS9/view?usp=sharing","https://drive.google.com/file/d/1bUhAR1_kwO83ekTujRMFLxNyl2L9paeW/view?usp=sharing",
"https://drive.google.com/file/d/1gcNB8X2-F2IIoFuvz1UE1FnPXgpkHz59/view?usp=sharing","https://drive.google.com/file/d/1FOeRVIFBY2NoEpt9cIHQisFn0LYLB5Mv/view?usp=sharing","https://drive.google.com/file/d/1RCrRX8iDM4NnasAwMHCHVx51vTJ5RiLQ/view?usp=sharing","https://drive.google.com/file/d/1WtHJwK9Ua-u0N8-MaUtd1qmzugo0ACqu/view?usp=sharing","https://drive.google.com/file/d/100Y6S-DDVB99WMGTuFZRJuGO8JR2F9Jc/view?usp=sharing",//Termina Abril
"https://drive.google.com/file/d/1b9rBq7Ol0gwXYHmdpjRZAaNF1VUJ31_o/view?usp=sharing","https://drive.google.com/file/d/1_eTuwSdEDdVjHTWTYqKOcbr_Mg8_EtUv/view?usp=sharing","https://drive.google.com/file/d/1Xxn7iW2gbP4eo1UiCngeICpRwM3khoRR/view?usp=sharing","https://drive.google.com/file/d/138g7GFOxZAeeYqVi2hjqr7gxvV4ei0dy/view?usp=sharing","https://drive.google.com/file/d/1JPyda3HRL6NVSI7tz5q4z4zF-accML5s/view?usp=sharing",
"https://drive.google.com/file/d/1C98LTly6lUva8RZVWqe9vNBIQ4Nb5ZQH/view?usp=sharing","https://drive.google.com/file/d/1HiEqqO1uiDB3z0WPiPdjtWHojmtM_j70/view?usp=sharing","https://drive.google.com/file/d/1LiKsLzDR-7ettUVa2JZdBcPDj-GfrlAy/view?usp=sharing","https://drive.google.com/file/d/1r0PQfNiXS92vEX7igy8xxWZk0tQHv7Zb/view?usp=sharing","https://drive.google.com/file/d/19KU4fU4ctmIefdjk8AoDE7jYQppoO4KD/view?usp=sharing",
"https://drive.google.com/file/d/1oqF8bedART4dZF6J8CEH2xrHZ2E1UC65/view?usp=sharing","https://drive.google.com/file/d/1OrSIXrqhuXpzKoUAulp4Q9LSkdGp735h/view?usp=sharing","https://drive.google.com/file/d/1EEUJ5If8YXmsp8QrxcDaqPc34pLaRkTV/view?usp=sharing","https://drive.google.com/file/d/1uJsVnahOJ-DgjrOW56BWTP2iE_Sd4XaJ/view?usp=sharing","https://drive.google.com/file/d/1qI1P6kWkgHE_aqSCgL-l-aHaEkt95rXb/view?usp=sharing",
"https://drive.google.com/file/d/1dtDBxdbJYNcKCSI-EVrZ4FpV5tSa_Gnw/view?usp=sharing","https://drive.google.com/file/d/1fMXBDDr0VvwBnukmm0A4CqKEf1H1b5Mw/view?usp=sharing","https://drive.google.com/file/d/1tWPWJ_ApxUNUc_QeQVnYwKT2xYwuYh5k/view?usp=sharing","https://drive.google.com/file/d/1OdfffwgSX7Z8-fCZOBc0kBtBRogPulUa/view?usp=sharing","https://drive.google.com/file/d/19EQZlMfY5-u7nT2j4x1uxT1Gn_iB5FeW/view?usp=sharing",
"https://drive.google.com/file/d/1BsiGmMbS3Wv9xppN4wNeDFqmCZfafyr7/view?usp=sharing","https://drive.google.com/file/d/1VMrqh7Kvm8rd_IgU_ezgwGf28nSSPhmP/view?usp=sharing","https://drive.google.com/file/d/1CnCLmuUCBgUi15o4O5TfDcT2SCTmTIwv/view?usp=sharing","https://drive.google.com/file/d/1ZcDvzjWXgpaniVj6gBR5guHNAsn-VCbX/view?usp=sharing","https://drive.google.com/file/d/1hekR5D1qvDGlWrear2FR3RvfUOP-qHvE/view?usp=sharing",
"https://drive.google.com/file/d/1hZMGzD17fCRFZxrkv0_0xUOlXHtkZJpl/view?usp=sharing","https://drive.google.com/file/d/1WgIFozauBq_pmuqhAUR6xTgPADnZ3Y-r/view?usp=sharing","https://drive.google.com/file/d/1fdIDRJYQ9GO1gSNQsSNxs3Jhqw_IWGdp/view?usp=sharing","https://drive.google.com/file/d/1INduBb7salKRc5igNg8eQ7k3bKnpHd7j/view?usp=sharing","https://drive.google.com/file/d/1wZxt70y2WNuoWItqFRtr9oLAjK_q9ixF/view?usp=sharing","https://drive.google.com/file/d/1PTpBcNUIicfAssbNlICUi3gzLhX7lzN6/view?usp=sharing",
"https://drive.google.com/file/d/12LkB74RGSYgTcha7NeVsjdYHiBBb7pTR/view?usp=sharing","https://drive.google.com/file/d/18BXTiMHG99ZWexhiGC9HNK0DzXtrRc0a/view?usp=sharing","https://drive.google.com/file/d/1w9u92vfsoNKKtRL_ktH4qQf4FCm_d4R9/view?usp=sharing","https://drive.google.com/file/d/1_H1AVChknhS9ftCTshpZkV-CKIgpe7xj/view?usp=sharing","https://drive.google.com/file/d/1d_p-FD56GullA50Nd2VPMqcn9MZWogft/view?usp=sharing",
"https://drive.google.com/file/d/1l0jdmGNXKH2xGFl_J4d0Kmaj2PuTvuHe/view?usp=sharing","https://drive.google.com/file/d/181t6yy_QuJHNYjPfyIUhIUulhN_HQrxK/view?usp=sharing","https://drive.google.com/file/d/11POLNeJUvkVVILJWUa1YgsM71I2EVGxQ/view?usp=sharing","https://drive.google.com/file/d/1FIoaZqZ4u2q6cfPN3AiG47B8GvvDJbmV/view?usp=sharing","https://drive.google.com/file/d/1O_etxM2SIrNE5t2-tZbVUK5vWK7atMNl/view?usp=sharing",
"https://drive.google.com/file/d/1gMmDXbElyf9AVbNaO3Gafrg1DFdPTI6P/view?usp=sharing","https://drive.google.com/file/d/19UctGYOByZbLSwR4OTNETTUgQZbYK5nr/view?usp=sharing","https://drive.google.com/file/d/1uN1fE13J9rpBvh8KoAMG3YjPz-qr_GWF/view?usp=sharing"];


function crearLibro(nombre, mes, dia, imagen,desc){
	nombre= `<h2 class="nombre">${nombre}</h2>`;
	mes= `<h3>Fabula 365- Día: <p>${mes} ${dia}</p> </h3>`;
	dia= dia;
	imagen= `<img class='libros_img' src="${imagen}" >`;
	desc= desc;
	return [imagen,nombre,mes,dia,desc];
}
class libro{	
	constructor(nombre, mes, dia, imagen,desc){
		this.nombre=nombre;
		this.mes=mes;
		this.dia=dia;
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
let documentFragmentMayo = document.createDocumentFragment();
let documentFragmentJunio = document.createDocumentFragment();

let ctBI=0;
let ctBM=0;
let ctBS=0;
let ctBGU=0;
let ctMay=0;
let ctJun=0
let ctGeneral=0;

for (var i = 0; i <lista.length; i++) {
	let nombre= lista[i];
	let mes= listaMes[i];
	let dia= ListaDia[i];
	let imagen= ListaImagenes[i];
	let descarga= listaDescarga[i];
	let libro= crearLibro(nombre,mes,dia,imagen,descarga);
	if (listaMes[i]=="Enero") {
		let divBI= document.createElement("DIVBI");
		let vacio= document.createElement("DIVBI");
		divBI.addEventListener("click",()=>(changeHidden(descarga)))
		divBI.tabIndex = i;
		divBI.classList.add(`item-${i}`,'flex-item');
		divBI.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";
		documentFragmentBI.appendChild(divBI);
		ctBI ++

		
	}if((listaMes[i]=="Febrero")){
		let divBE= document.createElement("DIVBE");			
		divBE.addEventListener("click",()=>(changeHidden(descarga)))
		divBE.tabIndex = i;
		divBE.classList.add(`item-${i}`,'flex-item');
		divBE.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBE.appendChild(divBE);
		ctBM ++

	}
	if((listaMes[i]=="Marzo")){
		let divBS= document.createElement("DIVBS");
		divBS.addEventListener("click",()=>(changeHidden(descarga)))
		divBS.tabIndex = i;
		divBS.classList.add(`item-${i}`,'flex-item');
		divBS.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBS.appendChild(divBS);
		ctBS ++

	}
	if (listaMes[i]=="Abril") {
		let divBach= document.createElement("DIVBach");
		divBach.addEventListener("click",()=>(changeHidden(descarga)))
		divBach.tabIndex = i;
		divBach.classList.add(`item-${i}`,'flex-item');
		divBach.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentBACH.appendChild(divBach);
		ctBGU ++
	}
	if (listaMes[i]=="Mayo") {
		let divMayo= document.createElement("DIVMayo");
		divMayo.addEventListener("click",()=>(changeHidden(descarga)))
		divMayo.tabIndex = i;
		divMayo.classList.add(`item-${i}`,'flex-item');
		divMayo.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentMayo.appendChild(divMayo);
		ctMay ++
	}
	if (listaMes[i]=="Junio") {
		let divJunio= document.createElement("DIVJunio");
		divJunio.addEventListener("click",()=>(changeHidden(descarga)))
		divJunio.tabIndex = i;
		divJunio.classList.add(`item-${i}`,'flex-item');
		divJunio.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";;
		documentFragmentJunio.appendChild(divJunio);
		ctJun ++
	}
	let div= document.createElement("DIV");
	div.addEventListener("click",()=>(changeHidden(descarga)))
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML= libro[0]+ libro[1]+libro[2]+ "<a target='_blank' class='descargarlib' href='"+libro[4]+"'> <input  type='button'  value='DESCARGAR'> </a>";
	documentFragmentG.appendChild(div);
	ctGeneral++;
	
};
basInf.appendChild(documentFragmentBI);
contenedor.appendChild(documentFragmentG);
contenedorBE.appendChild(documentFragmentBE);
contenedorBS.appendChild(documentFragmentBS);
contenedorBGU.appendChild(documentFragmentBACH);
contenedorMayo.appendChild(documentFragmentMayo);
contenedorJunio.appendChild(documentFragmentJunio);

contador.innerHTML='<p><b>Total de libros: </b></p>' + ctGeneral;

let botonDescarga= document.querySelector('descargarlib');


const basicaInferior= document.querySelector(".flex-itemBI");
const botonBI= document.querySelector(".enero");
const botonBE= document.querySelector(".febrero");
const botonBS= document.querySelector(".marzo");
const botonBGU= document.querySelector(".abril");
const botonMay= document.querySelector(".mayo");
const botonJun= document.querySelector(".junio");
const botonSF=document.querySelector(".vaciar");


botonBI.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:flex';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorBE.style='display:none';
	contenedorMayo.style='display:none';
	contenedorJunio.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBI;
	
})
botonBE.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorMayo.style='display:none';
	contenedorJunio.style='display:none';
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
	contenedorMayo.style='display:none';
	contenedorJunio.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBS;
})
botonBGU.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:flex';
	contenedorBE.style='display:none';
	contenedorMayo.style='display:none';
	contenedorJunio.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctBGU;
})
botonMay.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorJunio.style='display:none';
	contenedorMayo.style='display:flex';
	contenedorBE.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctMay;
})
botonJun.addEventListener("click",(e)=>{
	contenedor.style='display:none' ;
	basInf.style='display:none';
	contenedorBS.style='display:none';
	contenedorBGU.style='display:none';
	contenedorMayo.style='display:none';
	contenedorJunio.style='display:flex';
	contenedorBE.style='display:none';
	contador.style='display:flex';
	contador.innerHTML='<p><b> Cantidad de resultados obtenidos: </b> </p>' + ctJun;	
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


