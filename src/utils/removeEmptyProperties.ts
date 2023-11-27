export default async function removeEmptyProperties(obj: any): Promise<any> {
  const newObj: any = {};

  for (let propName in obj) {
    if (
      obj.hasOwnProperty(propName) &&
      obj[propName] !== "" &&
      obj[propName] !== null &&
      obj[propName] !== undefined
    ) {
      newObj[propName] = obj[propName];
    }
  }

  return newObj;
}
