export type CityType = {
  name: string
  id: string
}
export type CityWithTotalsType = {
  votingPopulation: number
  absence: number
  presence: number
} & CityType
