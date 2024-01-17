
export const convertToCamelCase = (obj: { [x: string]: any; }) => {
  const newObj: { [x: string]: any; } = {};
  Object.keys(obj).forEach((key) => {
    const newKey = key.replace(/(_\w)/g, (k) => k[1].toUpperCase());
    newObj[newKey] = obj[key];
  });
  return newObj;
};

