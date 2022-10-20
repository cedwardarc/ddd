document.querySelector("#ddd").addEventListener("change", buscaAPI);
c = new Array();
function buscaAPI(evento){
	fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(res => res.json())
	.then(ddd => {
		cidades = ddd.cities;
		listaCidades();
	});
}
function listaCidades(){
	l = document.querySelector('ul');
	l.textContent = '';
	c.forEach(cidade =>{
		i = document.createElement('li');
		i.textContent = cidade;
		l.append(item);
	});
}
