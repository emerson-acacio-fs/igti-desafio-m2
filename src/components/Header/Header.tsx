import { Select } from "components/Select"
import { getUuId } from "helpers"
import { ChangeEventHandler } from "react"
import * as S from "./styles"

export type HeaderProps = {
  id?: string
  title?: string
  question?: string
  // eslint-disable-next-line no-unused-vars
  handelSelectedCity?: (city: string) => void
}

export const Header = ({
  id = getUuId(),
  title = "React elections",
  question = "Escolha um município",
  handelSelectedCity,
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
          <option value="oi">oi</option>
          <option>oi2</option>
          <option>oi3</option>
        </Select>
      </S.FooterContent>
    </S.WrapperHeader>
  )
}
