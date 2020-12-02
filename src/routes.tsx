import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import NoRoute from './components/NoRoute';

const HomePage = lazy(() => import('./components/Home'));
const AboutPage = lazy(() => import('./components/About'));
const PersonLayout = lazy(() => import('./components/Person_Layout'));

export const Router = () => {
	return useRoutes([
		{ path: '/', element: <HomePage /> },
		{ path: '/about', element: <AboutPage /> },
		{ path: '/person/*', element: <PersonLayout /> },
		{ path: '/404', element: <NoRoute /> },
		{ path: '*', element: <Navigate to='/404' /> },
	]);
};
