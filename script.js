var area = document.getElementById('area');

function entrar() {
    var nome = prompt("Digite seu nome");

    if (nome === '' || nome === null) {
        alert("Algo não procede");
        area.innerHTML = "Clique no botão para acessar"
    } else {
        //area.innerhyml = "Clique no botão para acessar..."
        area.innerHTML = "Bem vindo, " + nome + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);
    }

}

function sair() {
    alert("Até mais meu consagrado!")
    area.innerHTML = "Você foi embora";
}

//criar uma função com parametros
function mediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2;

    if (media >= 6) {
        console.log("Que maravilha, você passou com média: " + media);
    } else if (media < 6) {
        console.log("Infelizmente você foi reprovado, sua média foi: " + media);
    }
}

function aluno(nome, curso) {
    var mensagem = "Seja bem-vindo, " + nome + " ao curso " + curso;
    console.log(mensagem);
}
