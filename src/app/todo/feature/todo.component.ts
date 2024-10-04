import { Component, OnInit } from '@angular/core';
import { todosQueryOptions } from '../data-access/todo.query';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'tsa-todo',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div>
      <h1>All todos</h1>

      @if (todosQuery.isLoading()) {
        <p>Loading...</p>
      }

      @if (todosQuery.data()) {
        <ul>
          @for (todo of todosQuery.data(); track todo.id) {
            <li>{{ todo.title }}</li>
          }
        </ul>
      }
    </div>
  `,
})
export class TodoComponent {
  todosQuery = injectQuery(() => todosQueryOptions());
}
