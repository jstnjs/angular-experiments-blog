import { http, HttpResponse } from 'msw';

export const postScenario = {
  error: [
    http.get('https://api.example.com/posts', () => {
      return new HttpResponse(null, { status: 500 });
    }),
  ],
};
