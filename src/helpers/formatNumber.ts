export function formatNumber(number: number, isInteger = false): string {
  const newNumber = Math.round(Number(number) * 100) / 100
  if (isInteger) {
    return newNumber.toLocaleString("PT", {
      minimumFractionDigits: 0,
    })
  }
  return newNumber.toLocaleString("PT", {
    minimumFractionDigits: 2,
  })
}
