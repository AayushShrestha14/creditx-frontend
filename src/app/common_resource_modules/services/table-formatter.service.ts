import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableFormatterService {
  constructor() {}

  /**
   *
   * @author Paribartan Kalathoki
   * Created On:- Mar 04, 2022
   * @param obj
   * @returns flattern object with '.' seperator.
   *
   * e.g: name: { firstName: 'Kalathoki', lastName: 'Paribartan' } to name.firstName = 'Kalathoki', name.lastName: 'Paribartan';
   *
   */
  convertToFlatPropertyMap(obj: object) {
    const keySeparator = '.';
    const generateFlatternObjectsDataRecursively = (
      obj: object,
      parentProperty?: string,
      propertyMap: Record<string, unknown> = {}
    ) => {
      for (const [key, value] of Object.entries(obj)) {
        const property = parentProperty
          ? `${parentProperty}${keySeparator}${key}`
          : key;
        if (value && typeof value === 'object') {
          generateFlatternObjectsDataRecursively(value, property, propertyMap);
        } else {
          propertyMap[property] = value;
        }
      }
      return propertyMap;
    };
    return generateFlatternObjectsDataRecursively(obj);
  }
}
