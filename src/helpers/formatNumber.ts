export function formatNumber(number: number, isLocalString = false): string {
  const newNumber = Math.round(Number(number) * 100) / 100
  if (isLocalString) return newNumber.toLocaleString()
  return newNumber.toFixed(2)
}
