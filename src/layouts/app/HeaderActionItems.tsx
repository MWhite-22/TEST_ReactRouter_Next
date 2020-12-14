import React from 'react';
import { Avatar, Badge, Button, IconButton, makeStyles } from '@material-ui/core';
import NotificationIcon from '@material-ui/icons/Notifications';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useAuth } from '../../mocks/Auth';

//TODO: UI - Support user Avatar picture if available. Default to Initials if not.
//TODO: UI - Allow users to pick custom color for avatar fallback

interface Props {
	handleProfileMenuOpen: (e: React.MouseEvent<HTMLElement>) => void;
}

export const HeaderActionItems: React.FC<Props> = ({ handleProfileMenuOpen }) => {
	const classes = useStyles({});
	const { currentUser } = useAuth();
	const isMobile = useIsMobile();

	return (
		<div className={classes.actionItems}>
			{!isMobile && (
				<IconButton>
					<Badge invisible={false} variant='dot' overlap='circle' color='secondary'>
						<NotificationIcon />
					</Badge>
				</IconButton>
			)}
			<Button onClick={handleProfileMenuOpen}>
				<Avatar className={classes.userAvatar}>{currentUser?.name_initials}</Avatar>
			</Button>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	actionItems: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginLeft: theme.spacing(2),
	},
	userAvatar: {
		backgroundColor: theme.palette.secondary.light,
		color: theme.palette.secondary.contrastText,
	},
}));
