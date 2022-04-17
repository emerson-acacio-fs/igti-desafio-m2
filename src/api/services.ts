import { AxiosResponse } from "axios"
import { CandidateRequestType } from "types/Candidate"
import { CityWithTotalsType } from "types/CityType"
import { ElectionType } from "types/slectionType"
import { client } from "./client"

export async function getCities(): Promise<CityWithTotalsType[] | undefined> {
  try {
    const { data } = await client.get<
      CityWithTotalsType[],
      AxiosResponse<CityWithTotalsType[]>
    >("/cities")

    return data
  } catch (error) {
    console.error(error)
  }
  return undefined
}

export async function getCandidates(): Promise<
  CandidateRequestType[] | undefined
> {
  try {
    const { data } = await client.get<
      CandidateRequestType[],
      AxiosResponse<CandidateRequestType[]>
    >("/candidates")

    return data
  } catch (error) {
    console.error(error)
  }
  return undefined
}

export async function getElection(): Promise<ElectionType[] | undefined> {
  try {
    const { data } = await client.get<
      ElectionType[],
      AxiosResponse<ElectionType[]>
    >("/election")

    return data
  } catch (error) {
    console.error(error)
  }
  return undefined
}
