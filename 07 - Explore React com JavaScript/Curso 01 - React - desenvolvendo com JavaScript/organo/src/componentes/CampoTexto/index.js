import "./CampoTexto.css";

// Declarações react iniciam com letra maiúscula
const CampoTexto = (props) => {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;

// interpolação de string
// const placeholderModificada = `${props.placeholder}...`;
// Pode adicionar direto a tag placeholder também, entretanto por boas praticas, melhora a legibilidade criando a constante para modificar
