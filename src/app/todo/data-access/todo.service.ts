import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  todos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  todo(id: number) {
    return this.http.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
  }
}
