/**
 * parseBoolean
 * If input is boolean, return it. Else parse the literal string 'true' as true, and all other values as false.
 * @param value some value to parse
 * @returns boolean
 */
export const parseBoolean = (value: string | boolean): boolean => {
  if (typeof value === 'boolean') {
    return value
  }
  return value === 'true'
}
