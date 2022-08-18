const cpf = document.getElementById("CPF").value;

function validaCPF(cpf) {
	const valid=true
	const invalid=false
  var Soma = 0;
  var Resto;

  var strCPF = String(cpf).replace(/[^\d]/g, "");
  console.log(strCPF);
  if (strCPF.length !== 11) return console.log("false");

  if (
    [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ].indexOf(strCPF) !== -1
  )
    {cpf = document.getElementById("CPF").value="";}

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;

  if (Resto != parseInt(strCPF.substring(9, 10))){
	cpf = document.getElementById("CPF").value="";
  }

  Soma = 0;

  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;

  if (Resto != parseInt(strCPF.substring(10, 11))){
	cpf = document.getElementById("CPF").value="";
	alert("CPF inválido")
  } ;

  return console.log('true');
}
