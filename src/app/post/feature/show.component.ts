import { Component, input, numberAttribute } from '@angular/core';
import {
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { postQueryOptions } from '../data-access/post.query';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'tqa-post-show',
  standalone: true,
  imports: [RouterLink, NgIf, DatePipe],
  template: `
    <div class="container mx-auto px-4 py-8">
      @if (postQuery.isLoading()) {
        <div class="flex justify-center items-center h-64">
          <p class="text-xl text-gray-600">Loading post...</p>
        </div>
      }
      @if (postQuery.data()) {
        <article class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-8">
            <h1 class="text-3xl font-bold mb-4 text-gray-800">
              {{ postQuery.data().title }}
            </h1>
            <div class="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/40"
                alt="Author avatar"
                class="rounded-full mr-4"
              />
              <div>
                <p class="text-gray-700 font-semibold">John Doe</p>
                <p class="text-gray-500 text-sm">04-10-2024</p>
              </div>
            </div>
            <div class="prose max-w-none mb-8">
              <p>{{ postQuery.data().body }}</p>
            </div>
            <div class="flex justify-between items-center">
              <a
                routerLink="/posts"
                class="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                ← Back to Posts
              </a>
              <span class="text-sm text-gray-500"
                >Post ID: {{ postQuery.data().id }}</span
              >
            </div>
          </div>
        </article>
      }
      @if (postQuery.isError()) {
        <div
          class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4"
          role="alert"
        >
          <p class="font-bold">Error</p>
          <p>Unable to load post. Please try again later.</p>
        </div>
      }
    </div>
  `,
})
export class PostShowComponent {
  queryClient = injectQueryClient();
  id = input.required<number, unknown>({ transform: numberAttribute });

  postQuery = injectQuery(() => postQueryOptions(this.id()));
}
