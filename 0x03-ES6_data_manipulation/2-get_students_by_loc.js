export default function getStudentsByLocation(arrayOfObjects, city) {
  return arrayOfObjects.filter((item) => item.location === city);
}
