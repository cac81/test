






//apirest





document.addEventListener("DOMContentLoaded", async () => {
    const Url = 'https://grupocodoacodo.pythonanywhere.com/medicos';

    const lista_cardiologos = document.getElementById('section_cardiologia');
    const lista_pediatria = document.getElementById('section_pediatria');
    const lista_clinica = document.getElementById('section_clinica');
    const lista_ginecologia = document.getElementById('section_ginecologia');
    const lista_traumatologia = document.getElementById('section_traumatologia');
    const lista_dermatologia = document.getElementById('section_dermatologia');

    try {
        const response = await fetch(Url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de la API');
        }
        
        const medicos = await response.json();


       // medicos.forEach(medico =>{

         //   if (medico.especialidad == "cardiologia"){
           //     window.alert(medico.nombre);
            //}
        //})







        medicos.forEach(medico => {

            const elementoDiv = document.createElement('div');

            switch (medico.especialidad) {
                case 'cardiologia':
              
                 
                elementoDiv.className = 'profesional';
                elementoDiv.innerHTML = `
            
                <div class="polaroid">
                    <img src="${medico.imagen}" alt="${medico.nombre}" class="imagen">
                        <div class="container">
                            <p class="text-p">${medico.nombre} ${medico.apellido}  </p>
                            <div class="overlay">
                                <div class="text">
                                    <p>Prof. ${medico.nombre} ${medico.apellido}</p>
                                    <p>matricula ${medico.matricula}</p>
                                    <a class="Boton" href="turnos.html">Pedir Turno</a>
                                </div>
                            </div>
                        </div>
                </div>
                
                `;

                lista_cardiologos.appendChild(elementoDiv); 
                break;
                
                
                case 'pediatria':
                    
                    elementoDiv.className = 'profesional';
                    elementoDiv.innerHTML = `
                
                    <div class="polaroid">
                        <img src="${medico.imagen}" alt="${medico.nombre}" class="imagen">
                            <div class="container">
                                <p class="text-p">${medico.nombre} ${medico.apellido}  </p>
                                <div class="overlay">
                                    <div class="text">
                                        <p>Prof. ${medico.nombre} ${medico.apellido}</p>
                                        <p>matricula ${medico.matricula}</p>
                                        <a class="Boton" href="turnos.html">Pedir Turno</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    `;
    
                    lista_pediatria.appendChild(elementoDiv); 
                    break;
                 
                 
                 
                 
                 
                case 'clinica':

                elementoDiv.className = 'profesional';
                elementoDiv.innerHTML = `
            
                <div class="polaroid">
                    <img src="${medico.imagen}" alt="${medico.nombre}" class="imagen">
                        <div class="container">
                            <p class="text-p">${medico.nombre} ${medico.apellido}  </p>
                            <div class="overlay">
                                <div class="text">
                                    <p>Prof. ${medico.nombre} ${medico.apellido}</p>
                                    <p>matricula ${medico.matricula}</p>
                                    <a class="Boton" href="turnos.html">Pedir Turno</a>
                                </div>
                            </div>
                        </div>
                </div>
                
                `;

                lista_clinica.appendChild(elementoDiv); 
                break;
                
                case 'ginecologia':

                elementoDiv.className = 'profesional';
                elementoDiv.innerHTML = `
            
                <div class="polaroid">
                    <img src="${medico.imagen}" alt="${medico.nombre}" class="imagen">
                        <div class="container">
                            <p class="text-p">${medico.nombre} ${medico.apellido}  </p>
                            <div class="overlay">
                                <div class="text">
                                    <p>Prof. ${medico.nombre} ${medico.apellido}</p>
                                    <p>matricula ${medico.matricula}</p>
                                    <a class="Boton" href="turnos.html">Pedir Turno</a>
                                </div>
                            </div>
                        </div>
                </div>
                
                `;

                lista_ginecologia.appendChild(elementoDiv); 
                break;

                case 'traumatologia':
                    elementoDiv.className = 'profesional';
                    elementoDiv.innerHTML = `
                
                    <div class="polaroid">
                        <img src="${medico.imagen}" alt="${medico.nombre}" class="imagen">
                            <div class="container">
                                <p class="text-p">${medico.nombre} ${medico.apellido}  </p>
                                <div class="overlay">
                                    <div class="text">
                                        <p>Prof. ${medico.nombre} ${medico.apellido}</p>
                                        <p>matricula ${medico.matricula}</p>
                                        <a class="Boton" href="turnos.html">Pedir Turno</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    `;
    
                    lista_traumatologia.appendChild(elementoDiv); 
                    break;

                    case 'dermatologia':
                        
                    elementoDiv.className = 'profesional';
                        elementoDiv.innerHTML = `
                    
                        <div class="polaroid">
                            <img src="${medico.imagen}" alt="${medico.nombre}" class="imagen">
                                <div class="container">
                                    <p class="text-p">${medico.nombre} ${medico.apellido}  </p>
                                    <div class="overlay">
                                        <div class="text">
                                            <p>Prof. ${medico.nombre} ${medico.apellido}</p>
                                            <p>matricula ${medico.matricula}</p>
                                            <a class="Boton" href="turnos.html">Pedir Turno</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        `;
        
                        lista_dermatologia.appendChild(elementoDiv); 
                        break;
                  
                default:
                  
              }
            
            
            
            
            
            
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
});



//<h2 class="${medico.stock < 1 ? 'navegacion__enlace--activo':'navegacion__enlace'}">${medico.nombre}</h2>
  //          <p class="medico-description">${medico.descripcion}</p>
    //        <p class="medico-price">Price: $${medico.precio}</p>
      //      </div>
        //    <p class="medico-description" style="${medico.stock < 1 ? 'color: red;' : ''}">
          //  ${medico.stock > 0 ? 'EN STOCK' : 'SIN STOCK'}
            //</p>