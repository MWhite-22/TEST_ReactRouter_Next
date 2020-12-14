import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';

//TODO: FRONTEND - CONSTANT FOR TITLE TEXT
//TODO: UI - REPLACE TITL TEXT WITH LOGO IF PRESENT?

interface Props {
	children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
	const classes = useStyles();
	const [navOpen, setNavOpen] = useState<boolean>(false);

	const navTitle = 'MXA';

	const openNav = () => {
		setNavOpen(true);
	};

	const closeNav = () => {
		setNavOpen(false);
	};

	return (
		<div className={classes.layout}>
			<Header title={navTitle} openNav={openNav} />
			<div className={classes.flexMain}>
				<Nav title={navTitle} navOpen={navOpen} closeNav={closeNav} />
				<main className={classes.mainContent}>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	layout: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	flexMain: {
		display: 'flex',
		height: '100%',
	},
	mainContent: {
		flexGrow: 1,
		height: '100%',
		width: '100%',
		padding: theme.spacing(2),
	},
}));
