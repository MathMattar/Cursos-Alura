import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  // Também pode ser feito assim
  //const css = { backgroundColor: props.corSecundaria}
  //Agora basta chamar a variavel dentro da propriedade style, desta forma, style={css}

  return (
    // Também pode usar o operador ternário subistituindo `&&` por `?` e no fim adicionar `: ''`
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
