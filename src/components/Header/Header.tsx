import { Select } from "components/Select"
import { getUuId } from "helpers"
import { ChangeEventHandler } from "react"
import { CityType } from "types/CityType"

import * as S from "./styles"

export type HeaderProps = {
  id?: string
  title?: string
  question?: string
  cities?: CityType[]
  // eslint-disable-next-line no-unused-vars
  handelSelectedCity?: (cityId: string) => void
}

export const Header = ({
  id = getUuId(),
  title = "React elections",
  question = "Escolha um município",
  handelSelectedCity,
  cities = [],
}: HeaderProps) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    if (handelSelectedCity) {
      handelSelectedCity(target.value)
    }
  }
  return (
    <S.WrapperHeader>
      <S.TopContent>{title}</S.TopContent>
      <S.FooterContent>
        <S.SelectLabel htmlFor={id}>{question}</S.SelectLabel>
        <Select data-testid="select" id={id} onChange={handleChange}>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </Select>
      </S.FooterContent>
    </S.WrapperHeader>
  )
}
