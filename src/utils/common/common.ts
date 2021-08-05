export function getMinuteInDateDef(t: number) {
  return Math.round(t / 60000)
}

export const rounded = function (price: number) {
  return +price.toFixed(2)
}
