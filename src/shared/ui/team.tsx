import type { Formation } from '@/shared/types'
import { Player } from './player'

export function TeamFormation({ team }: { team: Formation }) {
	return (
		<main className='grid max-h-screen [&>div]:gap-16'>
			{Object.keys(team).map((position, index) => (
				<div
					key={index}
					className='flex place-content-center items-center text-center'>
					{team[position as keyof typeof team].map(({ player }, index) => (
						<Player key={index} {...player} />
					))}
				</div>
			))}
		</main>
	)
}
