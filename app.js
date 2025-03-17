// Array para guardar os nomes dos amigos inseridos no jogo
let amigoSecreto = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let digito = document.getElementById("amigo");
    let nomeDoAmigoSecreto = digito.value.trim();

    // Regex para permitir apenas letras e evitar números ou caracteres especiais
    const somenteLetras = /^[a-zA-Záàâãéèêíïóôõöúçñ ]+$/i;

    // Validações
    if (nomeDoAmigoSecreto === '') {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (!somenteLetras.test(nomeDoAmigoSecreto)) {
        alert("Entrada inválida. Digite apenas letras.");
        return;
    }

    if (amigoSecreto.includes(nomeDoAmigoSecreto)) {
        alert("Este nome já foi adicionado. Digite um nome diferente.");
        return;
    }

    // Adiciona o nome à lista de amigos secretos
    amigoSecreto.push(nomeDoAmigoSecreto);

    // Limpa o campo de entrada
    digito.value = '';

    // Atualiza a lista visível
    limparMenu();
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("Por favor, insira os nomes para iniciar o sorteio.");
        return;
    }

    if (amigoSecreto.length === 1) {
        alert("Você precisa adicionar pelo menos dois nomes para realizar o sorteio.");
        return;
    }

    // Sorteia um nome aleatoriamente
    let sorteador = Math.floor(Math.random() * amigoSecreto.length);
    let nomePessoaSorteada = amigoSecreto[sorteador];

    // Exibe o resultado
    let resultadoDoAmigoSecreto = document.getElementById("resultado");
    resultadoDoAmigoSecreto.innerHTML = "Seu amigo secreto é " + nomePessoaSorteada;
}

function limparMenu() {
    let listaTotalAmigos = document.getElementById("listaAmigos");
    listaTotalAmigos.innerHTML = '';

    // Cria a lista de amigos inseridos
    amigoSecreto.forEach(nome => {
        let lista = document.createElement("li");
        lista.textContent = nome;
        listaTotalAmigos.appendChild(lista);
    });
}