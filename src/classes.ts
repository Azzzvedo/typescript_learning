class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public readonly name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}\nID: ${this.id}`);
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private admins: string[] = [];

  constructor(id: string) {
    super(id, "IT");
  }

  addAdmin(newAdmin: string) {
    this.admins.push(newAdmin);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Anna");

accounting.describe();
accounting.printEmployeeInformation();
