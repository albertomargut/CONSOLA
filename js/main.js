let pantalla= document.getElementsByClassName("pantalla");
let botonA= document.getElementById("buttonA");
let botonB= document.getElementById("buttonB");
let botonOnOff= document.getElementById("buttonOnOff");
let luzpower= document.getElementById("luz");

console.log("He entrado aqui", pantalla);

var encendido=0

botonOnOff.addEventListener("click", function (){
  var contenedorPantalla=document.getElementById("contenedor-pantalla");
  if (encendido===0){
    encendido=1;
    luzpower.classList.add("power-on");
    contenedorPantalla.innerHTML='<video width="100%" height="100%" Autoplay=autoplay id="video"><source src="../img/opening.MOV" type="video/mp4"></video>';
  }else{
    encendido=0;
    luzpower.classList.remove("power-on");
    contenedorPantalla.innerHTML='';
  }
})

var posicionImagen=0;


function posicionImagenAMostrar(movimiento){
  if(movimiento==="avanzar"){
    if (posicionImagen===2){
      posicionImagen=0;
    } else {
      posicionImagen+=1;
    }

  } else{ 
    if (posicionImagen===0){
      posicionImagen=2;
    } else {
      posicionImagen-=1;
    }

  }



}
let arrayUrlImagenes= ['cogerpokemon.JPG','squirtle.JPG','squirtlecogido.JPG'];
botonA.addEventListener("click", function (){
  console.log('ClickA-----', posicionImagen)
  var contenedorPantalla=document.getElementById("contenedor-pantalla");
  contenedorPantalla.innerHTML='<img width="100%" height="100%" src="../img/'+ arrayUrlImagenes[posicionImagen]+'" rel="cogerpokemon">';
  //la imagen sale medio negra porque es así en el juego

  posicionImagenAMostrar("avanzar")

})

botonB.addEventListener("click", function (){
  console.log('ClickB-----', posicionImagen)
  var contenedorPantalla=document.getElementById("contenedor-pantalla");
  contenedorPantalla.innerHTML='<img width="100%" height="100%" src="../img/'+ arrayUrlImagenes[posicionImagen]+'" rel="cogerpokemon">';
  //la imagen sale medio negra porque es así en el juego
  posicionImagenAMostrar("retroceder")


})