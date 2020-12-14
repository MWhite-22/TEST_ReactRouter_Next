import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { HeaderTitle } from './HeaderTitle';
import { HeaderSubtitleBar } from './HeaderSubtitleBar';
import { HeaderActionItems } from './HeaderActionItems';
import { HeaderProfileMenu } from './HeaderProfileMenu';

interface Props {
	title: string;
	openNav: () => void;
}

export const Header: React.FC<Props> = ({ openNav, title }) => {
	const classes = useStyles({});
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleProfileMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleProfileMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar className={classes.header}>
				<Toolbar className={classes.toolbar}>
					<HeaderTitle openNav={openNav} title={title} />
					<HeaderSubtitleBar />
					<HeaderActionItems handleProfileMenuOpen={handleProfileMenuOpen} />
				</Toolbar>
			</AppBar>
			<Toolbar />
			<HeaderProfileMenu anchorEl={anchorEl} handleMenuClose={handleProfileMenuClose} />
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	header: {
		zIndex: theme.zIndex.drawer + 1,
	},
	toolbar: {
		justifyContent: 'space-between',
	},
}));
