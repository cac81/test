
document.getElementById("btn__iniciar-sesion").addEventListener("click", irIniciarSesion);
document.getElementById("btn__irRegistrarse").addEventListener("click", irRegistro);
//var anchopagina = window.innerWidth;
window.addEventListener("resize", anchoPage);

var registro=0;





//funcion email
function validaremail(loginCorreo){
    
    
	/*let campoemail = document.getElementById('reg-mail');*/
    let campoemail = loginCorreo;
	
	
	let formatovalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    
    if (formatovalido.test(campoemail))
            {
           
               
                return true;
                
            } 
            else 
            {
            alert("La dirección de email tiene un formato incorrecto!.");
            return false;
            }
}

// funcion validar texto
function valtexto(texto){
    for (var i = 0; i < texto.length; i++) 
    {
            var charCode = texto.charCodeAt(i);
            if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) )) {
              alert("El campo usuario solo puede contener caracteres alfabéticos.");
              return false;
                }else{return true;}
              

              /*regex /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/*/
          
              
    }

}

//funcion validar telefono
function validartelefono(numero)
{
    let telefono = parseInt(numero);

    if (Number.isInteger(telefono)){
        
        return true
    }
    else{
        window.alert ("el numero  "+ numero + "  no coincide con un valor valido de telefono")
        return false
        }


}


function validarcontraseña(contra1, contra2)
{
    let regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ ;
    if (contra1.length < 8 || contra2.length < 8)
    {
        window.alert("las contraseñas deben tener al menos 8 digitos");
        return false;
    }
     
    else (contra1 === contra2) 
    {
       //window.alert("contra iguales");
        if (regex.test(contra1)){
        //window.alert("contraseña aceptada e iguales")
        return true;
        }
            else {
           window.alert("las contraseñas coinciden, pero son debiles");
        return false;
        }
        
    }

}

//funciones validacion
function inicioSesion(loginCorreo, loginContraseña)
{
    var loginCorreo = document.getElementById("loginCorreo").value.trim();
    var loginContraseña = document.getElementById("loginContraseña").value.trim();
    
        if( loginCorreo ==='' || loginContraseña ==='')
            {

                window.alert('debe ingresar todos los campos solicitados');
            return false;

            }

       
       if( validaremail(loginCorreo)){
        alert("ha ingresado al sistema");
       }

    

    
    
}

    

function registrarse(nombre, apellido, email, tel, contraseña, repContraseña){

    var nombre= document.getElementById("reg-nombre").value.trim();
    var apellido= document.getElementById("reg-apellido").value.trim();
    var email= document.getElementById("reg-mail").value.trim();
    var tel= document.getElementById("reg-tel").value.trim();
    var contraseña= document.getElementById("reg-contraseña").value.trim();
    var repContraseña= document.getElementById("reg-rep-contraseña").value.trim();

//valida campos vacios
    if( nombre ==='' || apellido ==='' || email ==='' || tel ==='' || contraseña ==='' || repContraseña ==='' )
            {
    
            window.alert('debe ingresar todos los campos solicitados');
                return false;
        
             }
        
    
    let a =valtexto(nombre);
    let b= valtexto(apellido);
    let c= validartelefono(tel);
    let d=validarcontraseña(contraseña, repContraseña);
    let e=validaremail(email);

    if( a && b && c && d && e ){
    window.alert("Se ha registrado con exito");}
    else{window.alert("Fallo en el registro");}
    
  
}







   






//Declarando variables movimiento de cajas
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    

function anchoPage(){
    
    if (window.innerWidth > 1019){
        
        if(contenedor_login_register.style.left == "410px"){
             caja_trasera_register.style.opacity = "1"}
        else{
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "block";
            contenedor_login_register.style.left="10px";
        }
    }else{
       
        caja_trasera_register.style.display = "flex";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";  
        
    }
    
}

anchoPage();


    function irIniciarSesion(){
        if (window.innerWidth > 1019){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
            
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "flex";
            caja_trasera_login.style.display = "none";
        }
    }

    function irRegistro(){
        if (window.innerWidth > 1019){
            formulario_register.style.display = "grid";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "flex";
            caja_trasera_login.style.opacity = "1";
        }
}