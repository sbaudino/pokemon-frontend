import { connect } from 'react-redux'
import PokemonDetail from '@sections/PokemonDetail'
import { getPokemonDetail } from '@reducers/pokemonDetail'

const mapStateToProps = state => ({
  loading: state.pokemonDetail.loading,
  pokemonData: state.pokemonDetail.pokemonData
})

const mapDispatchToProps = { getPokemonDetail }

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
