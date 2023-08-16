import { render, screen } from '@testing-library/react';
import Extrato from '.';

test('Deve renderizar uma lista de transaçöes', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];
  render(<Extrato transacoes={transacoes} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});
