import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  //we want user to be able to access other routes without logging in
  publicRoutes: [
    '/',
    '/events/id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],

  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};