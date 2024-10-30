import { delay, http, HttpResponse } from 'msw';
import { todos } from './todo.data';

export const todoHandler = [
  http.get('https://api.example.com/todos', async () => {
    await delay();
    return HttpResponse.json(todos);
  }),
  http.get('https://api.example.com/todos/:id', async ({ params }) => {
    await delay();
    const todo = todos.find((todo) => todo.id === Number(params['id']));
    return HttpResponse.json(todo);
  }),
];
