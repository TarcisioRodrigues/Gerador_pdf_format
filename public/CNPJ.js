const checkCnpj = (cnpj) => {
  const formatCnpj = cnpj.replace(/[^0-9]/g, "");

 
  $.ajax({
    url: "https://receitaws.com.br/v1/cnpj/" + formatCnpj,
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
 
      if (data.nome === undefined) {
        event.preventDefault();
        
        alert("CNPJ invalido");
      } else {
        document.getElementById("nome").value = data.nome;
        document.getElementById("representante").value = data.qsa[0].nome;
        document.getElementById("logadouro").value = data.logradouro;
        document.getElementById("CEP").value = data.cep;

        document.getElementById("entreprise").value = data.nome;
      }
    },
  });
};
