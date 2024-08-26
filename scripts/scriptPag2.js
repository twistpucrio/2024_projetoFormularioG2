function limpar(){
    let text = document.querySelector("#conteudo");
    let botao = document.getElementsByName("verif");
    text.value = "";

    for (let el of botao){
        el.checked = false;
    }
}

function funcao(texto,regex){
    const exp = regex;
    let resp = texto.match(exp);
    let cont = 0;
    if(resp!=null){
        for( let el of resp){
            cont+=1;
        }
        return cont;
    }
    return null;
}

/**acento não é considerado caractere especial */
function especiais(texto){
    const exp = /[\s!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/g;
    return funcao(texto,exp);
}

function minusculas(texto){
    const exp = /[a-z]/g;
    return funcao(texto,exp);
}

function numerico(texto){
    const exp = /[0-9]/g;
    return funcao(texto,exp);
}

function maiuscula(texto){
    const exp = /[A-Z]/g;
    return funcao(texto,exp);
}

function validacao(opcao) {
    let text = document.querySelector("#conteudo").value;
    let result;
    let xpto;
    if (opcao == "caracEsp") {
        result = especiais(text);
        xpto = "Caracteres Especiais";
    } 
    else if (opcao == "min") {
        result = minusculas(text);
        xpto = "Letras Minúsculas";
    } 
    else if (opcao == "num") {
        result = numerico(text);
        xpto = "Dígitos Numéricos";
    } 
    else if (opcao == "mai") {
        result = maiuscula(text);
        xpto = "Letras Maiúsculas";
    }
    
    if (result == null){
        alert("Padrão " + xpto + " não encontrado.");
    }
    else{
        alert("Padrão " + xpto + " encontrado.\nQuantidade de ocorrências: " + result +".");
    }
}

window.addEventListener("load", function(){
    let btnLimpar = document.querySelector("#btnLimpar");
    let btnValidar = document.querySelector("#btnValidar");

    btnLimpar.addEventListener("click",function(){
        limpar();
    });

    btnValidar.addEventListener("click",function(){
    let botao = document.getElementsByName("verif");

    for (opcao of botao){
        if(opcao.checked){
            validacao(opcao.value);
        };
    }
    });
}) ; 