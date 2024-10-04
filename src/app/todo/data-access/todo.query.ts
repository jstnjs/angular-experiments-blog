import { queryOptions } from '@tanstack/angular-query-experimental';
import { todoKeys } from './todo.key';
import { TodoService } from './todo.service';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export function todosQueryOptions() {
  const todoService = inject(TodoService);

  return queryOptions({
    queryKey: todoKeys.all,
    queryFn: () => lastValueFrom(todoService.todos()),
  });
}

export function todoQueryOptions(id: number) {
  const todoService = inject(TodoService);

  return queryOptions({
    queryKey: todoKeys.detail(id),
    queryFn: () => todoService.todo(id),
  });
}
