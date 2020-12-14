import React from 'react';
import { Divider, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface Props {
	isMobile: boolean;
	navExpanded: boolean;
	toggleNavExpansion: () => void;
}

interface StyleProps {
	navExpanded: boolean;
}

export const NavExpandBar: React.FC<Props> = ({ isMobile, navExpanded, toggleNavExpansion }) => {
	const classes = useStyles({ navExpanded });

	return isMobile ? null : (
		<>
			<ListItem button onClick={toggleNavExpansion}>
				<ListItemIcon>
					<ChevronLeftIcon className={classes.icon} />
				</ListItemIcon>
				<ListItemText primary='Collapse' />
			</ListItem>
			<Divider />
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	icon: {
		transform: (props: StyleProps) => (props.navExpanded ? 'rotate(0deg)' : 'rotate(180deg)'),
		transition: theme.transitions.create('transform', {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.standard,
		}),
	},
}));
