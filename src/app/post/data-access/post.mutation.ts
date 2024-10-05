import { inject } from '@angular/core';

import { CreatePost } from './post.type';

import { PostService } from './post.service';
import { lastValueFrom } from 'rxjs';
import {
  injectMutation,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { postKeys } from './post.key';
import { Router } from '@angular/router';

export function createPostMutation() {
  const postService = inject(PostService);
  const queryClient = injectQueryClient();
  const router = inject(Router);

  return injectMutation(() => ({
    mutationFn: (post: CreatePost) =>
      lastValueFrom(postService.createPost(post)),
    onSuccess: (createdPost) => {
      queryClient.invalidateQueries({ queryKey: postKeys.all });
      router.navigate(['/posts', createdPost.id]);
    },
  }));
}
