let btnDerma = document.getElementById('vmderma');
let textoOcultoDerma = document.getElementById('oc-derma');



function operartexto(){

    textoOcultoDerma.style.display= 'block'
    //if(textoOcultoDerma.classList.contains('muestro-texto')){
    //btnDerma.innerHTML = "volver";
    //}
    //else{
      //  btnDerma.innerHTML ="VER MAS";
   // }


}

btnDerma.addEventListener('click', operartexto);


