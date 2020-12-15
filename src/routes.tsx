import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import NoRoute from './components/NoRoute';
import { AppLayout } from './layouts/app/AppLayout';
import { PublicLayout } from './layouts/public';

const HomePage = lazy(() => import('./components/Home'));
const AboutPage = lazy(() => import('./components/About'));
const PersonLayout = lazy(() => import('./components/Person_Layout'));

export const Router = () => {
	return useRoutes([
		{
			path: '/app',
			element: <AppLayout />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/about', element: <AboutPage /> },
				{ path: '/person/*', element: <PersonLayout /> },
			],
		},
		{
			path: '/',
			element: <PublicLayout />,
			children: [
				{ path: '/login', element: <h5>Login</h5> },
				{ path: '/404', element: <NoRoute /> },
			],
		},
		{ path: '*', element: <Navigate to='/404' /> },
	]);
};
