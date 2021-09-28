import React from 'react';

const Pagination = ({ limit, total, offset, setOffset}) => {
  //o parametro offset é a quantidade de itens que já foram mostrados em páginas anteriores e devem ser desconsiderados para a aplicação conseguir identificar em qual página esta/deve ir

  // quantidade máxima de itens da paginação
  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  // current = página atual, a justificativa do ternário é para o caso da pesquisa retornar apenas uma página e essa divisão não pode ter zero, então verificamos para setar como 1 a paginação
  const current = offset ? (offset / limit) + 1 : 1;
  //guarda o número de páginas totais da pesquisa considerando o limit de itens da pesquisa retornado no fetch. O Math.ceil serve para arredondar sempre para cima (ceil do inglês é této)
  const pages = Math.ceil(total / limit);

  const first = Math.max(current - MAX_LEFT, 1)

  function onPageChange(page) {
    setOffset((page - 1) * limit)
  }

  return (
    <ul className="pagination">
      <li>
        <button 
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
      //Esse primeiro map transforma um array com return de undefind em array de números de páginas
      .map((_, index) => index + first)
      .map((page) => (
        <li key={page}>
          <button 
            onClick={() => onPageChange(page)}
            className={page === current ? 'pagination__item--active' : null}
            >
              {page}
          </button>
        </li>
      ))}
      <li>
        <button 
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Anterior
        </button>
      </li>
    </ul>
  )
}

export default Pagination