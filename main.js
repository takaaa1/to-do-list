const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

// Função para adicionar a tarefa no HTML
function add() {
  // Retornar alerta caso não tenha nada escrito
  if (inputText.value === "") {
    alert("Você precisa escrever algo!");
  } else {
    // Criar lista e dar append no ul
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);

    // Criar span com ("\u00d7" -> código do 'x')
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // Limpar o campo
  inputText.value = "";
  saveLocal();
}

listContainer.addEventListener(
  "click",
  function (e) {
    // Se clicar na tarefa -> marca/desmarca
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveLocal();
    }
    // Se clicar no 'x' -> exclui
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveLocal();
    }
  },
  // Terceiro argumento para tratar na fase de propagação
  false
);

// Salvar a lista no localStorage
function saveLocal() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Mostrar a lista salva do localStorage
function showSaved() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showSaved();
