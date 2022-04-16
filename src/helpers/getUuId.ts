import { v4 as uuidv4 } from "uuid"

export function getUuId(): string {
  return uuidv4()
}
