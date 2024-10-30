import {
  injectQueryClient,
  QueryClient,
  queryOptions,
} from '@tanstack/angular-query-experimental';
import { postKeys } from './post.key';
import { PostService } from './post.service';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Post } from './post.type';

export function postsQueryOptions() {
  const postService = inject(PostService);

  return queryOptions({
    queryKey: postKeys.all,
    queryFn: () => lastValueFrom(postService.posts()),
  });
}

export const postQueryOptions = (id: number) => {
  const postService = inject(PostService);
  const queryClient = injectQueryClient(); // use cached data
  return queryOptions({
    queryKey: [postKeys.detail(id)],
    queryFn: () => lastValueFrom(postService.post(id)),
    // initialData: () => {
    //   const posts = queryClient.getQueryData<Post[]>(postKeys.all);
    //   return posts?.find((d) => d.id === id); // check if data is cached otherwise fetch
    // },
  });
};
