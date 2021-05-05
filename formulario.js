$(document).ready(function () {

    $("#formulario_contacto").validate({

        rules: {
            nombre: {
                required: true,
                minlenght: 3,
                maxlenght: 20
            },
            apellido: {
                required: true,
                minlenght: 3,
                maxlenght: 20
            },
            celular: {
                required: true,
                number: true,
                minlenght: 8,
                maxlenght: 9
            },
            email: {
                email: true,
                required: true,
            },
            mensaje: {
                required: true,
                minlenght: 10,
                maxlenght: 200
            },
        },

        messages: {

            nombre: {
                required: "Ingresa tu nombre",
                minlength: "Mínimo 3 caracteres",
                maxlength: "Maximo 20 caracteres"
            },
            apellido: {
                required: "Ingresa tu apellido",
                minlength: "Mínimo 3 caracteres",
                maxlength: "Maximo 20 caracteres"
            },

            celular: {
                required: "Ingresa tu número",
                minlength: "Ingresa 9 digitos",
                maxlength: "Ingresa 9 digitos",
                number: "Ingresa un numero valido"

            },

            email: {
                required: "Ingresa tu email",
                email: "Ingresa un mail valido"
            },

            mensaje: {
                required: "Ingresa tu comentario",
                minlength: "Mínimo 10 caracteres",
                maxlenght: "Maximo 200 carateres"

            }
        }

    })

});





$("#btn_enviar").click(function () {

    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let celular = $("#celular").val()
    let email = $("#email").val()
    let mensaje = $("#mensaje").val()
    console.log(nombre)
});





$(document).ready(function () {

    traer();
    traer2();
    traer3();

});

//Usuario 1 
var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                `
        })
}


//Usuario 2 
var contenido2 = document.querySelector('#contenido2')
function traer2() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido2.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                `
        })
}



//Usuario 3
var contenido3 = document.querySelector('#contenido3')
function traer3() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido3.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                `
        })
}





