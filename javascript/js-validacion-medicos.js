
function validarFormulario(usuario, contraseña)
{
    var usuario= document.getElementById("usuario").value.trim();
    var contraseña = document.getElementById("contraseña").value.trim();
        
    if( usuario ==='' || contraseña ==='')
            {
    
            window.alert('debe ingresar todos los campos solicitados');
                return false;
        
             }
        
         for (var i = 0; i < usuario.length; i++) {
            var charCode = usuario.charCodeAt(i);
            if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) )) {
              alert("El campo usuario solo puede contener caracteres alfabéticos.");
              return false;
                }
              
              alert("Ingreso al sistema");
              return true;
            }




}
