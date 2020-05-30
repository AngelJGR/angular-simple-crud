import { Component } from '@angular/core';

import { Employee } from './Models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employees: Array<Employee> = [
    { id: 1, name: "Ryan", country: "USA" },
    { id: 2, name: "Jhon", country: "Canada" },
    { id: 3, name: "Zac", country: "USA" }
  ];

  selectedEmployee: Employee = new Employee();

  constructor () { }

  addOrEdit(): void{
    if (this.selectedEmployee.id === undefined){
      this.selectedEmployee.id = this.employees.length + 1;
      this.employees.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee): void{
    this.selectedEmployee = employee;
  }

  cancel():void{
    this.selectedEmployee = new Employee();
  }

  delete():void{
    this.employees = this.employees.filter(el => el.id != this.selectedEmployee.id);
    this.selectedEmployee = new Employee();
  }

}
