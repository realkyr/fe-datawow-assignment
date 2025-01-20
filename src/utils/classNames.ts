export type BaseClassNamesInput =
  | string
  | Record<string, boolean>
  | null
  | undefined
export type ClassNamesInput = BaseClassNamesInput | BaseClassNamesInput[]

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - Class names which can be strings, objects with boolean values, or arrays of these types.
 * @returns A string containing all the valid class names separated by a space.
 *
 * @example
 * ```typescript
 * // Using an array of strings
 * const class1 = classNames(['btn', 'btn-primary', 'active']);
 * // Output: "btn btn-primary active"
 *
 * // Using an array of records with boolean values
 * const class2 = classNames([{ 'btn': true, 'btn-primary': true, 'active': false }]);
 * // Output: "btn btn-primary"
 *
 * // Combining both strings and records
 * const class3 = classNames(['btn', { 'btn-primary': true, 'active': false }]);
 * // Output: "btn btn-primary"
 * ```
 */
function classNames(inputs: ClassNamesInput): string {
  const classes: string[] = []

  const processInput = (input: BaseClassNamesInput) => {
    if (typeof input === 'string') {
      classes.push(input)
    } else if (typeof input === 'object' && input !== null) {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key)
        }
      }
    }
  }

  if (Array.isArray(inputs)) {
    inputs.forEach(processInput)
  } else {
    processInput(inputs)
  }

  return classes.join(' ')
}

export { classNames }
