async function carregarContador() {

    try {

        document.getElementById("contador").innerHTML =
            "🌎 Ferramenta gratuita para a comunidade Minecraft Bedrock ❤️";

    } catch (erro) {

        console.error(erro);
    }
}

document.addEventListener("DOMContentLoaded", carregarContador);

function gerarLink() {

    let nome = document.getElementById("name").value.trim();
    let ip = document.getElementById("ip").value.trim();
    let porta = document.getElementById("port").value.trim();

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
        <h3>🔗 Link Compartilhável</h3>

        <textarea
            id="linkGerado"
            readonly>${linkCompartilhar}</textarea>

        <div class="acoes">

            <button onclick="copiarLink()">
                📋 Copiar Link
            </button>

            <button onclick="abrirLink()">
                🚀 Abrir Link
            </button>

        </div>

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

function abrirLink() {

    const link =
        document.getElementById("linkGerado").value;

    window.open(link, "_blank");
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

    setTimeout(() => {

        window.location.href =
            "minecraft://?addExternalServer=" +
            nome + "|" + ip + ":" + porta;

    }, 1000);
}
