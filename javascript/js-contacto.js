const form = document.getElementById("for-contacto");
    
    form.addEventListener("submit", handleSubmit);

    async function handleSubmit(event){

        event.preventDefault();
        const formulario = new FormData(this);
        const respuesta= await fetch( this.action,{
            method: this.method,
            body: formulario,
            headers:{
                'accept': 'aplication/json'
            }
        }



        )



        if(respuesta.ok){
            window.alert("Gracias por contactarse con <b> Cureta Clinic </b>, su formulario fue enviado");
            this.reset();}
            else{
                window.alert("Algo ha salido mal, intentelo nuevamente mas tarde");
            }

    }

















   /* async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("btn-enviar");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Gracias por contactarse con Cureta Clinic";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Hubo algun problema en el envio del formulario, por favor intentelo nuevamente"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Hubo algun problema en el envio del formulario, por favor intentelo nuevamente"
      });
    }
    form.addEventListener("submit", handleSubmit)*/