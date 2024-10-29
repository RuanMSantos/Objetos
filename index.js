let usuario = {
    nomeUsuario: "Ruan",
    senha: "abc",
    estaLogado: true,
} // as propriedades são chaves, e um objeto pode conter outro dentro dele
console.log(usuario);

let cidade = {}; // parametro para criar objeto vazio
cidade.nome = "Mongaguá"; // é possível atribuir valor sem a propriedade existir, e a partir de agora existe
console.log(cidade);

cidade.estado = {
    uf: "São Paulo",
    sigla: "SP",
} // criando um objeto dentro do objeto cidade. A propriedade estado é o proprio objeto

console.log(cidade.estado.sigla); // acessando a propriedade do objeto estado que está dentro de cidade

cidade.bairro = {
    nome: "Jussara",
}

delete cidade.bairro; // para deletar atributos de um objeto
cidade.bairro; // isso não gera um erro
// cidade.bairro.nome; isso gera erro pois não existe o objeto bairro para eu procurar uma propriedade nele
cidade.bairro?.nome; // usando ? o problema é resolvido, pois se caso existir o objeto ele busca o atributo
// caso não tenha ele não busca
// também é possível usar a ? no cidade, desta forma cidade?.bairro?.nome (encadeiamento opcional)


let preco = 503.22;
let quantidade = 1;

let itemComprado = {
    preco,
    quantidade,
} // esse é o atalho de atribuição de propriedade, que facilita nossa vida polpando palavras
// geralmente se escreveria preco: preco, porém por possuirem nomes iguais, o js entende que sua propriedade
// tera o mesmo nome que seu valor

let palavra1 = "dev web"; 
let palavra2 = palavra1; // os dois tem o mesmo valor
palavra2 = "dev c#"; // agora cada um tem seu proprio valor p1 = dev web e p2 = dev c#

let livroPreferido = {
    titulo: "Diário de um banana",
    autor: "Jeff Kinney",
}

let livroEmprestado = livroPreferido;

livroPreferido.autor = "Kbelinho"; // nesse caso o valor foi alterado nas duas variaveis, pois ambas 
// fazem referencia ao mesmo objeto
// atribuíção de valores primitidos gera uma cópia do valor, 
// enquanto atribuíção de objeto é uma cópia da referencia

livroPreferido = null; // limpa apenas livroPreferido, ainda é possível acessar o objeto por livroEmprestado
livroEmprestado = null; // agora é impossível acessar o objeto, pois ninguém faz referência a ele
// com isso, na primeira oportunidade o coletor de lixo da engine de js do navegador vai excluir o objeto

let cor1 = { nome: "vermelho", codigo: "ff0000", };
let cor2 = { nome: "vermelho", codigo: "ff0000", };
let cor3 = cor1;

cor1 == cor2; // false
cor1 == cor3; // true
// quando compara objetos, se eles fazem referencia ao mesmo espaço de memória são true,
// o contrario o tornam diferentes, mesmo que suas propriedades e instancias sejam iguais
// cor1 e cor2 são apenas objetos diferentes que coincidentemente tem atributos e instancias iguais

let sabores = [
    "Morando",
    "Floresta negra",
    "Abacaxi ao vinho",
]; // quando é necessario que suas propriedades mantenham uma ordem especifica, usa-se array
// neste caso o array, nada mais é que um objeto como vimos antes, porém mantem a sequencia e
// não tem chave

sabores[0]; // morango

sabores[3] = "Flocos"; // adicona uma nova propriedade ao objeto dinamicamente

sabores[17] = "Baunilha"; // isso também é possível, porém agora o length é 18, pois o length pega o
// ultimo elemento do indice e acrescenta 1 (array com indices distantes se chama esparço)
// arrays esparços não gasta memórias a mais

let x = [ "string", 22, true, { nome: "testando" }, ]; // não exise problema em misturar tipos de dados

let matriz = [
    [ 0, 2, 4, ],
    [ 1, 3, 5, ],
]; // dessa forma é possível fazer matrizes bidimensionais

let matrizIrreg = [[ 1, 2, 3, ], [ 4, 5 ], "aleatório" ]; // matrizes em js são sempre irregulares

let brinquedos = [ "Woody", "McQueen", "Sid", ];

for (let i = 0; i < brinquedos.length; i++) {
    console.log(brinquedos[i]);
} // percorre o array normalmente

for (let brinquedo of brinquedos){
    console.log(brinquedo);
}; // forma simplificada, semelhante a um foreach. Use esse laço PARA ARRANJOS.

let stringTresPorquinhos = "Prático,Heitor,Cícero";

