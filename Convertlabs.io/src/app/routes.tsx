import { createBrowserRouter } from 'react-router';
import BlogListing from './pages/BlogListing';
import BlogArticle from './pages/BlogArticle';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogListing />,
  },
  {
    path: '/blog/:slug',
    element: <BlogArticle />,
  },
]);
