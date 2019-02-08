import { connect } from 'react-redux'
import Main from '@sections/Main'
import { getPokemon } from '@reducers/main'

const mapStateToProps = state => ({
  loading: state.main.loading,
  pokemon: state.main.pokemon
})

const mapDispatchToProps = { getPokemon }

export default connect(mapStateToProps, mapDispatchToProps)(Main)
