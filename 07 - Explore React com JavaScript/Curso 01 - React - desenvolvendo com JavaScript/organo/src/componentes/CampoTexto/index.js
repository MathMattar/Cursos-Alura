import './CampoTexto.css' 

// Declarações react iniciam com letra maiúscula

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto

// interpolação de string
// const placeholderModificada = `${props.placeholder}...`;
// Pode adicionar direto a tag placeholder também, entretanto por boas praticas, melhora a legibilidade criando a constante para modificar
