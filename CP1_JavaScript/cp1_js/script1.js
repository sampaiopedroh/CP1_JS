    var nome = window.prompt('Qual o nome do vinho ?');
    var tipo = window.prompt('Qual o tipo do vinho ?');
    var safra = window.prompt('Qual a safra do vinho ?');
    var preco = window.prompt('Qual o preco do vinho');
function add_vinho () {
    var novosVinhos = [nome, tipo, safra, preco];
    console.log(novosVinhos);
}

function mostra_catalogo() {
    var res = document.getElementById('lista_vinho')
    res.innerHTML = `<p>O nome do vinho é <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>O tipo do vinho é <mark>${tipo}</mark>.</p>`
    res.innerHTML += `<p>A safra do vinho é <mark>${safra}</mark>.</p>`
    res.innerHTML += `<p>O preço do vinho é <mark>R$ ${preco}</mark>.</p>`
}