$(document).ready(function(onclick){
    $("#ingresar").submit(function(event){

    let user = $("#usuario").val();
    let pass =$("#password").val();

    if(user==""|| pass=="");
    alert("Debe completar este campo") ;
    return false;
});
});


