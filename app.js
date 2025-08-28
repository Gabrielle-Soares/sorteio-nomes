let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome !== "") {
    amigos.push(nome);
    atualizarLista();
    input.value = "";
  } else {
    alert("Digite um nome válido!");
  }
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  const item = document.createElement("li");
  item.textContent = amigoSorteado;

  resultado.innerHTML = "";
  resultado.appendChild(item);
}
