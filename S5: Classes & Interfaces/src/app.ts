class Department {
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    //validation etc
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  getReport() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);
const accounting = new AccountingDepartment("d2", []);

it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = "Anna";
console.log(it);

it.describe();
it.printEmployeeInformation();

accounting.addReport("Something went wrong");
accounting.getReport();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// const accountingCopy = {
//   name: "DUMMY",
//   describe: accounting.describe,
// };

// accountingCopy.describe();
