function limpar(){
    let campoArquivo = document.querySelector("#arquivo");
    campoArquivo.value = "";
    
    let selecao = document.getElementsByName("seletor");

    for (let el of selecao){
        el.checked = false;
    }

}

function validarNomeArquivo(arquivo) {
    let caminho = arquivo.value.split("\\");
    let nomeArquivo = caminho[caminho.length - 1].split(".")[0]; 

    let regex = /^[A-Z][A-Za-z0-9_]{7,14}$/;

    if (regex.test(nomeArquivo)) {
        alert("Nome do arquivo está dentro das regras.");
        return true;
    } else {
        alert("Nome do arquivo não está dentro das regras,tente modificá-lo para submetê-lo.");
        return false;
    }
}

function validarExtensao(arquivo) {
    if (!validarNomeArquivo(arquivo)) {
        return; 
    }

    let caminho = arquivo.value.split("\\");
    let indice = caminho.length - 1;
    let comp = caminho[indice].split(".");
    let ext = comp[comp.length - 1].toLowerCase();

    // Obtendo todas as extensões selecionadas
    let selecoes = document.querySelectorAll('input[name="seletor"]:checked');
    if (selecoes.length === 0) {
        alert("Por favor, selecione ao menos uma extensão esperada.");
        return;
    }

    // Verificando se a extensão do arquivo corresponde a alguma das seleções
    let correspondencia = false;
    for (let selecao of selecoes) {
        let extensaoEsperada = selecao.value.toLowerCase();
        if (ext === extensaoEsperada) {
            correspondencia = true;
            break;
        }
    }

    if (correspondencia) {
        alert("Extensão igual à selecionada.");
    } else {
        alert("Extensão do arquivo diferente da selecionada, verifique para submetê-lo.");
    }
}


window.addEventListener("load", function(){
    let btnLimpar = document.querySelector('#btnLimpa');
    let btnSubmeter = document.querySelector("#btnSubmete")

    btnLimpar.addEventListener("click", function(){
            limpar();
    });
    
    btnSubmeter.addEventListener("click", function(){
            let arquivo = document.querySelector("#arquivo");   
            validarExtensao(arquivo)
    })


});