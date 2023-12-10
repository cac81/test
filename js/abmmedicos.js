const { createApp } = Vue
createApp({
data() {
return {
medicos:[],
url:'https://grupocodoacodo.pythonanywhere.com/medicos',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
//url:'https://comision23541.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
nombre:"",
apellido:"",
matricula:"",
dni:0,
especialidad:"",
contrasena:"",
lugatencion:"",
imagen:"",
email:"",


}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.medicos = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},

eliminar(medicos) {
let confirmacion =confirm("Desea eliminar el registro seleccionado? ");
if(confirmacion==true){
    const url = this.url+'/' + medicos;
    var options = {
    method: 'DELETE',
    }
    fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
    window.alert("Registro eliminado");
}



},



grabar(){

    
    
      //  var url = document.getElementById('imagen').files[0].name;
        
       // var x="../imagenes/imgProfesionales/"+ url;
      

    
let medicos = {
nombre:this.nombre,
apellido: this.apellido,
matricula: this.matricula,
dni:this.dni,
especialidad:this.especialidad,
contrasena:this.contrasena,
lugatencion:this.lugatencion,
//imagen:x,
email:this.email,

}

var options = {
body:JSON.stringify(medicos),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "../templates/abmmedicos.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabarr")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')