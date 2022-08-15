const checkCnpj=(cnpj)=>{
  $.ajax({
    'url':'https://receitaws.com.br/v1/cnpj/'+cnpj.replace(/[^0-9]/g,''),
    'type':'GET',
    'dataType':'jsonp',
    'success': function(data){
      if (data.nome===undefined) {
        event.preventDefault();
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
const validar=()=> {
      Email = document.getElementById('email');
      Cpf = document.getElementById('CPF');
      Cnpj = document.getElementById('cnpj');
      rep_legal = document.getElementById('representante');
      //cpp = Cnpj.lenght ;

      if (Email.value == '') {
        event.preventDefault();
        //alert("Email não foi preenchido");
        Email.classList.add("errorInput");
      };
      if (Email.value != '') {
        Email.classList.remove("errorInput");
      };
      if (Cpf.value == '') {
        event.preventDefault();
        //	alert("O Cpf não foi preenchido");
        Cpf.classList.add("errorInput");
      };
      if (Cpf.value != '') {
        Cpf.classList.remove("errorInput");
      };
      if (Cnpj.value == '') {
        event.preventDefault();
        //	alert("O Cnpj não foi preenchido");
        Cnpj.classList.add("errorInput");
      };
      if (Cnpj.value != '') {
        Cnpj.classList.remove("errorInput");
      };
      if (rep_legal.value == '') {
        event.preventDefault();
        //alert("Email não foi preenchido");
        rep_legal.classList.add("errorInput");
      };
      if (rep_legal.value != '') {
        rep_legal.classList.remove("errorInput");
      };
    };