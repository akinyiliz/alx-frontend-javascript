export default function cleanSet(set, startString) {
  let result = '';
  const arr = [];

  if (typeof startString === 'string') {
    for (const element of set) {
      if (element.startsWith(startString)) {
        arr.push(element.slice(startString.length));
      }
    }
    result = arr.join('-');
  }
  return result;
}
