import { setupWorker } from 'msw/browser';
import { postHandlers } from './post/post.handler';
import { todoHandlers } from './todo/todo.handler';

export const worker = setupWorker(...postHandlers, ...todoHandlers);
