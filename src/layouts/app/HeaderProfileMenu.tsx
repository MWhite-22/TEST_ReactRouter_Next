import React from 'react';
import { Divider, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import { useAuth } from '../../mocks/Auth';

interface Props {
	anchorEl: HTMLElement | null;
	handleMenuClose: () => void;
}

export const HeaderProfileMenu: React.FC<Props> = ({ anchorEl, handleMenuClose }) => {
	const classes = useStyles({});
	const { currentUser, authLogout } = useAuth();

	return (
		<Menu
			open={Boolean(anchorEl)}
			anchorEl={anchorEl}
			getContentAnchorEl={null}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			onClose={handleMenuClose}
		>
			<Typography variant='h5' className={classes.menuHeader}>
				{currentUser?.name_full.toUpperCase()}
			</Typography>
			<Divider variant='middle' />
			<MenuItem dense>Some Menu Item</MenuItem>
			<MenuItem
				dense
				onClick={() => {
					authLogout();
				}}
			>
				Logout
			</MenuItem>
		</Menu>
	);
};

const useStyles = makeStyles((theme) => ({
	menuHeader: {
		textAlign: 'center',
		padding: theme.spacing(0, 2, 1),
	},
}));
