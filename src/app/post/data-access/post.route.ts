import { Routes } from '@angular/router';

export const postRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../feature/index.component').then((m) => m.PostIndexComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('../feature/create.component').then((m) => m.PostCreateComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../feature/show.component').then((m) => m.PostShowComponent),
  },
];
