export enum RoleTypeEnum {
  MAKER = 'MAKER',
  APPROVAL = 'APPROVAL',
  COMMITTEE = 'COMMITTEE',
  CAD_ADMIN = 'CAD_ADMIN',
  ADMIN = 'ADMIN',
  CAD_SUPERVISOR = 'CAD_SUPERVISOR',
  CAD_LEGAL = 'CAD_LEGAL',
  CAS_CHECKER = 'Cas Checker',
  CAS_MAKER = 'Cas Maker',
  CAS_DOC_MAKER = 'Cas Doc Maker',
  CAS_DOC_CHECKER = 'Cas Doc Checker',
  CLAD_MAKER = 'Clad Maker',
  CLAD_CHECKER = 'Clad Checker'
}

export namespace RoleTypeEnum {
  export function values() {
    return Object.keys(RoleTypeEnum).filter(
      (type) => isNaN(type as any) && type !== 'values' && type !== 'enumObject'
    );
  }

  export function enumObject() {
    const enums: {
      key: string;
      value: RoleTypeEnum | (() => string[]) | (() => any[]);
    }[] = [];
    values().forEach((elem) => {
      enums.push({
        key: elem,
        value: RoleTypeEnum[elem as keyof typeof RoleTypeEnum]
      });
    });
    return enums;
  }
}
