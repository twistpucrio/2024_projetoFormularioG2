function limpar(){
    let campoArquivo = document.querySelector("#arquivo");
    campoArquivo.value = "";
    
    let selecao = document.getElementsByName("seletor");

    for (let el of selecao){
        el.checked = false;
    }

}

function validarExtensao(arquivo,extensao){

    caminho = arquivo.value.split("\\");

    alert("Primeira forma: "+
        caminho[caminho.length-1])

        let indice = caminho.length-1;
        let comp = caminho[indice].split(".");
        let ext = comp[comp.length-1];
   
        if(extensao.lower === ext.lower){
           alert("Igual");
        }else{
           alert("Diferente");
        }
   }



window.addEventListener("load", function(){
    let btnLimpar = document.querySelector('#btnLimpa');
    let btnSubmeter = document.querySelector("btnSubmete")

    btnLimpar.addEventListener("click", function(){
            limpar();
    });
    btnSubmeter.addEventListener("click", function(){
            validarExtensao()
    })


});