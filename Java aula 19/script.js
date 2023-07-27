// Função para adicionar uma nova tarefa na lista
function adicionarTarefa() {
    const inputTarefa = document.getElementById("tarefa");
    const tarefa = inputTarefa.value.trim();
  
    if (tarefa !== "") {
      const lista = document.getElementById("lista-tarefas");
      const novaTarefa = document.createElement("li");
      novaTarefa.textContent = tarefa;
      lista.appendChild(novaTarefa);
      inputTarefa.value = "";
    }
  }
  
  // Função para visualizar as tarefas da lista no console
  function visualizarTarefas() {
    const listaTarefas = document.querySelectorAll("#lista-tarefas li");
    if (listaTarefas.length > 0) {
      const tarefas = Array.from(listaTarefas).map((tarefa) => tarefa.textContent);
      console.log("Tarefas:");
      console.log(tarefas);
      // Ou use o seguinte código para exibir as tarefas em um alert
      // alert("Tarefas:\n" + tarefas.join("\n"));
    } else {
      console.log("A lista de tarefas está vazia.");
      // Ou use o seguinte código para exibir um alert
      // alert("A lista de tarefas está vazia.");
    }
  }
  