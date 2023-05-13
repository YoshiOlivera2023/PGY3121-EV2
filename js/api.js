$(document).ready(function () { 
      $.ajax({  
        type: "GET",  
        url: "https://mindicador.cl/api",    
        dataType: "json", 
        success: function (data) {              
            let fecha = data.fecha;             
            let indicadores="<p>Indicadores Economicos >>> Fecha: "+fecha.substring(0,10)+" - UF: "+data.uf.valor+" - DOLAR: "+data.dolar.valor+" - EURO: "+data.euro.valor+" - IPC: "+data.ipc.valor+"% - UTM: "+data.utm.valor+"</p>";
            $("#textoIndicadores").append(indicadores);     
        }, 
    });  
  
   
  });