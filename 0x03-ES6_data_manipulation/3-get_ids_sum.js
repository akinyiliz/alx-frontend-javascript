export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((result, currentIds) => result + currentIds.id, 0);
}
