//Validar RUT
function validarRut(objeto) {
    let mRut = document.getElementById("mRut");
  
    if (objeto.value.length < 7) {
        mRut.innerHTML = "El rut debe contener entre 7 y 8 digitos";
        mRut.classList.remove("text-success");
        mRut.classList.add("text-danger");
    } 
    else if ((objeto.value.length == 7 || objeto.value.length == 8)) {
        mRut.innerHTML = "Correcto &#10003;";
        mRut.classList.remove("text-danger");
        mRut.classList.add("text-success");
    }
    else{
        mRut.innerHTML = "El rut debe contener entre 7 y 8 digitos";
        mRut.classList.remove("text-success");
        mRut.classList.add("text-danger");
    }
}

//Validar Digito verificador
function validarDv(objeto) {
    let mDv = document.getElementById("mDv");
  
    if (objeto.value.length < 1) {
        mDv.innerHTML = "Campo obligatorio";
        mDv.classList.remove("text-success");
        mDv.classList.add("text-danger");
    } 
    else if (objeto.value.length == 1) {
        mDv.innerHTML = "Correcto &#10003;";
        mDv.classList.remove("text-danger");
        mDv.classList.add("text-success");
    } 
    else{
        mDv.innerHTML = "Campo acepta un d&iacute;gito o letra";
        mDv.classList.remove("text-success");
        mDv.classList.add("text-danger");
    }
}  

//Validar nombre completo
function valNombres(objeto) {
    let idDiv = objeto.id.charAt(0).toUpperCase() + objeto.id.slice(1);
    
    if (objeto.value.length < 3) {
      document.getElementById("m"+idDiv).innerHTML = "Debe contener entre 3 y 20 caracteres";
      document.getElementById("m"+idDiv).classList.remove("text-success");
      document.getElementById("m"+idDiv).classList.add("text-danger");
    } else {                       
      document.getElementById("m"+idDiv).innerHTML = "Correcto &#10003;";
      document.getElementById("m"+idDiv).classList.remove("text-danger");
      document.getElementById("m"+idDiv).classList.add("text-success");
    }
}

//Validar código de celular
function valCodigo(objeto){
    let mCodTel = document.getElementById("mCodTel");

    let idx = objeto.selectedIndex;
    let opcion = objeto.options[idx];
    
    alert(opcion.value);

    if(opcion.value == "Código"){
        mCodTel.innerHTML = "Seleccione un c&oacute;digo";
        mCodTel.classList.remove("text-success");
        mCodTel.classList.add("text-danger");
    }
    else if(opcion.value != "Código"){
        mCodTel.innerHTML = "Correcto &#10003;";
        mCodTel.classList.remove("text-danger");
        mCodTel.classList.add("text-success");
    }
}

//Validar celular
function valCelular(objeto){
    let mTelefono = document.getElementById("mTelefono");

    if(objeto.value.toString().length < 9){
        mTelefono.innerHTML = "El número de celular debe tener 9 dígitos";
        mTelefono.classList.remove("text-success");
        mTelefono.classList.add("text-danger");
    }
    else if(objeto.value.toString().length == 9){
        mTelefono.innerHTML = "Correcto &#10003;";
        mTelefono.classList.remove("text-danger");
        mTelefono.classList.add("text-success");
    }
    else {
        mTelefono.innerHTML = "El número de celular supera los 9 dígitos";
        mTelefono.classList.remove("text-success");
        mTelefono.classList.add("text-danger");
    }
}

//Validar email
function valCorreo(objeto){
    let mCorreo = document.getElementById("mCorreo");
    
    if(objeto.value.length <= 5){
        mCorreo.innerHTML = "Correo Electr&oacute;nico erroneo";
        mCorreo.classList.remove("text-success");
        mCorreo.classList.add("text-danger");
    }
    else if(objeto.value.length > 5){
        mCorreo.innerHTML = "Correcto &#10003;";
        mCorreo.classList.remove("text-danger");
        mCorreo.classList.add("text-success");
    }
    else {
        mCorreo.innerHTML = "Correo Electr&oacute;nico erroneo";
        mCorreo.classList.remove("text-success");
        mCorreo.classList.add("text-danger");
    }
}
  