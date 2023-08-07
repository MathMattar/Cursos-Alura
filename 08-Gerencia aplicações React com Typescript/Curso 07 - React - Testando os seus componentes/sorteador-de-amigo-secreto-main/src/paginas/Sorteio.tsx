import { useState } from "react"
import Card from "../componentes/Card"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"
import estilos from './Sorteio.module.scss'

const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoScreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (<Card>
        <section className={estilos.container}>
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDavez"
                    id="participanteDavez"
                    placeholder="Selecione o participante"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione o participante</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button className={estilos.btn}>Sortear</button>
            </form>
            {amigoScreto && <p className={estilos.resultado} role="alert">{amigoScreto}</p>}
            <footer>
                <img src="/imagens/aviao.png" className={estilos.imagem} alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}

export default Sorteio