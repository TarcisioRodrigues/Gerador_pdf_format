const checkCnpj=(cnpj)=>{
  const formatCnpj=cnpj.replace(/[^0-9]/g,'')
  console.log(formatCnpj)
  $.ajax({
    
    'url':'https://receitaws.com.br/v1/cnpj/ '+formatCnpj,
    'type':'GET',
    'dataType':'jsonp',
    'success': function(data){
      console.log(data)
      if (data.nome===undefined) {
        event.preventDefault();
        console.log(data.nome)
            alert("CNPJ invalido")
      } else {
        document.getElementById('nome_fantasia').value=data.fantasia
        document.getElementById('representante').value=data.nome
        document.getElementById('logadouro').value=data.logradouro
        document.getElementById('CEP').value=data.cep
        document.getElementById('Entreprise').value=data.logradouro
      }
    }
  })
}
