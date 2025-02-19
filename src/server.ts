import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

// Create an instance of the AngularAppEngine for SSR handling
const angularAppEngine = new AngularAppEngine();

// Netlify-compatible request handler
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();  // Get the context for Netlify (it helps with routing and other tasks)

  // Example API endpoints can be defined here (optional)
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  // Handle SSR requests with AngularAppEngine
  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

// This is the request handler used by Angular CLI for dev-server and build processes
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
