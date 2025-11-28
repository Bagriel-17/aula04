console.log("ok");
const enderecoUsuario = {
  rua: document.querySelector("#rua"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  estado: document.querySelector("#estado"),
  regiao: document.querySelector("#região"),
  uf: document.querySelector("#uf"),
  cep: "06401134",
};
async function consultaCEP(cep) {
  const url = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  let cepUsuario = {
    logradouro: resposta.logradouro,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    estado: resposta.estado,
    uf: resposta.uf,
    regiao: resposta.regiao,
  };
  enderecoUsuario.rua.innerText = cepUsuario.logradouro;
  enderecoUsuario.bairro.innerText = cepUsuario.bairro;
  enderecoUsuario.cidade.innerText = cepUsuario.cidade;
  enderecoUsuario.estado.innerText = cepUsuario.estado;
  enderecoUsuario.uf.innerText = cepUsuario.uf;
  enderecoUsuario.regiao.innerText = cepUsuario.regiao;
  console.log(cepUsuario);
}
consultaCEP(enderecoUsuario.cep);
