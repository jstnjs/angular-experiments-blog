import { setupWorker } from 'msw/browser';
import { postHandler } from './post/post.handler';
import { todoHandler } from './todo/todo.handler';

export const worker = setupWorker(...postHandler, ...todoHandler);
