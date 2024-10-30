import { setupWorker } from 'msw/browser';
import { postHandler } from './mocks/post/post.handler';
import { todoHandler } from './mocks/todo/todo.handler';

export const worker = setupWorker(...postHandler, ...todoHandler);
