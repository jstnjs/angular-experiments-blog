import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPostMutation } from '../data-access/post.mutation';

@Component({
    selector: 'app-post-create',
    imports: [ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">Create New Post</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700"
            >Title</label
          >
          <input
            type="text"
            id="title"
            formControlName="title"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          @if (form.get('title')?.invalid && form.get('title')?.touched) {
            <p class="mt-1 text-sm text-red-600">Title is required</p>
          }
        </div>
        <div>
          <label for="body" class="block text-sm font-medium text-gray-700"
            >Body</label
          >
          <textarea
            id="body"
            formControlName="body"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
          @if (form.get('body')?.invalid && form.get('body')?.touched) {
            <p class="mt-1 text-sm text-red-600">Body is required</p>
          }
        </div>
        <button
          type="submit"
          [disabled]="form.invalid"
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          Create Post
        </button>
      </form>
    </div>
  `
})
export class PostCreateComponent {
  fb = inject(FormBuilder);
  createPostMutation = createPostMutation();

  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      const { title, body } = this.form.value;
      this.createPostMutation.mutate({ title: title!, body: body!, userId: 1 });
    }
  }
}
