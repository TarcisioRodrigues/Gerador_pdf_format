
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
        // document.getElementById("CPF").value = data.cpf;
        document.getElementById("entreprise").value = data.nome;
        //  document.getElementById("data").value = dataAtual;
        


      }
    },
  });
};
// const Validar=(CPF)=>{
//   cpfFormat=CPF.replace(/[^0-9]/g, "")
//   console.log(cpfFormat)
//   var Soma;
//   var Resto;
//   Soma = 0;
// if (strCPF == "00000000000") return false;

// for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
// Resto = (Soma * 10) % 11;

//   if ((Resto == 10) || (Resto == 11))  Resto = 0;
//   if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

// Soma = 0;
//   for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
//   Resto = (Soma * 10) % 11;

//   if ((Resto == 10) || (Resto == 11))  Resto = 0;
//   if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
//   return true;

// var strCPF = "12345678909";
// alert(TestaCPF(strCPF));
// }
