$(function(){
    $("#myForm").submit(function() { //no submit do formulário
      $('#myForm input').val(""); //coloca todos valores de todos inputs do form como vazio
      $('#myForm input[type = submit]').val("Enviar"); //recoloca o texto no botão
    });
  });