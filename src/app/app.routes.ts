import { Routes } from '@angular/router';
import { TodoComponent } from './todo/feature/todo.component';
import { PostIndexComponent } from './post/feature/index.component';
import { PostShowComponent } from './post/feature/show.component';

export const routes: Routes = [
  {
    path: 'todos',
    component: TodoComponent,
  },
  {
    path: 'posts',
    component: PostIndexComponent,
  },
  {
    path: 'posts/:id',
    component: PostShowComponent,
  },
];
