function limpar(){
    let text = document.querySelector("#conteudo");
    let botao = document.getElementsByName("verif");
    text.value = "";

    for (let el of botao){
        el.checked = false;
    }
}

function especiais(texto){
    const exp = /\W/g;
    let resp = texto.match(exp);
    let cont = 0;
    for( let el of resp){
        cont+=1;
    }
    return cont;
}

function minusculas(texto){
    const exp = /[a-z]/g;
    let cont = 0;
    let resp = texto.match(exp);
    for( let el of resp){
        cont+=1;
    }
    return cont;
}

function numerico(texto){
    const exp = /[0-9]/g;
    let cont = 0;
    let resp = texto.match(exp);
    for( let el of resp){
        cont+=1;
    }
    return cont;
}

function maiuscula(texto){
    const exp = /[A-Z]/g;
    let cont = 0;
    let resp = texto.match(exp);
    for( let el of resp){
        cont+=1;
    }
    return cont;
}

function validacao(opcao) {
    let text = document.querySelector("#conteudo").value;
    let result;
    if (opcao == "caracEsp") {
        result = especiais(text);
    } 
    else if (opcao == "min") {
        result = minusculas(text);
    } 
    else if (opcao == "num") {
        result = numerico(text);
    } 
    else if (opcao == "mai") {
        result = maiuscula(text);
    }
    
    if (result == 0){
        alert("Padrão xpto não encontrado")
    }
    else{
        alert("Padrão xpto encontrado, quantidade de ocorrências " + result +".");
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
    })
})  