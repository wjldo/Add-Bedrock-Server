function gerarLink(){

    let nome = document.getElementById("name").value;
    let ip = document.getElementById("ip").value;
    let porta = document.getElementById("port").value;

    let linkCompartilhar =
        window.location.origin +
        window.location.pathname +
        "?name=" + encodeURIComponent(nome) +
        "&ip=" + encodeURIComponent(ip) +
        "&port=" + encodeURIComponent(porta);

    let linkMinecraft =
        "minecraft:?addExternalServer=" +
        nome + "|" + ip + ":" + porta;

document.getElementById("resultado").innerHTML = `
    <h3>Link Compartilhável</h3>

    <textarea
        id="linkGerado"
        style="width:100%;height:70px;"
        readonly>${linkCompartilhar}</textarea>

    <br><br>

    <button onclick="copiarLink()">
        📋 Copiar Link
    </button>

    <p id="mensagemCopia"></p>
`;
}

const params = new URLSearchParams(window.location.search);

if(
    params.has("name") &&
    params.has("ip") &&
    params.has("port")
){

    let nome = params.get("name");
    let ip = params.get("ip");
    let porta = params.get("port");

    window.location.href =
    "minecraft:?addExternalServer=" +
    nome + "|" + ip + ":" + porta;
}
function copiarLink() {

    const texto =
        document.getElementById("linkGerado").value;

    navigator.clipboard.writeText(texto);

    const msg =
        document.getElementById("mensagemCopia");

    msg.innerHTML = "✅ Link copiado com sucesso!";

    setTimeout(() => {
        msg.innerHTML = "";
    }, 3000);
}
