const axios = require("axios");
require('../css/style.css');
require('../../cliente/js/parallax');

//funcion del menu hamburguesa
// Declaracion de variables llamamos a la Id
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');



// Añadimos una funcion que al dar click añada una clase
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

// Aqui remueve esa clase
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// ********************************   Parallax   ****************************************


// *******************************   Funcionalidad de enviar datos *****************************************

document.getElementById("idBtnEnviar").addEventListener("click",function(){
    let strCorreo = document.getElementById("idInCE").value;
    let strNombre = document.getElementById("idInNom").value;
    let strMensaje = document.getElementById("idInMen").value;

    if(strCorreo != "" && strNombre != "" && strMensaje != ""){
        let datos ={
            c: strCorreo,
            n: strNombre,
            m: strMensaje
        };
        axios.post('/api/contacto',datos)
        .then(function(response){
            document.getElementById("idInCE").value="";
            document.getElementById("idInNom").value="";
            document.getElementById("idInMen").value="";
            alert("Gracias por escribirnos, en breve te contactaremos");
        }).catch(function(error){
            console.log(error);
        });
    }else{
        alert("Por fovor rellenar todos los campos!");
    }

});
