import _ from "lodash"

export function sort<T>(
  array: Array<T>,
  iteratees: string[],
  order: "asc" | "desc" = "asc",
): Array<T> {
  return _.orderBy(array, iteratees, order)
}
