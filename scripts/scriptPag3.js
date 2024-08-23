function limpar(){
    let campoArquivo = document.querySelector("#arquivo");
    campoArquivo.value = "";
    
    let selecao = document.getElementsByName("seletor");

    for (let el of selecao){
        el.checked = false;
    }

}

window.addEventListener("load", function(){
    let btnLimpar = document.querySelector('#btnLimpa');

    btnLimpar.addEventListener("click", function(){
            limpar();
    });


});