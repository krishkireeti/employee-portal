import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})

export class EmployeesComponent {
  employeeName = 'John';

  hasUnsavedChanges = false;

  save(): void {
    console.log("Employee saved:", this.employeeName);
    this.hasUnsavedChanges = false;
  }
}
