export enum RoleAccessEnum {
  SPECIFIC = 'SPECIFIC',
  OWN = 'OWN',
  ALL = 'ALL'
}
export namespace RoleAccessEnum {
  export function values() {
    return Object.keys(RoleAccessEnum).filter(
      (type) => isNaN(type as any) && type !== 'values' && type !== 'enumObject'
    );
  }

  export function enumObject() {
    const enums: {
      key: string;
      value: RoleAccessEnum | (() => string[]) | (() => any[]);
    }[] = [];
    values().forEach((elem) => {
      enums.push({
        key: elem,
        value: RoleAccessEnum[elem as keyof typeof RoleAccessEnum]
      });
    });
    return enums;
  }
}
