import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678910);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo",  5000, 10987654321);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 788994545, "456");
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);