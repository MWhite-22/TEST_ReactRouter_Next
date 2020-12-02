import React, { lazy, Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen';

const PersonDashboard = lazy(() => import('./Person_Dashboard'));
const PersonSingle = lazy(() => import('./Person_Single'));
const PersonMe = lazy(() => import('./Person_Me'));
const PersonMeDetails = lazy(() => import('./Person_Me_Details'));

const PersonLayout: React.FC = () => {
	const routeName = 'PersonLayout';
	console.log(`Render ${routeName} Route`);

	return (
		<>
			<p>PERSON PAGES:</p>
			<ul>
				<li>
					<Link to=''>List All</Link>
				</li>
				<li>
					<Link to='1234'>Choose One</Link>
				</li>
				<li>
					<Link to='me'>Me</Link>
				</li>
				<li>
					<Link to='me/broken'>Me - Broken</Link>
				</li>
			</ul>

			<Suspense fallback={<LoadingScreen />}>
				<Routes>
					<Route path='/' element={<PersonDashboard />} />
					<Route path=':id' element={<PersonSingle />} />
					<Route path='me' element={<PersonMe />}>
						<Route path='details' element={<PersonMeDetails />} />
					</Route>
					<Route path='*' element={<Navigate to='/404' />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default PersonLayout;
