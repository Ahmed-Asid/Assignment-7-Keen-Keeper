import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../error/ErrorPage';
import Homepage from '../Pages/homepage/Homepage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            }
        ]
    }
])

export default router;