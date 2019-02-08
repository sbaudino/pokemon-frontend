import React from 'react'

import Generation from './components/Generation'
import List from './components/List'

import style from './Pokemon.scss'

const Pokemon = ({ data }) => (
  <div className={style.wrapper}>
    <Generation number={1} total={data.length} />
    <List items={data} />
  </div>
)

export default Pokemon
