import React from 'react'

import Loader from '@shared/components/Loader'

import Images from './components/Images'
import Pokemon from './components/Pokemon'

import style from './Main.scss'

class Main extends React.PureComponent {
  componentDidMount () {
    this.props.getPokemon()
  }

  render () {
    const { loading, total, pokemon } = this.props
    
    return (
      <div className={style.wrapper}>
        <Images />
        {loading ? <Loader color='#fafafa' /> : null}
        {pokemon ? <Pokemon total={total} data={pokemon} /> : null}
      </div>
    )
  }
}

export default Main
