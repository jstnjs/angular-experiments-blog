import { queryOptions } from '@tanstack/angular-query-experimental';
import { postKeys } from './post.key';
import { PostService } from './post.service';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export function postsQueryOptions() {
  const postService = inject(PostService);

  return queryOptions({
    queryKey: postKeys.all,
    queryFn: () => lastValueFrom(postService.posts()),
  });
}

export const postQueryOptions = (id: number) => {
  const postService = inject(PostService);

  return queryOptions({
    queryKey: ['test', id],
    queryFn: () => lastValueFrom(postService.post(id)),
  });
};
