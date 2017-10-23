// var botao = document.getElementById("btnCadastrar");
// botao.onclick = function(event){
//     event.preventDefault();
// };

var comecou = false;
var letrasChutadas = [];
var palavra="";

$("#btnCadastrar").click(function (event) {
    event.preventDefault();
    // alert("mensagem marota");  

    //Declarar variavel paralavra com o valor do input
    palavra = $("#palavra").val();
    //Verificar se o campo está vazio
    if (palavra === "") {
        //Se estiver vazio mostra uma mensagem de erro
        alert("Por favor preencha o campo");
    } else {
        //Se não estiver vazio montar os underlines

        //Se não estiver vazio mostrar a tela forca
        //Adicionar classe na tela da forca
        $("#forca").addClass("visivel");
        //Remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
    }

    for (i = 0; i < palavra.length; i++) {
        var span = $("<span>" + palavra[i] + "</span>");
        span.appendTo(".letras");
    }

    comecou = true;
});



$(document).keydown(function (event) {

    if (comecou) {
        var letra = event.key;
        //Validando se é apenas uma letra
        if(letra.length>1){
            return;
        }
        //Registrar a letra utilizada
       
        //Vai verificar se a letra ja foi utilizada
        if(letrasChutadas.indexOf(letra) != -1){
            return;
        }
        letrasChutadas.push(letra); //acrescenta infos dentro do array (sem sobrescrever - de maneira incremental)
       
        var span = $("<span>" + letra + "</span>");
        span.appendTo(".letras-usadas");
  
        //Letra existe na palavra cadastrada?
        if(palavra.indexOf(letra) != -1){
        //Se sim 
        //mostra no campo a letra correspondente
        for (var i=0; i<palavra.length; i++){
            var letra2 = palavra[i];
            //Se a letra que pressionei for igual a letra da palavra
            if(letra == letra2){
                //i é o índice que temos que mostrar na tela
                $(".letras span").eq(i).addClass("visivel");
            }
        }
        //Se a palavra estiver completa
        //Mostra o final correto
        }else{
         //Se não 
        //mostra o mebro do boneco
        //Se excede tentativas
        //Mostra a família triste

        }

    }
});

