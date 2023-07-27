//Variáveis(são como caixas) são espaços que vai armazenar uma informações.
var nomeCompleto = "Rafael Henrique Xavier Trombin";
var a = 2;
var b = 3;

//Resultado da conta
var soma = a+b;
var multi = a*b;

//Exibição do resultado alert
alert(soma);

//Exibir resultado no console
console.log (nomeCompleto);
console.log(multi);

//function
function subtrair(num1, num2) {
  if (num1 < num2) {
    return "Não foi possível subtrair";
  } else {
    return num1 - num2;
  }
}

function dividir(num1, num2) {
  if (num2 <= 0) {
    return "Não foi possível dividir";
  } else {
    return num1 / num2;
  }
}

console.log(subtrair(8, 3)); // Saída: 5
console.log(subtrair(3, 8)); // Saída: "Não foi possível subtrair"

console.log(dividir(10, 2)); // Saída: 5
console.log(dividir(10, 0)); // Saída: "Não foi possível dividir"

let alimentos = [
  { nome: "maçã", cor: "vermelha", peso: 100, tipo: "fruta" },
  { nome: "banana", cor: "amarela", peso: 120, tipo: "fruta" },
  { nome: "cenoura", cor: "laranja", peso: 80, tipo: "verdura" },
  { nome: "alface", cor: "verde", peso: 50, tipo: "verdura" },
  { nome: "batata", cor: "marrom", peso: 200, tipo: "legume" }
];

console.log(alimentos);

function mostrarNomesFrutas(alimentos) {
  alimentos.forEach(function(alimento) {
    if (alimento.tipo === "fruta") {
      console.log(alimento.nome);
    }
  });
}

function mostrarQuantidadeAlimentosPorTipo(alimentos) {
  let contadorFrutas = 0;
  let contadorVerduras = 0;
  let contadorLegumes = 0;

  alimentos.forEach(function(alimento) {
    if (alimento.tipo === "fruta") {
      contadorFrutas++;
    } else if (alimento.tipo === "verdura") {
      contadorVerduras++;
    } else if (alimento.tipo === "legume") {
      contadorLegumes++;
    }
  });

  console.log("Frutas: " + contadorFrutas);
  console.log("Verduras: " + contadorVerduras);
  console.log("Legumes: " + contadorLegumes);
}
