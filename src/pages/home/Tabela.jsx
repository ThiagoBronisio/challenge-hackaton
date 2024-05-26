import React from 'react';

function Tabela() {
  const dados = [
    { id: 1, nome: 'Thiago', email: 'thiago@example.com' },
    { id: 2, nome: 'Maria', email: 'maria@example.com' },
    { id: 3, nome: 'João', email: 'joao@example.com' },
  ];

  return (
    <div className="container">
      <h1>Tabela de Exemplo</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.nome}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela