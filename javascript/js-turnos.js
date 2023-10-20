var medico ="";
var filtrarLugar="";

function ocultar(arreglo){
    
    for (let i = 0; i < arreglo.length; i++)
    {
        arreglo[i].style.display= 'none';
    }
}
function mostrar(arreglo){
    for (let i = 0; i < arreglo.length; i++)
    {
        let leo = filtrarLugar;
      
        let arVal = arreglo[i].value.split("-");
        let val=arVal[2]
        
        if (leo === val){
        arreglo[i].style.display= 'block';
        }else{arreglo[i].style.display= 'none';}
        if (leo === val){
            arreglo[i].style.display= 'block'; 
        } else{arreglo[i].style.display= 'none';
            
        }
        if (leo === val){
            arreglo[i].style.display= 'block';
        }else{
            arreglo[i].style.display= 'none';
        }
        
        

        
        
    }
}






function mostrarHorarios(medicos){
    let horarios=document.getElementById("horarios");
    horarios.style.display='block';
   
    medico= medicos.value;

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

function selTurno(seleccion){

    let leo = medico.split("-");
    leo[0]=leo[0].toUpperCase();
    leo[1]=leo[1].toUpperCase();
    let dias =seleccion.id;
    let dia="";
    if(dias === "horario-1")
    {
        dia ="lunes";
        
    }
        else {
            if (dias === "horario-2")
            {
                dia="miercoles";
                
            }
                else
                {
                    dia="viernes";
                    
                }
            }
        
    

    let confirmacion =confirm("Desea revervar el turno de las " +seleccion.textContent+ " para el dia "+ dia+" con el Dr./Dra "+leo[0] +" "+ leo[1] + " ?");
    
    if(confirmacion == true){
        window.alert("Acaba de confirmar su turno, a la brevedad recibira un mail con los detalles");
        let horarios=document.getElementById("horarios");
        let profesionales = document.getElementById("profesionales");
        profesionales.style.display='none';
        horarios.style.display='none';
    
    
        
    }


}

 function selLugar(lugar)
{

    filtrarLugar = lugar.value;



   



}