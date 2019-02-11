import React from 'react'

import Loader from '@shared/components/Loader'
import Details from './components/Details'

import style from './PokemonDetail.scss'

class PokemonDetail extends React.PureComponent {
  componentDidMount () {
    this.props.getPokemonDetail(this.props.match.params.name)
  }

  render () {
    const { loading, pokemonData } = this.props

    return (
      <div className={style.wrapper}>
        {loading ? <Loader color='#fafafa' /> : null}
        {pokemonData ? <Details data={pokemonData} /> : null}
      </div>
    )
  }
}

export default PokemonDetail
