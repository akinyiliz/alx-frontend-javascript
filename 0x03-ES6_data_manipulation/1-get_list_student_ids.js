export default function getListStudentIds(arrayObject) {
  if (Array.isArray(arrayObject)) {
    return arrayObject.map((item) => item.id);
  }
  return [];
}
