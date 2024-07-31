import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportesGamesQuery,
  useGetSimulationsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportesGames } = useGetSportesGamesQuery()
  const { data: simulationGames } = useGetSimulationsGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

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
