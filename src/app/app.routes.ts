import { Routes } from '@angular/router';
import { TodoComponent } from './todo/feature/todo.component';
import { PostIndexComponent } from './post/feature/index.component';
import { PostShowComponent } from './post/feature/show.component';
import { PostCreateComponent } from './post/feature/create.component';

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
    path: 'posts/create',
    component: PostCreateComponent,
  },
  {
    path: 'posts/:id',
    component: PostShowComponent,
  },
];
