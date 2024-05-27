import React from 'react';
import Footer from './Footer';

function Tabela() {

  return (
    <>
    <div className="container">
      <h1 class="text-center mt-3 mb-3">Tabela de movimentações detalhadas</h1>
      <table className="table" class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Transação</th>
            <th scope="col">Data/Hora</th>
            <th scope="col">Movimentação</th>
            <th scope="col">Forma de pagamento</th>
            <th scope="col">Saldo anterior</th>
            <th scope="col">Novo saldo</th>
            <th scope="col">Movimentação Geral</th>
          </tr>
        </thead>
        <tbody>
        <tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0012</td>
    <td class="text-center">10/02/2024</td>
    <td class="text-center">R$ 590,321</td>
    <td class="text-center">PIX</td>
    <td class="text-center">R$ 178,155</td>
    <td class="text-center">R$ 768,476</td>
    <td class="text-center">R$ 1.715.878</td>
</tr>
<tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0013</td>
    <td class="text-center">11/02/2024</td>
    <td class="text-center">R$ 654,231</td>
    <td class="text-center">PIX</td>
    <td class="text-center">R$ 113,245</td>
    <td class="text-center">R$ 767,476</td>
    <td class="text-center">R$ 1.880.231</td>
</tr>
<tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0014</td>
    <td class="text-center">13/04/2024</td>
    <td class="text-center">R$ 803,876</td>
    <td class="text-center">Transferência bancária</td>
    <td class="text-center">R$ 289,597</td>
    <td class="text-center">R$ 1.093,473</td>
    <td class="text-center">R$ 1.897.273</td>
</tr>
<tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0015</td>
    <td class="text-center">14/04/2024</td>
    <td class="text-center">R$ 1.008,549</td>
    <td class="text-center">PIX</td>
    <td class="text-center">R$ 888,724</td>
    <td class="text-center">R$ 1.897,273</td>
    <td class="text-center">R$ 1.980.273</td>
</tr>
<tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0016</td>
    <td class="text-center">18/04/2024</td>
    <td class="text-center">R$ 1.014,724</td>
    <td class="text-center">PIX</td>
    <td class="text-center">R$ 882,549</td>
    <td class="text-center">R$ 1.897,273</td>
    <td class="text-center">R$ 2.123.273</td>
</tr>
<tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0017</td>
    <td class="text-center">25/04/2024</td>
    <td class="text-center">R$ 1.160,175</td>
    <td class="text-center">Transferência bancária</td>
    <td class="text-center">R$ 737,098</td>
    <td class="text-center">R$ 1.897,273</td>
    <td class="text-center">R$ 2.567.279</td>
</tr>
<tr>
    <td class="text-center">MOVIMENTAÇÃO BANCÁRIA 0018</td>
    <td class="text-center">01/05/2024</td>
    <td class="text-center">R$ 1.173,965</td>
    <td class="text-center">Transferência bancária</td>
    <td class="text-center">R$ 723,308</td>
    <td class="text-center">R$ 1.897,273</td>
    <td class="text-center">R$ 3.101.273</td>
</tr>
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  );

  
}

export default Tabela