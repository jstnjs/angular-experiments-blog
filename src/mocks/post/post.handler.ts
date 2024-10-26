import { http, HttpResponse } from 'msw';
import { posts } from './post.data';
import { Post } from '../../app/post/data-access/post.type';

export const postHandlers = [
  http.get('https://api.example.com/posts', () => {
    return HttpResponse.json(posts);
  }),
  http.get('https://api.example.com/posts/:id', ({ params }) => {
    const post = posts.find((post) => post.id === Number(params['id']));
    return HttpResponse.json(post);
  }),
  http.post('https://api.example.com/posts', async ({ request }) => {
    const post = (await request.json()) as Post;
    post.id = posts.length + 1;
    posts.push(post);
    return HttpResponse.json(post);
  }),
];
