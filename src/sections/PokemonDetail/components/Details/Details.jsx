import React from 'react'
import { Link } from 'react-router-dom'

import { image } from '@shared/utils'

import style from './Details.scss'

const Details = ({ data }) => {
  const habilitesList = data.habilities.map(hability =>
    <li key={hability}>
      <span>{hability}</span>
    </li>
  )

  return (
    <div className={style.wrapper}>
      <Link to='/pokemon'>X</Link>
      <img src={image(data.name)} />
      <div className={style.pokemonName}>{data.name}</div>
      <div className={style.data}>
        <div>
          <span className={style.propName}>ID: </span>
          <span className={style.propValue}>{data.id}</span>
        </div>
        <div>
          <span className={style.propName}>Type: </span>
          <span className={style.propValue}>{data.type}</span>
        </div>
        <div>
          <span className={style.propName}>Height: </span>
          <span className={style.propValue}>{data.height}</span>
        </div>
        <div className={style.habilities}>
          <span className={style.propName}>Habilities</span>
          <ul>
            {habilitesList}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
