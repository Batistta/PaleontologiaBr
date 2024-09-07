//posteriormente add mais imagens e tags para pesquisar por palavras chaves


let entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado");

function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Retorna a string vazia se a entrada estiver vazia
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function pesquisar() {
    texto = entrada.value;
    let info = "";
    
    for (let dado of dados) {
        if(!texto) //campo vazio
            {
            console.log("Campo vazio");
            info += "<h2>Insira algo para pesquisar</h2>"
            break;
        }
        else{
        if (dado.titulo.includes(capitalizeFirstLetter(entrada.value.trim()))) {
            info += `     
            <div class="item-resultado">
                <h2>
                    <a target="_blank" id="titulo" href="${dado.link}">${dado.titulo}</a>
                </h2>
                <p class="descricao-periodo" id="periodo">${dado.periodo}</p>
        
                <p class="descricao-meta" id="descricao">${dado.descricao}</p>
                <img src="imagem-seres/${dado.imagem}" width="500"><br>
                <a target="_blank" id="link" href="${dado.link}" class="saiba-mais">saiba mais</a>
                
            </div> `;
        }
        else if(dado.periodo.includes(texto) || dado.descricao.includes(texto)){
            info += `     
            <div class="item-resultado">
                <h2>
                    <a target="_blank" id="titulo" href="${dado.link}">${dado.titulo}</a>
                </h2>
                <p class="descricao-periodo" id="periodo">${dado.periodo}</p>
        
                <p class="descricao-meta" id="descricao">${dado.descricao}</p>
                <img src="imagem-seres/${dado.imagem}" width="500"><br>
                <a target="_blank" id="link" href="${dado.link}" class="saiba-mais">saiba mais</a>
            </div> `;
        }
    }
}
    if(info == ""){
        info += "<h2>termo nao encontrado</h2>";
    }
    resultado.innerHTML = info;
}

function sortear(){
    let i = Math.round(Math.random() * (dados.length - 1) * 1)
    console.log(i)
    resultado.innerHTML = `<div class="item-resultado">
    <h2>
        <a target="_blank" id="titulo" href="${dados[i].link}">${dados[i].titulo}</a>
    </h2>
    <p class="descricao-periodo" id="periodo">${dados[i].periodo}</p>

    <p class="descricao-meta" id="descricao">${dados[i].descricao}</p>
    <a target="_blank" id="link" href="${dados[i].link}" class="saiba-mais">saiba mais</a>
</div> `;
}
