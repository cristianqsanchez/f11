export type TopLevel = {
	get: string
	parameters: Parameters
	errors: unknown[]
	results: number
	paging: Paging
	response: Response[]
}

export type Paging = {
	current: number
	total: number
}

export type Parameters = {
	team: string
}

export type Response = {
	team: Team
	players: Player[]
}

export type Player = {
	id: number
	name: string
	age: number
	number: number
	position: Position
	photo: string
}

export enum Position {
	Attacker = 'Attacker',
	Defender = 'Defender',
	Goalkeeper = 'Goalkeeper',
	Midfielder = 'Midfielder',
}

export interface Team {
	id: number
	name: string
	logo: string
}

export type Formation = {
	attacker: number
	midfielder: number
	defender: number
	goalkeeper: number
}
