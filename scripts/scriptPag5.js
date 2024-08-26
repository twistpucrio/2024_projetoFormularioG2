function limpar() {
    let nome = document.querySelector("#nome");
    let cpf = document.querySelector("#cpf");
    let data = document.querySelector("#data");
    let usuario = document.querySelector("#usu");
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    let confirmSenha = document.querySelector("#senhaVerif");

    nome.value = "";
    cpf.value = "";
    data.value = "";
    usuario.value = "";
    email.value = "";
    senha.value = "";
    confirmSenha.value = "";
}

/*Não permitir a digitação de números (dígitos numéricos)*/
function nome(){
    let nomePessoa = document.querySelector("#nome").value;

    const exp = /[0-9]/g;
    let resp = exp.test(nomePessoa);

    if (resp){
        alert("O campo Nome não deve conter números (dígitos numéricos) !");
        return false;
    }
    return true;
}

/**Precisamos verificar se tem 11 dígitos numéricos. Deve utilizar a máscara xxx.xxx.xxx-xx.  
 * Não permitir digitar letras e ou caracteres especiais. */

function cpf(){
    const cpfPessoa = document.querySelector("#cpf").value;
    const expNum = /[0-9]/g;
    const expLetrasCarac = /[\W_a-zA-Z]/g;

    let qtdNum = cpfPessoa.match(expNum);
    let cont = 0;
    if(qtdNum!=null){
        for( let num of qtdNum){
            cont+=1;
        }
    }

    let resp = expLetrasCarac.test(cpfPessoa);
    if( (resp == true) || (cont!=11)){
        alert("O campo CPF deve conter números 11 numeros e não conter letras ou caracteres especiais!");
        return false;
    }
    return true;
}

/**Solicita a data de nascimento do usuário padrão dd/mm/yyyy, ou seja, dia com dois dígitos, 
 * mês com dois dígitos e ano com 4 dígitos, todos separados por barras. 
 * Não permitir a digitação de outros caracteres além desses e dados fora desse padrão. */


function dataNasc(){
    let dataPessoa = document.querySelector("#data").value;
    const expData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    let resp = expData.test(dataPessoa);

    if (!resp){
        alert("O campo dt Nasc deve estar no padrão dd/mm/yyyy !");
        return false;
    }
    return true;    

}

/**Não permitir começar com números, mas pode haver números no final. Não permitir espaço em branco, 
 * os únicos caracteres especiais que pode ser utilizado é underscore e o ponto final, os demais são proibidos,
 * não permitir letras maiúsculas. obs: também não permite acento*/

function usuario(){
    let usuarioPessoa = document.querySelector("#usu").value;

    const expInicioNum = /^[^\d]/;
    const expEsp = /^[a-z0-9._]+$/;
    let erro = 1;

    if (!expInicioNum.test(usuarioPessoa)) {
        alert("O campo Usuário não deve começar com números !");
        erro = 0;
    }

    if (!expEsp.test(usuarioPessoa)) {
        alert("O campo Usuário só deve conter letras minúsculas, números, underscore (_) ou ponto final (.) !");
        erro = 0;;
    }

    if(erro){
        return true;
    }
    else{
        return false;
    }
 
}

/**todas as letras em minúsculo, os caracteres especiais permitidos são ponto final, underscore e um arroba. 
 * Deve haver algum texto antes e depois da arroba. obs: também não permite acento*/

function email(){
    let emailPessoa = document.querySelector("#email").value;
    const expEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]{2,}$/;
    let resp = expEmail.test(emailPessoa);
    
    if (!resp){
        alert(" O campo email deve estar no padrão algumacoisa@algumacoisa.algo\n\nTodas as letras em minúsculo, os caracteres especiais permitidos são ponto final, underscore e um arroba.\n\nDeve haver algum texto antes e depois da arroba.");
        return false;
    }
    return true;    
}

/**Limitará quantidade de caracteres (mínimo 8; máximo 15). Deve haver pelo menos uma letra maiúscula, 
 * um número e um caractere especial, não permitir o número zero.*/

function senha() {
    const senhaPessoa = document.querySelector("#senha").value;
    const expMai = /[A-Z]/g;
    const expNum = /[0-9]/g; 
    const expEsp = /[\s!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/g;
    const expZero = /0/g;  
    let  erro = 1;
    
    if (senhaPessoa.length < 8 || senhaPessoa.length > 15) {
        alert("A senha deve ter entre 8 e 15 caracteres!");
        erro = 0;
    }

    if (!expMai.test(senhaPessoa)) {
        alert("A senha deve conter pelo menos uma letra maiúscula!");
        erro = 0;
    }

    if (!expNum.test(senhaPessoa)) {
        alert("A senha deve conter pelo menos um número (o zero não é permitido)!");
        erro = 0;
    }

    if (expZero.test(senhaPessoa)) {
        alert("A senha deve não deve conter 0!");
        erro = 0;
    }

    if (!expEsp.test(senhaPessoa)) {
        alert("A senha deve conter pelo menos um caractere especial!");
        erro = 0;
    }

    if(erro){
        return true;
    }
    else{
        return false;
    } 
}


/**Deve haver uma verificação se o segundo campo da senha está igual ao primeiro. */
function confirmSenha(){
    const senha = document.querySelector("#senha").value;
    const senhaVerif = document.querySelector("#senhaVerif").value;

    if (senha != senhaVerif) {
        alert("As senhas devem estar iguais!");
        return false;
    }

    return true;
}

/**nome() && cpf() && dataNasc() && usuario() && email() && senha() && confirmSenha() */
function validarRegrasForm(){
    if(nome() && cpf() && dataNasc() && usuario() && email() && senha() && confirmSenha() ){
        alert("Formulário de cadastro enviado !!!");
    }
}

window.addEventListener("load", function(){
    let btnLimpar = document.querySelector("#btnLimpar");
    let btnSubmeter = document.querySelector("#btnSubmeter");

    btnLimpar.addEventListener("click",function(){
        limpar();
    });

    btnSubmeter.addEventListener("click",function(){
        validarRegrasForm();
    });
});