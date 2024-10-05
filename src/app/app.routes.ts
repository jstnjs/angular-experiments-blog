import { Routes } from '@angular/router';

export const routes: Routes = [
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
