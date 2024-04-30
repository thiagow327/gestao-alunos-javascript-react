import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {

    const escolas = [
        'EMEI Tito Lívio Ferreira',
        'EMEF Embaixador Raul Fernandes',
        'EMEF Geraldo Celso Júnior',
        'E.E. Prof Galdino Lopes Chagas',
        'CEI de Nova Vida',
        'CEI Vila Nina',
        'CEI Pequeno Anjo',
        'CEI Castelo Branco',
        'CEI Pingo de Orvalho',
        'CEI Novo Amanhecer',
    ]
    const turnos = [
        'Manhã',
        'Tarde',
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para cadastrar um novo aluno</h2>
                <div className="bloco-esquerda">
                    <CampoTexto label="Nome" placeholder="Digite o nome do aluno" />
                    <CampoTexto label="Idade" placeholder="Insira a idade do aluno" />
                    <CampoTexto label="Observação de Saúde" placeholder="Digite aqui qualquer observação de saúde da criança, como asma, autismo, epilepsia, etc" />
                    <CampoTexto label="Endereço" placeholder="Digite o endereço do aluno" />
                    <ListaSuspensa label="Escola" itens={escolas} />
                    <ListaSuspensa label="Turno" itens={turnos} />
                </div>

                <div className="bloco-direita">
                    <CampoTexto label="Nome do Primeiro Responsável" placeholder="Digite o nome do primeiro responsável" />
                    <CampoTexto label="Celular do Primeiro Responsável" placeholder="Digite o celular do primeiro responsável" />
                    <CampoTexto label="Nome do Segundo Responsável" placeholder="Digite o nome do segundo responsável" />
                    <CampoTexto label="Celular do Segundo Responsável" placeholder="Digite o celular do segundo responsável" />
                    <CampoTexto label="Valor da Mensalidade" placeholder="Insira o valor da mensalidade" />
                <Botao texto="Criar Aluno" />
                </div>
                
            </form>
        </section>
    )
}

export default Formulario