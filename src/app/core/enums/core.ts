export class CoreEnum<T> {
  values(obj: T) {
    return Object.keys(obj).filter(
      (type) =>
        isNaN(<any>type) &&
        type !== 'values' &&
        type !== 'enumObject' &&
        type !== 'getEnum'
    );
  }

  enumObject(obj: T | any) {
    const enums: { key: string; value: any }[] = [];
    this.values(obj).forEach((elem) => {
      enums.push({
        key: elem,
        value: obj[elem]
      });
    });
    return enums;
  }

  getEnum(value: string, obj: T) {
    let val: string | undefined;
    for (const enumPair of this.enumObject(obj)) {
      if (enumPair.value === value) {
        val = enumPair.key;
      }
    }
    return val;
  }
}
