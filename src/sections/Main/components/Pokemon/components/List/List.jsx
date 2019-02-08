import React from 'react'

import Item from './components/Item'

import style from './List.scss'

const List = ({ items }) => (
  <div className={style.wrapper}>
    {items.map((item, index) => <Item key={index} item={item} />)}
  </div>
)

export default List
