import { RecordValue, RequiredNonNullable } from "./types"

/**
 * objectKeys
 * @param obj A record-like object.
 * @returns Object.keys typed as the union type of all keys.
 */
export function objectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

/**
 * objectValues
 * @param obj A record-like object.
 * @returns Object.values typed as the union type of all values.
 */
export function objectValues<T extends object>(obj: T): RecordValue<T>[] {
  return Object.values(obj) as RecordValue<T>[]
}

/**
 * objectEntries
 * @param obj A Record-like object.
 * @returns Object.entries typed as an array of key-value pairs.
 */
export function objectEntries<T extends object>(
  obj: T,
): [keyof T, RecordValue<T>][] {
  return Object.entries(obj) as [keyof T, RecordValue<T>][]
}

/**
 * objectFromEntries
 * (Note: This may break type narrowing in some cases. Use with care.)
 * @param entries An array of key-value pairs.
 * @returns A strongly typed object created from the key-value pairs.
 */
export function objectFromEntries<K extends string, V>(
  entries: [K, V][],
): Record<K, V> {
  return Object.fromEntries(entries) as Record<K, V>
}

/**
 * transpose
 * (Note: This is not invertible if the values are not unique.)
 * @param obj A Record-like object.
 * @returns A new object with the keys and values swapped.
 */
export function transpose<K extends string, V extends string>(
  obj: Record<K, V>,
): Record<V, K> {
  return objectFromEntries(
    objectEntries(obj).map(([key, value]) => [value, key]),
  )
}

/**
 * filterNullishValues
 * @param obj A Record-like object.
 * @returns An object without any entries where the value is null or undefined.
 */
export const filterNullishValues = <
  V extends string | null | undefined,
  T extends Partial<Record<string, V>>,
>(
  obj: T,
): RequiredNonNullable<T> => {
  const result = {} as any
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key] as string
    }
  }
  return result as RequiredNonNullable<T>
}
