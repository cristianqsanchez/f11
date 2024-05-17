import AcMilan from '@/shared/mocks/famous-teams/ac-milan.json'
import Arsenal from '@/shared/mocks/famous-teams/arsenal.json'
import Barcelona from '@/shared/mocks/famous-teams/barcelona.json'
import Leverkusen from '@/shared/mocks/famous-teams/bayern-leverkusen.json'
import BayernMunich from '@/shared/mocks/famous-teams/bayern-munich.json'
import Dortmund from '@/shared/mocks/famous-teams/borussia-dortmund.json'
import Chelsea from '@/shared/mocks/famous-teams/chelsea.json'
import Inter from '@/shared/mocks/famous-teams/inter-milan.json'
import City from '@/shared/mocks/famous-teams/manchester-city.json'
import United from '@/shared/mocks/famous-teams/manchester-united.json'
import Psg from '@/shared/mocks/famous-teams/psg.json'
import Madrid from '@/shared/mocks/famous-teams/real-madrid.json'

const TEAMS = [
	AcMilan,
	Arsenal,
	Barcelona,
	Leverkusen,
	BayernMunich,
	Dortmund,
	Chelsea,
	Inter,
	City,
	United,
	Psg,
	Madrid,
]

export const getRandomTeam = () => {
	return TEAMS.map(({ response }) => {
		const [{ players, team }] = response
		return {
			team,
			players,
		}
	}).at(Math.floor(Math.random() * TEAMS.length))
}
