import { Component } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { postsQueryOptions } from '../data-access/post.query';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tqa-post-index',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Posts Overview</h1>
        <a
          routerLink="/posts/create"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
          >Create Post</a
        >
      </div>
      @if (postsQuery.isLoading()) {
        <p class="text-gray-600">Loading posts...</p>
      }
      @if (postsQuery.data()) {
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (post of postsQuery.data(); track post.id) {
            <li
              class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <a [routerLink]="['/posts', post.id]" class="block">
                <h2
                  class="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800"
                >
                  {{ post.title }}
                </h2>
                <p class="text-gray-600 text-sm">Post ID: {{ post.id }}</p>
              </a>
            </li>
          }
        </ul>
      }
      @if (postsQuery.isError()) {
        <p class="text-red-600">Error loading posts. Please try again later.</p>
      }
    </div>
  `,
})
export class PostIndexComponent {
  postsQuery = injectQuery(() => postsQueryOptions());
}
