console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:34,
    
nombre:"",
apellido:"",
matricula:"",
dni:0,
especialidad:"",
contrasena:"",
lugatencion:"",
imagen:"",
email:"",



url:'https://grupocodoacodo.pythonanywhere.com/medicos/'+id,
//url:'https://comision23541.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.nombre=data.nombre,
this.apellido=data.apellido,
this.matricula=data.matricula,
this.dni=data.dni,
this.especialidad=data.especialidad,
this.contrasena=data.contrasena,
this.lugatencion=data.lugatencion,
this.imagen=data.imagen,
this.email=data.email

})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {

    //var dir = document.getElementById('imagen').files[0].name;
        
    //var x="../imagenes/imgProfesionales/"+ dir;


let medicos = {
    nombre:this.nombre,
    apellido: this.apellido,
    matricula:this.matricula,
    dni:this.dni,
    especialidad:this.especialidad,
    contrasena:this.contrasena,
    lugatencion:this.lugatencion,
    imagen:this.imagen,
    email:this.email,
    
    
    
    
    

}
var options = {
body: JSON.stringify(medicos),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../templates/abmmedicos.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')