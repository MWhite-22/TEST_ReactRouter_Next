import { makeStyles, Typography } from '@material-ui/core';
import React, { Suspense } from 'react';
import LoadingScreen from './LoadingScreen';
import { Sidebar } from './Navbar';
import { Router } from './routes';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100vw',
		height: '100vh',
	},
	title: {
		marginTop: 0,
		textAlign: 'center',
		borderBottom: '1px solid black',
	},
	content: {
		display: 'flex',
	},
	main: {
		flexGrow: 1,
		padding: '1rem',
	},
}));

export const App: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant='h1' className={classes.title}>
				Hello World
			</Typography>
			<div className={classes.content}>
				<Sidebar />
				<main className={classes.main}>
					<Suspense fallback={<LoadingScreen />}>
						<Router />
					</Suspense>
				</main>
			</div>
		</div>
	);
};
