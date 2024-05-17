import { getRandomFormation } from '@/shared/consts/formations'
import type { Formation } from '@/shared/types'
import type React from 'react'
import { createContext, useState } from 'react'

type TeamContext = {
	team: Formation
	setTeam: React.Dispatch<React.SetStateAction<Formation>>
}

const initialTeamState: TeamContext = {
	team: getRandomFormation(),
	setTeam: () => {},
}

export const TeamContext = createContext<TeamContext>(initialTeamState)

export function TeamProvider({ children }: { children: React.ReactNode }) {
	const [team, setTeam] = useState<TeamContext['team']>(initialTeamState.team)
	return (
		<TeamContext.Provider value={{ team, setTeam }}>
			{children}
		</TeamContext.Provider>
	)
}
