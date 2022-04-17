import { Header } from "components"
import { CityBox } from "components/CityBox"
import * as S from "./sttyle"

const city = {
  name: "Asgard",
  candidateNumber: 5,
  abstentions: 12112,
  totalVotes: 12112,
  attendances: 12112,
  candidates: [
    {
      id: "2222",
      name: "Antman",
      userName: "antman",
      totalVotes: 222,
      percentageVotes: 222,
      isWinner: true,
    },
    {
      id: "333223",
      name: "Ironman",
      userName: "ironMan",
      totalVotes: 222,
      percentageVotes: 222,
      isWinner: false,
    },
  ],
}
const cities = [
  { id: "ww33", name: "Asgard" },
  { id: "ww222", name: "AAA" },
]

export function Home() {
  return (
    <>
      <Header cities={cities} />
      <S.MainContent>
        <CityBox
          name={city.name}
          totalVotes={city.totalVotes}
          candidateNumber={city.candidates.length + 1}
          abstentions={city.abstentions}
          attendances={city.attendances}
          candidates={city.candidates}
        />
      </S.MainContent>
    </>
  )
}
