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

export interface Team {
	id: number
	name: string
	logo: string
}

type Position = 'Attacker' | 'Defender' | 'Goalkeeper' | 'Midfielder'

type UnknownPlayer = {
	position: Position
}

type GuessedPlayer = {
	name: string
	photo: string
} & UnknownPlayer

type FormationPlayer = {
	player: UnknownPlayer | GuessedPlayer
}

export type Formation = {
	attackers: FormationPlayer[]
	midfielders: FormationPlayer[]
	defenders: FormationPlayer[]
	goalkeeper: FormationPlayer[]
}
