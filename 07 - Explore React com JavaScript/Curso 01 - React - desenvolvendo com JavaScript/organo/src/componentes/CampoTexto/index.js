import "./CampoTexto.css";

// Declarações react iniciam com letra maiúscula
const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;

// interpolação de string
// const placeholderModificada = `${props.placeholder}...`;
// Pode adicionar direto a tag placeholder também, entretanto por boas praticas, melhora a legibilidade criando a constante para modificar
