import {T} from "@angular/cdk/keycodes";

export enum ValuatingType {
  LAND = 'Land',
  VEHICLE = 'Vehicle',
  LAND_BUILDING = 'Land & Building'
}
export namespace ValuatingType {
  export function values() {
    return Object.keys(ValuatingType).filter(
      (type) => isNaN(type as any) && type !== 'values' && type !== 'enumObject'
    );
  }

  export function enumObject() {
    const enums: {
      key: string;
      value: ValuatingType | (() => string[]) | (() => any[]);
    }[] = [];
    values().forEach((elem) => {
      enums.push({
        key: elem,
        value: ValuatingType[elem as keyof typeof ValuatingType]
      });
    });
    return enums;
  }
}

