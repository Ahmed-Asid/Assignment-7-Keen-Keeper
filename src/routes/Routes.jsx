import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../error/ErrorPage';
import Homepage from '../Pages/homepage/Homepage';
import FriendDetails from '../Pages/friendDetails/FriendDetails';
import Timeline from '../Pages/timeline/Timeline';
import Analytics from '../Pages/stats/Analytics';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: '/friendDetails/:id',
                element: <FriendDetails />,
                loader: () => fetch('/friends.json')
            },
            {
                path: '/timeline',
                element: <Timeline />
            },
            {
                path: '/stats',
                element: <Analytics />
            }
        ]
    }
])

export default router;