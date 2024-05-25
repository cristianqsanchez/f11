import { TeamContext, TeamProvider } from '@/clubs/context'
import { getRandomTeam } from '@/shared/consts/teams'
import { guessPlayer } from '@/shared/services/players'
import type {
	Formation,
	FormationPlayer,
	GuessedPlayer,
	Player,
	Position,
} from '@/shared/types'
import { TeamFormation } from '@/shared/ui/team'
import { type FormEvent, useContext, useEffect } from 'react'

const positionGroup: Record<Position, string> = {
	Attacker: 'attackers',
	Midfielder: 'midfielders',
	Defender: 'defenders',
	Goalkeeper: 'goalkeeper',
}

function Game() {
	const { team, setTeam } = useContext(TeamContext)

	useEffect(() => {
		const isWin = handleGameWasWin(team)
		if (isWin) setTimeout(() => alert('Congratulations, ¡You Win!'), 500)
	}, [team])

	const randomTeam = getRandomTeam()

	if (!randomTeam) return null

	const { players, team: randomTeamData } = randomTeam

	const checkIsGuessed = ({ player }: FormationPlayer) => {
		return (player as GuessedPlayer).name !== undefined
	}

	const handleGameWasWin = (team: Formation) =>
		Object.values(team).flatMap((players) =>
			players.filter(({ player }) => !checkIsGuessed({ player })),
		).length === 0

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const [input] = e.currentTarget.children

		const form = new FormData(e.target as HTMLFormElement)
		const playerToGuess = form.get('guess') as string

		const player = guessPlayer(playerToGuess, players as Player[])

		if (!player) return null

		const playerPosition = positionGroup[player.position]

		const getAvaliblePositions = (positionName: FormationPlayer[]) =>
			positionName.filter(({ player }) => !checkIsGuessed({ player }))

		const avaliblePositions = getAvaliblePositions(
			team[playerPosition as keyof typeof team],
		).length

		if (avaliblePositions > 0) {
			setTeam((prevTeam) => {
				const positionWithNewPartner = prevTeam[
					playerPosition as keyof typeof prevTeam
				].concat({ player })
				positionWithNewPartner.shift()
				return {
					...prevTeam,
					[playerPosition]: positionWithNewPartner,
				}
			})

			if (input instanceof HTMLInputElement) {
				input.value = ''
			}
		}
	}
	return (
		<>
			<TeamFormation team={team} />
			<section className='flex place-content-center items-center justify-center gap-8 text-center'>
				<article className='grid max-h-24 max-w-16 justify-items-center gap-2'>
					<img
						src={randomTeamData.logo}
						alt={`${randomTeamData.logo} team shield`}
						className='aspect-square max-h-16 object-contain'
					/>
					<span className='line-clamp-2'>{randomTeamData.name}</span>
				</article>
				<form
					onSubmit={handleSubmit}
					className='flex items-center justify-center gap-4'>
					<input
						type='text'
						name='guess'
						autoComplete='off'
						placeholder='Guess the player'
						className='h-fit rounded-full px-4 py-2'
					/>
					<button
						type='submit'
						className='rounded-2xl bg-yellow-500 px-4 py-2 text-black'>
						Guess
					</button>
				</form>
			</section>
		</>
	)
}

export function App() {
	return (
		<>
			<div className='relative grid place-content-center'>
				<TeamProvider>
					<Game />
				</TeamProvider>
			</div>
		</>
	)
}
