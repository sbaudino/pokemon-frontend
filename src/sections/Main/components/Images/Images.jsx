import React from 'react'

import ImmflyImg from '@assets/images/immfly.png'
import PokemonImg from '@assets/images/pokemon.png'

import style from './Images.scss'

const Images = () => (
  <div className={style.wrapper}>
    <img className={style.immflyImg} src={ImmflyImg} />
    <img className={style.pokemonImg} src={PokemonImg} />
  </div>
)

export default Images
