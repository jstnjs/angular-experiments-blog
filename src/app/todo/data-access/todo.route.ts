import { Routes } from '@angular/router';

export const todoRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../feature/todo.component').then((m) => m.TodoComponent),
  },
];
