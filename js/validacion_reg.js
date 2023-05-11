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
            $("#mRut").removeClass("text-success");
            $("#mRut").addClass("text-danger");
            $("#mDv").html("Campo obligatorio");
            $("#mDv").removeClass("text-success");
            $("#mDv").addClass("text-danger");
                alert("1");
        }
        else if (rut.length < 7 && dv.length == 1) {
            $("#mRut").html("El rut debe contener entre 7 y 8 digitos");
            $("#mRut").addClass("text-danger");
            $("#mDv").html("Correcto &#10003;");
            $("#mDv").removeClass("text-danger");
            $("#mDv").addClass("text-success");
            alert("2");
        }
        else if ((rut.length == 7 || rut.length == 8)  && dv.length < 1) {
            $("#mRut").html("Correcto &#10003;");
            $("#mRut").removeClass("text-danger");
            $("#mRut").addClass("text-success");
            $("#mDv").html("Campo obligatorio");
            $("#mDv").addClass("text-danger");
            alert("3");
        }   
        else if ((rut.length == 7 || rut.length == 8)  && dv.length == 1){
            $("#mRut").html("Correcto &#10003;");
            $("#mRut").removeClass("text-danger");
            $("#mRut").addClass("text-success");
            $("#mDv").html("Correcto &#10003;");
            $("#mDv").removeClass("text-danger");
            $("#mDv").addClass("text-success");
            alert("4");
        }
        
        //Validar celular
        if(codigo == "Código" && telefono.toString().length < 9){
            $("#mCodTel").html("Seleccione un c&oacute;digo");
            $("#mCodTel").removeClass("text-success");
            $("#mCodTel").addClass("text-danger");
            $("#mTelefono").html("El número de celular debe tener 9 dígitos");
            $("#mTelefono").removeClass("text-success");
            $("#mTelefono").addClass("text-danger");
        }
        else if(codigo == "Código" && telefono.toString().length == 9){
            $("#mCodTel").html("Seleccione un c&oacute;digo");
            $("#mCodTel").removeClass("text-success");
            $("#mCodTel").addClass("text-danger");
            $("#mTelefono").html("El número de celular debe tener 9 dígitos");
            $("#mTelefono").removeClass("text-success");
            $("#mTelefono").addClass("text-danger");
        }
        else if(codigo != "Código" && telefono.toString().length < 9){
            $("#mCodTel").html("Correcto &#10003;");
            $("#mCodTel").removeClass("text-danger");
            $("#mCodTel").addClass("text-success");
            $("#mTelefono").html("El número de celular debe tener 9 dígitos");
            $("#mTelefono").removeClass("text-success");
            $("#mTelefono").addClass("text-danger");
        }
        else if(codigo != "Código" && telefono.toString().length == 9){
            $("#mCodTel").html("Correcto &#10003;");
            $("#mCodTel").removeClass("text-danger");
            $("#mCodTel").addClass("text-success");
            $("#mTelefono").html("Correcto &#10003;");
            $("#mTelefono").removeClass("text-danger");
            $("#mTelefono").addClass("text-success");
        }

        //Validar email
        if(correo.length < 5){
            $("#mCorreo").html("Eso no es un correo electr&oacute;nico");
            $("#mCorreo").removeClass("text-success");
            $("#mCorreo").addClass("text-danger");
        }
        else{
            for(let i of correo){
                if(i != "@" && i != "."){
                    $("#mCorreo").html("Su correo debe contener un @ y al menos un punto");
                    $("#mCorreo").removeClass("text-success");
                    $("#mCorreo").addClass("text-danger");
                }
                else{
                    $("#mCorreo").html("Correcto &#10003;");
                    $("#mCorreo").removeClass("text-danger");
                    $("#mCorreo").addClass("text-success");
                }
            }
        }


    })
})