import { formatNumber } from "helpers/formatNumber"

describe("formatNumber helper", () => {
  it("should provide the number rounded to two decimal places", () => {
    expect(formatNumber(2000.5243)).toEqual("2000.52")
  })
  it("should provide the number rounded to two decimal places and localString", () => {
    expect(formatNumber(1211551510.2555)).toEqual("1 211 551 510,256")
  })
})
