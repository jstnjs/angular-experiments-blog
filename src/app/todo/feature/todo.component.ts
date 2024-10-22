import { Component } from '@angular/core';
import { todosQueryOptions } from '../data-access/todo.query';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe, NgClass],
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Todo List</h1>

      @if (todosQuery.isLoading()) {
        <p class="text-gray-600">Loading...</p>
      }

      @if (todosQuery.data()) {
        <ul class="space-y-3">
          @for (todo of todosQuery.data(); track todo.id) {
            <li
              class="flex items-center p-3 bg-gray-100 rounded-md transition-colors hover:bg-gray-200"
            >
              <input
                type="checkbox"
                [checked]="todo.completed"
                class="mr-3 form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400"
              />
              <span
                [ngClass]="{
                  'line-through text-gray-500': todo.completed,
                  'text-gray-800': !todo.completed,
                }"
              >
                {{ todo.title }}
              </span>
            </li>
          }
        </ul>
      }
    </div>
  `,
})
export class TodoComponent {
  todosQuery = injectQuery(() => todosQueryOptions());
}
