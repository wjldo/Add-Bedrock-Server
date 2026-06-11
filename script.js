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
        <textarea style="width:100%;height:70px;">${linkCompartilhar}</textarea>

        <h3>Link Minecraft</h3>
        <textarea style="width:100%;height:70px;">${linkMinecraft}</textarea>
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
