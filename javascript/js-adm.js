






function validar(){



usuario=document.getElementById("usuario");  
pass=document.getElementById("pass");

if(usuario.value=="admin" && pass.value=="admin"){


window.open("../templates/abmmedicos.html", "_self");
window.alert("ingreso correcto al sistema"  );
}
else{
window.alert("los datos ingresados son incorrectos")
}


}