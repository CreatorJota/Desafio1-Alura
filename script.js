const inputTexto = document.querySelector('#input');
const resultado = document.querySelector('#output');

function copiar() {
    navigator.clipboard.writeText(output.value);
    alert("Mensagem Copiada!")
}

function botaoEncriptador() {
    const input = encripitar(inputTexto.value);
    output.value = input;
}

function encripitar(mensagem) {
    var trocas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagem = mensagem.toLowerCase();
    for (let i = 0; i < trocas.length; i++) {
        if (mensagem.includes(trocas[i][0])) {
            mensagem = mensagem.replaceAll(trocas[i][0], trocas[i][1]);
        }
    }
    return mensagem;
}

function desencriptador(mensagemLimpa) {
    var trocas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemLimpa = mensagemLimpa.toLowerCase();
    for (let i = 0; i < trocas.length; i++) {
        if (mensagemLimpa.includes(trocas[i][1])) {
            mensagemLimpa = mensagemLimpa.replaceAll(trocas[i][1], trocas[i][0]);
        }
    }
    return mensagemLimpa;
}

function botaoDesencriptador() {
    const textoDesencripto = desencriptador(inputTexto.value);
    output.value = textoDesencripto;
}