let arrayTresPorquinhos = stringTresPorquinhos.split(","); // split é separar, no caso, separa pelas vírgulas
// quando criada uma string com varios elementos separados por algo, é possível convertê-los em array
// onde cada posição do índice contém o que vem antes da vírgula

let juncaoTresPorquinhos = arrayTresPorquinhos.join(" & "); // join faz o contário
// pega todo o índice do array e junta colocando entre eles o que foi especificado por você
// Prático & Heitor & Cícero

arrayTresPorquinhos.reverse; // inverte a ordem do array diretamente nele (in place)
// agora se caso eu usar novamente o join, os valores estarão invertidos

let etecs = [];

etecs.push("Itanhaém");
etecs.push("Santos"); // push adiciona o elemento sempre ao final do array
etecs.pop(); // retorna o último elemento e retira ele do array

let armario = [];
armario.push("Caixa do fundo");
armario.push("Caixa do meio");
armario.push("Caixa da frente"); // [ Caixa do fundo, Caixa do meio, Caixa da frente ]

armario.pop(); // Retira Caixa da frente
armario.pop(); // Retira Caixa do meio
armario.pop(); // Retira Caixa do fundo
// comportamento de pilha

let teste = [];

teste.unshift("v1");
teste.unshift("v2"); // unshift adiciona o elemento no início do array

teste.shift(); // remove o primeiro elemento do array, shift significa deslocar, 
// é necessário deslocar todos os elementos pra frente para adiconar outro para um lado para adicionar e para
// o outro para remover
// comportamento em fila

let filaDoPao = [];
filaDoPao.push("Berno");
filaDoPao.push("Garbiel");

filaDoPao.shift(); // retirou Berno da fila

filaDoPao.push("Benevidas");

filaDoPao.shift(); // retirou Garbiel
filaDoPao.shift(); // retirou Benevidas e esvaziou a fila

// arrays em js tem estruturas de dados deque que podem ser trabalhadas tanto como fila quanto como pilha
// manipulando os começos e finais, mas não os meios

// array
// iterables não é um array mas pode acessar seus campos como um
// array-likes não é um array mas possui indice e length
// os três apesar de parecidos são diferentes o que pode levar a uma grande confusão

let nome = "Ermogenes";

nome[4]; // g. É possível acessar o índice
nome.length; // 9. É possível ver o tamanho
// porém não é um array, então comandos como push por exemplo não funcionam.

Array.from(nome); // transforma nome em array, onde cada caractere vira uma posição de índice
// [ "E", "r", "m", "o", "g", "e", "n", "e", "s" ]
// agora é possível usar funções de array

let medalhistas = [ "Peá", "Vinizius", "Zé" ]; // para separar em ouro, prata e bronze da forma comum
// levaria mais tempo e uma sintaxe maior

let ouro = medalhistas[0];
let prata = medalhistas[1];
let bronze = medalhistas[2];

// OPERAÇÃO DESESTRUTURAÇÃO
let [o, p, b] = medalhistas; // dessa forma resumida, cada posição do array vai ser incrementada nas variaveis
// relacionadas a sua posição na sintaxe

// o = Peá
// p = Vinizius
// b = Zé

let [o2] = medalhistas; // possível também, pegar só o primeiro elemento
// o2 = Peá

let [o3,,b3] = medalhistas; // as duas virgulas pula o elemento
// o3 = Peá & b3 = Zé

let [o4, ...demaisMedalhas] = medalhistas; // dessa forma é separado o primeiro indice e os demais são
// colocados em demaisMedalhas
// ... = resto
// o4 = Peá
// demaisMedalhas é um array com o restante = [ Vinizius, Zé ]

// desestruturação de obj
let piloto = { nomePiloto: "Jonas", equipe: "ETEAB", titulos: 0, salario: 500 }

let { nomePiloto, equipe, titulos } = piloto; // é necessario passar o nome das chaves do obj
// essas chaves vão virar variáveis, não precisa declarar na ordem das chaves do obj
// nomePiloto = Jonas
// equipe = ETEAB
// titulos = 0

let { carro = "Fusca" } = piloto; //  dessa forma, se não existir a chave carro ele terá o default "Fusca

let { salario = 40000 } = piloto; // nesse caso, salario = 500, pois essa chave existe em piloto, com isso,
// sobrescreveu o valor default de salario pelo do chave salario

let { titulos: quantidadeTitulos } = piloto; // dessa forma é possível  mudar o nome da variavel e não deixar 
// com o mesmo nome da chave
// primeiro passamos o nome da chave, depois o nome da variável que será guardada

// desestruturação é muito importante pois quando objetos são muito complexos e precisamos apenas
// de certas informações podemos utiliá-la, como no backend por exemplo

