import { CanDeactivateFn } from '@angular/router';
import { EmployeesComponent } from '../../features/employees/employees';

export const unsavedChangesGuard: CanDeactivateFn<EmployeesComponent> = (component) => {

  if (component.hasUnsavedChanges) {
    return window.confirm('You have unsaved changes. Do you really want to leave?');
  }

  return true;
};
