import type { Formation, FormationPlayer, Position } from '@/shared/types'

type FormationPlayers = {
	attackersQty: number
	midfieldersQty: number
	defendersQty: number
}

const createPlayerPosition = (
	qty: number,
	position: Position,
): FormationPlayer[] =>
	new Array<FormationPlayer>(qty).fill({ player: { position } })

const createFormation = ({
	attackersQty,
	defendersQty,
	midfieldersQty,
}: FormationPlayers): Formation => ({
	attackers: createPlayerPosition(attackersQty, 'Attacker'),
	midfielders: createPlayerPosition(midfieldersQty, 'Midfielder'),
	defenders: createPlayerPosition(defendersQty, 'Defender'),
	goalkeeper: createPlayerPosition(1, 'Goalkeeper'),
})

const formations: Formation[] = [
	createFormation({ attackersQty: 3, midfieldersQty: 3, defendersQty: 4 }),
	createFormation({ attackersQty: 2, midfieldersQty: 4, defendersQty: 4 }),
	createFormation({ attackersQty: 2, midfieldersQty: 5, defendersQty: 3 }),
	createFormation({ attackersQty: 2, midfieldersQty: 3, defendersQty: 5 }),
]

export const getRandomFormation = () =>
	formations[Math.floor(Math.random() * formations.length)]
