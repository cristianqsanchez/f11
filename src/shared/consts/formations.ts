import type { Formation } from '@/shared/types'

const formations: Formation[] = [
	{
		// 4-3-3
		attacker: 3,
		midfielder: 3,
		defender: 4,
		goalkeeper: 1,
	},
	{
		// 4-4-2
		attacker: 2,
		midfielder: 4,
		defender: 4,
		goalkeeper: 1,
	},
	{
		// 3-5-2
		attacker: 2,
		midfielder: 5,
		defender: 3,
		goalkeeper: 1,
	},
	{
		// 5-3-2
		attacker: 2,
		midfielder: 3,
		defender: 5,
		goalkeeper: 1,
	},
]

export const getRandomFormation = () =>
	formations[Math.floor(Math.random() * formations.length)]
