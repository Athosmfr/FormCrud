const prodBtn = document.getElementById('product');
const clientBtn = document.getElementById('client');
const clientTable = document.querySelector('.tabela-cliente');
const prodTable = document.querySelector('.tabela-produto');

clientBtn.addEventListener('click', () => {
	clientBtn.classList.add('active')
  prodBtn.classList.remove('active')
  clientTable.style.display = "flex";
  prodTable.style.display = "none";
})

prodBtn.addEventListener('click', () => {
	prodBtn.classList.add('active')
  clientBtn.classList.remove('active')
  clientTable.style.display = "none";
  prodTable.style.display = "flex";
})
