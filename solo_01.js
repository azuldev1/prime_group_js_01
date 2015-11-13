var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

function Employee(name, empNumber, annSalary, revRating) {
  this.name = name;
  this.empNumber = empNumber;
  this.annSalary = annSalary;
  this.revRating = revRating;

}

var Employee1 = new Employee("Atticus", "2405", "47000", 3);
var Employee2 = new Employee("Jem", "62347", "63500", 4);
var Employee3 = new Employee("Boo", "11435", "54000", 3);
var Employee4 = new Employee("Scout", "6243", "74750", 5);

console.log(Employee1);

var adjustedEarnings = function(employees) {
  this.name = employees.name;
  this.salary = parseInt(employees.annSalary);

  this.eval = function() {
    var revRating = employees.revRating;
    var empNumber = employees.empNumber;
    var annSalary = employees.annSalary;

    var bonus = 0;
    if (revRating <= 2) {
      bonus = 0;


    } else if (revRating == 3) {
      bonus = 4;

    } else if (revRating == 4) {
      bonus = 06;
    } else if (revRating == 5) {
      bonus = 10;

    }
    if (empNumber.length == 4) {
      bonus = bonus + 5;
    }
    if (annSalary > 65000) {
      bonus -= 1;
    }


    if (bonus > 13) {
      bonus = 13;
    }

    return bonus;
  };

  this.bonus = this.eval();
  this.adjustedComp = Math.round((this.bonus / 100 * this.salary) + this.salary);
  this.totalBonus = Math.round(this.bonus / 100 * this.salary);
}

 var data1 = new adjustedEarnings (Employee1);
var data2 = new adjustedEarnings (Employee2);
var data3 = new adjustedEarnings (Employee3);
var data4 = new adjustedEarnings (Employee4);



var employees = [Employee1, Employee2, Employee3, Employee4];

console.log(data1, data2, data3, data4);


/*employees.push( data1, data2, data3, data4);

console.log(employees);

for (var i = 0; i < employees.length; i++) {
  var data[i] = new adjustedEarnings(employees[i]);
  employees.push(data[i])
  console.log(employees[i]);
}
console.log(adjustedEarnings.Employee1)
*/
