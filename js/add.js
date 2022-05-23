

  var btnEnviar = document.querySelector(".submit");
  btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector(".form");

    var nome = form.name.value;
    var data = form.data.value;
    var tel = form.tel.value;
    var cpf = form.cpf.value;
    var cep = form.cep.value;
    var rua = form.rua.value;
    var log = form.logradouro.value;
    var cidade = form.cidade.value;
    var estado = form.uf.value;

    var clienteTr = document.createElement("tr");
    
    var idTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var telTd = document.createElement("td");
    var cpfTd = document.createElement("td");
    var cepTd = document.createElement("td");
    var ruaTd = document.createElement("td");
    var logTd = document.createElement("td");
    var cidadeTd = document.createElement("td");
    var estadoTd = document.createElement("td");

    nomeTd.textContent = nome;
    dataTd.textContent = data;
    telTd.textContent = tel;
    cpfTd.textContent = cpf;
    cepTd.textContent = cep;
    ruaTd.textContent = rua;
    logTd.textContent = log;
    cidadeTd.textContent = cidade;
    estadoTd.textContent = estado;

    clienteTr.appendChild(idTd);
    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(dataTd);
    clienteTr.appendChild(telTd);
    clienteTr.appendChild(cpfTd);
    clienteTr.appendChild(cepTd);

    var tabela = document.querySelector("#tabela-item");

    tabela.appendChild(clienteTr);
  })