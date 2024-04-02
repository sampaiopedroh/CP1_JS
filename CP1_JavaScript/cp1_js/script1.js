const novoVinho = [nome, tipo, safra, preco];
function add_vinho() {
    nome = window.prompt('Qual o nome do vinho');
    tipo = window.prompt('Qual o tipo do vinho ?');
    safra = window.prompt('Qual a safra do vinho ?');
    preco = window.prompt('Qual o preço do vinho ?');
}
function mostra_vinho() {
    var res = document.getElementById('vinho')
    res.innerHTML = `<p>O nome do vinho é <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>O tipo do vinho é <mark>${tipo}</mark>.</p>`
    res.innerHTML += `<p>A safra do vinho é <mark>${safra}</mark>.</p>`
    res.innerHTML += `<p>O preço do vinho é <mark>R$ ${preco}</mark>.</p>`
}
