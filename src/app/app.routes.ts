import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';
import { roleGuard } from './core/guards/role-guard';
import { unsavedChangesGuard } from './core/guards/unsaved-changes-guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/login/login').then(m => m.LoginComponent),
    },

    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent),
    },

    {
        path: 'employees',
        canActivate: [authGuard],
        canDeactivate: [unsavedChangesGuard],
        loadComponent: () => import('./features/employees/employees').then(m => m.EmployeesComponent),
    },

    {
        path: 'admin',
        canActivate: [authGuard, roleGuard],
        data: { role: 'admin' },
        loadComponent: () => import('./features/admin/admin').then(m => m.AdminComponent),
    },

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },

    {
        path: '*',
        redirectTo: '/dashboard',
    }
];
