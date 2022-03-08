import { DocumentCheckType } from "../enum/document-check-type.enum";

export namespace EnumUtils {

  /**
   * Returns the collection of enums.
   * @param enums An enumeration type.
   */
  export function keys(enums: DocumentCheckType) {
    return Object.keys(enums);
  }

  /**
   * Returns the collection of enums' value.
   * @param enums An enumeration type.
   */
  export function values(enums: { [s: string]: unknown; } | ArrayLike<unknown>) {
    return Object.values(enums);
  }

  /**
   * Returns the collection of enum key-value pairs.
   * @param enums An enumeration type.
   */
  export function pairs(enums: DocumentCheckType) {
    const pair: { key: string; value: any; }[] = [];
    keys(enums).forEach(key => {
      pair.push({
        key: key,
        value: DocumentCheckType[key as keyof typeof DocumentCheckType]
      });
    });
    return pair;
  }

  /**
   * Returns an enum matching the value.
   * @param enums An enumeration type.
   * @param value An enum value.
   */
  export function getEnum(enums: DocumentCheckType, value: string) {
    let finalKey;
    for (const pair of pairs(enums)) {
      if (pair.value === value) {
        finalKey = pair.key;
      }
    }
    return finalKey;
  }
}
