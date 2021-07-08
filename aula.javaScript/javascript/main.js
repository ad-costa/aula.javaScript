/*
var nome = "Adenilson";
var idade = 27;
var idade2 = "10"
var frase = "Corinthias campeao brasileiro 2021"
//alert("Bem vindo " + nome + ", sua idade é " + idade +" anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2) // vai mostrar tudo junto pq idade2 é uma string
console.log(frase.replace("Corinthias", "Flamengo"))
console.log(frase.toUpperCase()) 
*/

/*
var lista = ["maçã", "pêra", "laraja"];
lista.push("uva");
//lista.pop();

console.log(lista);
//console.log(lista.length);
//.log(lista.reverse());
//console.log(lista.toString()) // transformando o array em string
console.log(lista.join(" - ")) // transforma em string e separa com o caractere desejado
*/

/*var fruta = {
    nome: "maca",
    cor: "vermelha"
};
console.log(fruta.nome) */

/*var frutas = [{
    nome: "maca",
    cor: "vermelha" }, 
{
    nome: "Uva",
    cor: "Roxa"
}];
console.log(frutas)
console.log(frutas[1].nome); */

/*
var idade = prompt("Qual sua idade? "); // pedindo ao usuario para digitar a idade
if(idade>=18){
    alert("Maior de idade");
} else{
    alert("Menor de idade")
};
*/


/*var count = 0;
while(count<5){
    console.log(count);
    count ++;
    //alert(count)
}
*/

/*var count;
for(count=0; count<5; count++){
    console.log(count);
}
*/


/*var d = new Date();
//alert(d.getMonth()+1); // pegando apenas o número do mês, PRECISA ADICIONAR O +1 PQ ELE SEMPRE COMEÇA DO 0
//alert(d.getMinutes()) // minutos
//alert(d.getSeconds()) // segundos
//alert(d.getHours) // horas
//alert(d.getFullYear()) // ano
alert(d.getDay()); //número do dia da semana
*/

/*
function soma (n1, n2){
    return n1 + n2;
}
alert(soma(5,10));
*/

/*function substitui(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
};
alert(substitui("vai Corinthias", "Corinthias", "Flamengo"));
// substituindo o 'corinthias' por 'Flamengo' */


/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    } else{
        validar = false;
    }  
    return validar;
}
var idade = prompt("Qual sua idada? ");
alert(validaIdade(idade)) */


// PRIMEIRO BOTÃO
function botao(){ 
    //alert("Obrigado por clicar");
    document.getElementById("agradece").innerHTML = "Obrigado por clicar"; // pegando o id do h3 e adicionando o texto para aparecer quando clicar no botão

    //console.log(document.getElementById("agradece"));
}


function otherPage(){ 
    document.getElementById("outrapagina").innerHTML = "<u> Obrigado por clicar </u>"; 
}
function redirecionar(){
    //window.open("https://www.youtube.com.br/"); // abre numa nova guia
    window.location.href = "https://www.youtube.com.br/"; // abre na mesma guia
} // clicando no texto sublinhado vai abrir a pagina do youtube em outra guia

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; // forma de fazer sem o 'this' no HTML e sem declar o 'elemento' dentro da função
    //alert("Trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML= "Passe o mouse aqui"; // forma de fazer sem o 'this' no HTML e sem declar o 'elemento' dentro da função
    elemento.innerHTML = "Passe o mouse aqui";
}


function load(){
    alert("Página carregada"); // usando o onload na tag body
}

function funcaoChange(elemento){
    console.log(elemento.value);
} // pegando o valor que tá escolhendo e mostrar no console