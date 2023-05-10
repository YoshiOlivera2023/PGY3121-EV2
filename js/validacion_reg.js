$(document).ready(function(){
    $("#formulario").submit(function(event){

        event.preventDefault();
        
        let rut = $("#rut").val();
        let dv = $("#dv").val();
        let codigo = $("#codTel").val();
        let telefono = $("#telefono").val();
        let correo = $("#correo").val();
        let direccion = $("#direccion").val();
        let region = $("#region").val();
        let comuna = $("#comuna").val();

        let flag = true;

        //Validar RUT
        if((rut.length < 7 && dv.length < 1)){
            $("#mRut").html("El rut debe contener entre 7 y 8 digitos");
            $("#mRut").addClass("text-danger");
            $("#mDv").html("Campo obligatorio");
            $("#mDv").addClass("text-danger");
        }
        else if (rut.length < 7 && dv.length == 1) {
            $("#mRut").html("El rut debe contener entre 7 y 8 digitos");
            $("#mRut").addClass("text-danger");
            $("#mDv").html("");
            $("#mDv").removeClass("text-danger");
        }
        else if ((rut.length == 7 || rut.length == 8)  && dv.length < 1) {
            $("#mRut").html("");
            $("#mRut").removeClass("text-danger");
            $("#mDv").html("Campo obligatorio");
            $("#mDv").addClass("text-danger");
        }   
        else if ((rut.length == 7 || rut.length == 8)  && dv.length == 1){
            $("#mRut").html("Correcto &#10003;");
            $("#mRut").addClass("text-success");
            $("#mDv").html("Correcto &#10003;");
            $("#mDv").removeClass("text-success");
        }

        //Validar nombre completo
        valNombres($("#nombre"));
        valNombres($("#paterno"));
        valNombres($("#materno"));
        
    })

    function valNombres(objeto){
        idDiv = $(objeto).attr("id").charAt(0).toUpperCase() + $(objeto).attr("id").slice(1);
        if(objeto.val().length < 3){
            $("#m"+idDiv).html("El "+ objeto.val() +" de contener entre 3 y 20 car&aacute;cteres");
            $("#m"+idDiv).addClass("text-danger");
        }
        else{
            $("#m"+idDiv).html("Correcto &#10003;");
            $("#m"+idDiv).addClass("text-success");
        }
    }
})