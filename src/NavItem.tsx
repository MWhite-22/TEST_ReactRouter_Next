import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Collapse, ListItem, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface NavItemProps {
	children?: ReactNode;
	className?: string;
	depth: number;
	href?: string;
	icon?: any;
	info?: any;
	open?: boolean;
	title: string;
	end: boolean;
}

const useStyles = makeStyles((theme) => ({
	item: {
		display: 'block',
		paddingTop: 0,
		paddingBottom: 0,
	},
	itemLeaf: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0,
	},
	button: {
		color: theme.palette.text.secondary,
		padding: '10px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
	},
	buttonLeaf: {
		color: theme.palette.text.secondary,
		padding: '10px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: theme.typography.fontWeightRegular,
		'&.depth-0': {
			'& $title': {
				fontWeight: theme.typography.fontWeightMedium,
			},
		},
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(1),
	},
	title: {
		marginRight: 'auto',
	},
	active: {
		color: theme.palette.secondary.main,
		'& $title': {
			fontWeight: theme.typography.fontWeightMedium,
		},
		'& $icon': {
			color: theme.palette.secondary.main,
		},
	},
}));

const NavItem: FC<NavItemProps> = ({
	children,
	className,
	depth,
	href,
	icon: Icon,
	info: Info,
	open: openProp = false,
	title,
	end,
	...rest
}) => {
	const classes = useStyles();
	const [open, setOpen] = useState<boolean>(openProp);

	const handleToggle = (): void => {
		setOpen((prevOpen) => !prevOpen);
	};

	let paddingLeft = 8;

	if (depth > 0) {
		paddingLeft = 32 + 8 * depth;
	}

	const style = { paddingLeft };

	if (children) {
		return (
			<ListItem key={title} disableGutters className={clsx(classes.item, className)} {...rest}>
				<Button className={classes.button} onClick={handleToggle} style={style}>
					{Icon && <Icon className={classes.icon} size='20' />}
					<span className={classes.title}>{title}</span>
					{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</Button>
				<Collapse in={open}>{children}</Collapse>
			</ListItem>
		);
	}

	return (
		<ListItem button key={title} disableGutters className={clsx(classes.itemLeaf, className)} {...rest}>
			<Button
				disableRipple
				style={style}
				className={clsx(classes.buttonLeaf, `depth-${depth}`)}
				component={RouterLink}
				end={end}
				to={href || '/'}
				activeClassName={classes.active}
			>
				{Icon && <Icon className={classes.icon} size='20' />}
				<span className={classes.title}>{title}</span>
				{Info && <Info />}
			</Button>
		</ListItem>
	);
};

export default NavItem;
