import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePost, Post } from './post.type';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);

  posts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  post(id: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
  }

  createPost(post: CreatePost) {
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      post,
    );
  }
}
