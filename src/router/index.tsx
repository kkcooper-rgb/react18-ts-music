import React from 'react';
import { RouteObject } from 'react-router-dom';
import Discover from '@/views/discover';
const router: RouteObject[] = [
  {
    path: '/',
    element: <Discover></Discover>,
  },
];
export default router;
