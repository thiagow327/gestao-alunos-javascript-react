import CampoTexto from "../CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para cadastrar um novo aluno</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do aluno" />
                <CampoTexto label="Idade" placeholder="Insira a idade do aluno" />
                <CampoTexto label="Observação de Saúde" placeholder="Digite aqui qualquer observação de saúde da criança, como asma, autismo, epilepsia, etc" />
                <CampoTexto label="Endereço" placeholder="Digite o endereço do aluno" />

                <CampoTexto label="Nome do Primeiro Responsável" placeholder="Digite o nome do primeiro responsável" />
                <CampoTexto label="Celular do Primeiro Responsável" placeholder="Digite o celular do primeiro responsável" />
                <CampoTexto label="Nome do Segundo Responsável" placeholder="Digite o nome do segundo responsável" />
                <CampoTexto label="Celular do Segundo Responsável" placeholder="Digite o celular do segundo responsável" />
                <CampoTexto label="Valor da Mensalidade" placeholder="Insira o valor da mensalidade" />
            </form>
        </section>
    )
}

export default Formulario