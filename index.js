// Write your solution in this file!
const employee = { name: "Hammam", streetAddress: "29" };
// const employee = {};
// beforeEach(function () {
//   employee.length = 0;
//   employee.name = "Hammam";
//   employee.streetAddress = "29";
//   return employee;
// });

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const copyOfEmployee = { ...employee };
  copyOfEmployee[key] = value;
  return copyOfEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const copyOfEmployee = { ...employee };
  delete copyOfEmployee[key];
  return copyOfEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
