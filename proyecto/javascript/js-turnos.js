document.getElementById("horario-1").addEventListener("active", reservaTurno("1"));
document.getElementById("horario-2").addEventListener("click", reservaTurno);
document.getElementById("horario-3").addEventListener("click", reservaTurno);


function reservaTurno(numero){

window.alert("click en " + numero + "dia lunes");

}

