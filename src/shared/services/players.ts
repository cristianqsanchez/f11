import type { Player } from '@/shared/types'

export const guessPlayer = (search: string, playerList: Player[]) => {
	const searchLastName = search.toLowerCase().trim().split(' ').pop()

	if (!searchLastName) return null

	const player = playerList.find(({ name }) => {
		const playerLastName = name.toLowerCase().trim().split(' ').pop()

		return (
			playerLastName?.localeCompare(searchLastName, undefined, {
				sensitivity: 'base',
			}) === 0
		)
	})

	if (!player) return null

	const data = {
		name: player.name,
		photo: player.photo,
		position: player.position,
	}
	return data
}
