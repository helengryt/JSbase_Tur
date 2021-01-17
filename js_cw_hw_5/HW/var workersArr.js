var workersArr = [{name: "Лена", age: 27,},{name: "Маша", age: 12,},{name: "Даша", age: 35}]
var sortWorkersBy = prompt("Enter something");
workersArr.sort((a, b) => {
    let propA = a[sortWorkersBy];
    let propB = b[sortWorkersBy];
    if (typeof propA === "string" || typeof propb === "string") {
      propA.toLowerCase();
      propB.toLowerCase();
    }
    if (propA < propB) {
      return -1;
    } else if (propA > propB) {
      return 1;
    } else {
      return 0;
    }
  });

console.log(workersArr.sort());