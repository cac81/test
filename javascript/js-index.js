let ocu = [];


function Ocultar(recorrido){

for (let i=0; i < recorrido.length; i++){
   document.getElementById(recorrido[i]).style.display="none";
}

}



function mostrarMas(elemento){


switch(elemento.id){

   case "btn-1":
      
      document.getElementById('pnl_1').style.display="flex";
      ocu= ["pnl_2", "pnl_3", "pnl_4", "pnl_5", "pnl_6"] ;     
      Ocultar(ocu);
      break;

      case "btn-2":
      
      document.getElementById('pnl_2').style.display="flex";
      ocu= ["pnl_1", "pnl_3", "pnl_4", "pnl_5", "pnl_6"] ;     
      Ocultar(ocu);
      break;
   
      case "btn-3":
      
      document.getElementById('pnl_3').style.display="flex";
      ocu= ["pnl_1", "pnl_2", "pnl_4", "pnl_5", "pnl_6"] ;     
      Ocultar(ocu);
      break;
   
      case "btn-4":
      
      document.getElementById('pnl_4').style.display="flex";
      ocu= ["pnl_1", "pnl_2", "pnl_3", "pnl_5", "pnl_6"] ;     
      Ocultar(ocu);
      break;
   
      case "btn-5":
      
      document.getElementById('pnl_5').style.display="flex";
      ocu= ["pnl_1", "pnl_2", "pnl_3", "pnl_4", "pnl_6"] ;     
      Ocultar(ocu);
      break;
   
      case "btn-6":
      
      document.getElementById('pnl_6').style.display="flex";
      ocu= ["pnl_1", "pnl_2", "pnl_3", "pnl_4", "pnl_5"] ;     
      Ocultar(ocu);
      break;
      
      
      
      
      default: window.alert("error")


}
}

