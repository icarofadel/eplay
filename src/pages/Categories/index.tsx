import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportesGamesQuery,
  useGetSimulationsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api' // AQUI

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery() // AQUI
  const { data: sportesGames } = useGetSportesGamesQuery() // AQUI
  const { data: simulationGames } = useGetSimulationsGamesQuery() // AQUI
  const { data: fightGames } = useGetFightGamesQuery() // AQUI
  const { data: rpgGames } = useGetRpgGamesQuery() // AQUI

  if (
    actionGames &&
    sportesGames &&
    simulationGames &&
    fightGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportesGames}
          title="Esportes"
          background="gray"
          id="sportes"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
