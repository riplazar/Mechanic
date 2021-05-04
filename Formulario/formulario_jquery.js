$("#formulario_contacto").validate({
    rules: {
        nombre: {
            required: true,
            minlenght: 3,
            maxlenght: 30
        },
        email: {
            required: true,
            email: true

        },
        celular: {
            required: true,
            number: true,


        },
        direccion: {
            required: true,
            minlenght: 3,
            maxlenght: 50,
        },
        mensaje: {
            required: true,
            minlenght: 5,
            maxlenght: 250
        }

    }


})

$("#btn_enviar").click(function() {


    if ($("#formulario_contacto").valid() == false) {

        return;
    }



    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let celular = $("#celular").val()
    let direccion = $("#direccion").val()
    let mensaje = $("#mensaje").val()
    console.log(nombre)
})