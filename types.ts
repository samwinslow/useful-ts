// Create a union type for all values of object T
export type RecordValue<T extends object> = T[keyof T]

// Make all properties of T non-nullable (exclude undefined and null)
export type RequiredNonNullable<T extends object> = {
  [K in keyof T]-?: NonNullable<T[K]>
}

// Make certain keys of T nullable (include undefined and null)
export type MakeNullableKeys<T, NullableKeyNames extends keyof T> = Omit<
  T,
  NullableKeyNames
> & {
  [K in NullableKeyNames]?: T[K] | null | undefined
}

// Require certain keys of T (exclude undefined)
export type MakeRequired<T, RequiredKeyNames extends keyof T> = Omit<
  T,
  RequiredKeyNames
> &
  Required<Pick<T, RequiredKeyNames>>
