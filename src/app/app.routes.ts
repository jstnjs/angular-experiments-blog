import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/feature/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todo/data-access/todo.route').then((m) => m.todoRoutes),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./post/data-access/post.route').then((m) => m.postRoutes),
  },
];
