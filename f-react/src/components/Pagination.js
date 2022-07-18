import React from 'react'
import { useState } from 'react';
import pagination from "../scss/pagination.scss"

export default function Pagination({ number, setPage }) {
  const [active, setActive] = useState(1);

  const pages = [];
  let i = 1;
  while(i <= number) {
    pages.push(i)
    i++
  }

  return (
    <ul className="custom-pagination">
        {pages.map(x => <li onClick={() => {setPage(x); setActive(x)}} className={'custom-pagination__item' + (x === active ? ' active' : '')} key={x}>
          {x}</li>)}
    </ul>
  )
}
