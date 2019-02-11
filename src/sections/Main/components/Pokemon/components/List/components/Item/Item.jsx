import React from 'react'
import { withRouter } from 'react-router-dom'

import { image } from '@shared/utils'

import style from './Item.scss'

class Item extends React.PureComponent {
  constructor (props) {
    super(props)

    this.goToDetails = this.goToDetails.bind(this)
  }

  goToDetails () {
    const { item } = this.props
    this.props.history.push(`/pokemon/${item.name}`)
  }

  render () {
    const { item } = this.props

    return (
      <div className={style.wrapper} onClick={this.goToDetails}>
        <img src={image(item.name)} />
        <div className={style.pokemonName}>{item.name}</div>
      </div>
    )
  }
}

export default withRouter(Item)
