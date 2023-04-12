import MuiAlert from "@material-ui/lab/Alert";
import Produto from "components/Produto";
import { useHistory } from "react-router-dom";
import { usePagamentoContext } from "common/context/Pagamento";
import { useCarrinhoContext } from "common/context/Carrinho";
import { UsuarioContext } from "common/context/Usuario";

import { useContext, useMemo, useState } from "react";

import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotalCarrinho, comprar } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const { formaPagamento, tiposPagamento, mudarFormaPagamento } =
    usePagamentoContext();
  const history = useHistory();
  const total = useMemo(
    () => saldo - valorTotalCarrinho,
    [saldo, valorTotalCarrinho]
  );

  return (
    <Container>
      <Voltar onClick={() => history.goBack()} />

      <h2>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id} />
      ))}

      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formaPagamento.id}
          onChange={(e) => mudarFormaPagamento(e.target.value)}
        >
          {tiposPagamento.map((pagamento) => (
            <MenuItem value={pagamento.id} key={pagamento.id}>
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>

      <TotalContainer>
        <div>
          <h2>Total no Carrinho:</h2>
          <span>R$ {valorTotalCarrinho.toFixed(2)}</span>
        </div>

        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2)}</span>
        </div>

        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </TotalContainer>

      <Button
        onClick={() => {
          setOpenSnackbar(true);
          comprar();
        }}
        disabled={total < 0 || carrinho.length === 0}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
