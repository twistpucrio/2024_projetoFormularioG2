function substituir(){
    let campoTexto = document.querySelector("#conteudo");
    let barraPesquisa=  document.querySelector("#barrapesquisa");
    let barraSubstitui =  document.querySelector("#barrasubstitui");

    let textoOriginal = campoTexto.value;
    let padraoPesquisa = barraPesquisa.value;
    let textoSubstituicao = barraSubstitui.value;

    let resultado = textoOriginal.replace(new RegExp(padraoPesquisa, "g"), textoSubstituicao);
    alert("Resultado da substituição:\n " + resultado);

   // exemplo com expressão regular
    let resultadoRegex = textoOriginal.replace(/\w+/,"removido");
    alert("Resultado da substituição com expressão regular: \n"+resultadoRegex);
}

function limpar(){
    let campoTexto = document.querySelector("#conteudo");
    campoTexto.value = "";
    
    let barraPesquisa=  document.querySelector("#barrapesquisa");
    barraPesquisa.value = "";
    
    let barraSubstitui =  document.querySelector("#barrasubstitui");
    barraSubstitui.value = "";

}

window.addEventListener("load", function(){
    let btnSubmeter = document.querySelector("#btnsubmete");
    let btnLimpar = document.querySelector('#btnlimpa');

    btnSubmeter.addEventListener("click", function(){
        substituir();
    });

    btnLimpar.addEventListener("click", function(){
            limpar();
    });


});