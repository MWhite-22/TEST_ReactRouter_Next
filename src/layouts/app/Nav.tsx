import { Divider, Drawer, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { NavExpandBar } from './NavExpandBar';
import { NavRouteList } from './NavRouteList';

interface Props {
	title: string;
	navOpen: boolean;
	closeNav: () => void;
}

interface StyleProps {
	navExpanded: boolean;
	isMobile: boolean;
}

export const Nav: React.FC<Props> = ({ navOpen, closeNav, title }) => {
	const [navExpanded, setNavExpanded] = useState<boolean>(false);
	const isMobile = useIsMobile();

	const styleProps: StyleProps = { navExpanded, isMobile };
	const classes = useStyles(styleProps);

	const toggleNavExpansion = () => {
		setNavExpanded((oldExpanded) => !oldExpanded);
	};

	const closeNavIfMobile = () => {
		if (isMobile) closeNav();
	};

	return (
		<Drawer
			open={navOpen}
			variant={isMobile ? 'temporary' : 'permanent'}
			onClick={closeNavIfMobile}
			onKeyDown={closeNavIfMobile}
			onClose={closeNav}
			className={classes.drawer}
			classes={{ paper: classes.drawerPaper }}
			ModalProps={{
				keepMounted: true,
			}}
		>
			<Toolbar className={classes.drawerTitle}>
				<Typography variant='h4'>{title}</Typography>
			</Toolbar>
			<Divider />
			<NavExpandBar isMobile={isMobile} navExpanded={navExpanded} toggleNavExpansion={toggleNavExpansion} />
			<NavRouteList />
		</Drawer>
	);
};

const useStyles = makeStyles((theme) => {
	const expandedWidth = 200;
	const collapsedWidth = theme.spacing(7);

	return {
		drawer: {
			width: (props: StyleProps) => (props.navExpanded || props.isMobile ? expandedWidth : collapsedWidth),
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.standard,
			}),
			whiteSpace: 'nowrap',
			overflowX: 'hidden',
		},
		drawerPaper: {
			width: (props: StyleProps) => (props.navExpanded || props.isMobile ? expandedWidth : collapsedWidth),
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.standard,
			}),
			whiteSpace: 'nowrap',
			overflowX: 'hidden',
			paddingBottom: 40,
		},
		drawerTitle: {
			justifyContent: 'center',
		},
	};
});
