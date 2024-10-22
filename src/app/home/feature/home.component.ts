import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container mx-auto px-4 py-8">
      <div
        class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div class="p-8">
          <h1 class="text-3xl font-bold mb-6 text-gray-800">
            Welcome to My Angular Playground
          </h1>

          <p class="mb-4 text-gray-600">
            This application serves as a playground for me to learn and
            experiment with Angular. It also has examples that are being used by
            my blog.
          </p>

          <p class="mb-4 text-gray-600">
            The source code for this application is available on
            <a
              target="_blank"
              href="https://github.com/jstnjs/tanstack-query-angular"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >GitHub</a
            >.
          </p>

          <p class="mb-4 text-gray-600">
            My blog is available on
            <a
              target="_blank"
              href="https://medium.com/@iamjustin"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >Medium</a
            >
            (free articles).
          </p>

          <p class="mb-6 text-gray-600">
            And if you're interested in my opinions, you can find me on Twitter
            (X) as
            <a
              target="_blank"
              href="https://x.com/j1sc2s"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >&#64;j1sc2s</a
            >.
          </p>

          <div class="mt-8">
            <a
              routerLink="/posts"
              class="inline-block bg-blue-500 text-white px-6 py-3 mr-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Explore Posts
            </a>

            <a
              routerLink="/todos"
              class="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Explore Todos
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
