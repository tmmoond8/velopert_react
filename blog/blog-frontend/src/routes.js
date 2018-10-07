import { ListPage, PostPage, EditorPage } from 'pages';

export default [
  {
    path: '/',
    exact: true,
    component: ListPage
  },
  {
    path: '/page/:page',
    component: ListPage
  },
  {
    path: '/tag/:tag/:page?',
    component: ListPage
  },
  {
    path: '/post/:id',
    component: PostPage
  },
  {
    path: '/editor',
    component: EditorPage
  },
]