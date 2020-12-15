import React from 'react';
import { Card, Divider, makeStyles } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';

export const PublicLayout: React.FC = () => {
	const classes = useStyles({});

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<p>Public layout</p>
				<Divider />
				<Outlet />
				<Link to='/app'>Return to home</Link>
			</Card>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: '100vh',
		width: '100vw',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		minWidth: 450,
		minHeight: 250,
		padding: theme.spacing(1),
	},
}));
