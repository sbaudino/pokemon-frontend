import React from 'react'

import style from './Generation.scss'

const Generation = ({ number, total }) => (
  <div className={style.wrapper}>
    <div>Generation {number}</div>
    <div>{total} pokemon</div>
  </div>
)

export default Generation
