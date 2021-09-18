function verificarUser( form )
  {
    event.preventDefault();

    var button = document.getElementById("btn-sign");
    button.disabled = true;

    google.script.run
    .withSuccessHandler( permitirLogin )
    .withFailureHandler( muestraError )
    .verificarUserPass( form )
    
  }

  function permitirLogin( data )
  {
    if(data.dtEst == 1)
    {
      console.log(data);
    }
    else
    {
      var ella = document.getElementById("alt");
      ella.hidden = false;
      var button = document.getElementById("btn-sign");
      button.disabled = false;
      setTimeout(() => {
      console.log("5 Segundo esperado")
      ella.hidden = true;
      }, 5000);
    }
  }

  function muestraError( error )
  {
    console.log(error);
  }
