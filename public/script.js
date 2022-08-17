
const checkCnpj = (cnpj) => {
  const formatCnpj = cnpj.replace(/[^0-9]/g, "");
  
  console.log(formatCnpj);
  $.ajax({
    url: "https://receitaws.com.br/v1/cnpj/" + formatCnpj,
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
      console.log(data);
      if (data.nome === undefined) {
        // event.preventDefault();
        console.log(data.nome);
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

  
  
  function ValidaCPF(){	
    var RegraValida=document.getElementById("RegraValida").value; 
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
    if (cpfValido.test(RegraValida) == true)	{ 
    console.log("CPF Válido");	
    } else	{	 
    console.log("CPF Inválido");	
    }
      }
    function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
    function fMascEx() {
  obj.value=masc(obj.value)
  }
  
     function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
			  


	

	
