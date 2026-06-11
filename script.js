function gerarLink() {

    let nome = document.getElementById("name").value;
    let ip = document.getElementById("ip").value;
    let porta = document.getElementById("port").value;

    if (!nome || !ip || !porta) {
        alert("Preencha todos os campos.");
        return;
    }

    let linkCompartilhar =
        window.location.origin +
        window.location.pathname +
        "?name=" + encodeURIComponent(nome) +
        "&ip=" + encodeURIComponent(ip) +
        "&port=" + encodeURIComponent(porta);

    document.getElementById("resultado").innerHTML = `
        <h3>Link Compartilhável</h3>

        <textarea
            id="linkGerado"
            readonly
            style="width:100%;height:80px;">${linkCompartilhar}</textarea>

        <br><br>

        <button onclick="copiarLink()">
            📋 Copiar Link
        </button>

        <p id="mensagemCopia"></p>
    `;
}

function copiarLink() {

    const texto =
        document.getElementById("linkGerado").value;

    navigator.clipboard.writeText(texto);

    const mensagem =
        document.getElementById("mensagemCopia");

    mensagem.innerHTML =
        "✅ Link copiado com sucesso!";

    setTimeout(() => {
        mensagem.innerHTML = "";
    }, 3000);
}

const params = new URLSearchParams(window.location.search);

if (
    params.has("name") &&
    params.has("ip") &&
    params.has("port")
) {

    let nome = params.get("name");
    let ip = params.get("ip");
    let porta = params.get("port");

    window.location.href =
        "minecraft:?addExternalServer=" +
        nome + "|" + ip + ":" + porta;
}
