import { http, HttpResponse } from 'msw';
import { todos } from './todo.data';

export const todoHandler = [
  http.get('https://api.example.com/todos', () => {
    return HttpResponse.json(todos);
  }),
  http.get('https://api.example.com/todos/:id', ({ params }) => {
    const todo = todos.find((todo) => todo.id === Number(params['id']));
    return HttpResponse.json(todo);
  }),
];
