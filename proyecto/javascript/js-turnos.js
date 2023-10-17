function selLugar(lugar){
window.alert(" selecciono  "+ lugar.value);
}

function ocultar(arreglo){
    
    for (let i = 0; i < arreglo.length; i++)
    {
        arreglo[i].style.display= 'none';
    }
}
function mostrar(arreglo){
    for (let i = 0; i < arreglo.length; i++)
    {
        arreglo[i].style.display= 'block';
    }
}

function mostrarHorarios(){
    let horarios=document.getElementById("horarios");
    horarios.style.display='block';
}

function selEspecialidad(espe){
    
   
        let cardio = document.getElementsByClassName("pro-cardio");
        let clinica = document.getElementsByClassName("pro-clinica");
        let gine = document.getElementsByClassName("pro-gine");
        let trauma = document.getElementsByClassName("pro-trauma");
        let derma = document.getElementsByClassName("pro-derma");
        let pedia = document.getElementsByClassName("pro-pedia");
        let profesionales = document.getElementById("profesionales");

switch (espe.value) {

    
    
    case "pediatria":
       
        
        ocultar(cardio);
        ocultar(clinica);
        ocultar(gine);
        ocultar(trauma);
        ocultar(derma);
        mostrar(pedia);
        profesionales.style.display= 'flex';
        
       
        break;

   case "clinica":
    
        
        ocultar(cardio);
        ocultar(pedia);
        ocultar(gine);
        ocultar(trauma);
        ocultar(derma);
        mostrar(clinica);
        profesionales.style.display= 'flex';
        break;

    case "cardiologia":
        
        ocultar(clinica)
        ocultar(pedia);
        ocultar(gine);
        ocultar(trauma);
        ocultar(derma);
        mostrar(cardio);
        profesionales.style.display= 'flex';
        break;

    case "ginecologia":
    
        ocultar(cardio);
        ocultar(pedia);
        ocultar(clinica);
        ocultar(trauma);
        ocultar(derma);
        mostrar(gine);
        profesionales.style.display= 'flex';
        break;

    case "dermatologia":
       
        ocultar(cardio);
        ocultar(pedia);
        ocultar(gine);
        ocultar(trauma);
        ocultar(clinica);
        mostrar(derma);
        profesionales.style.display= 'flex';
        break;
    case "traumatologia":
        
        ocultar(cardio);
        ocultar(pedia);
        ocultar(gine);
        ocultar(clinica);
        ocultar(derma);
        mostrar(trauma);
        profesionales.style.display= 'flex';
        break;
    default:
        window.alert("error")
    
    
    }


}