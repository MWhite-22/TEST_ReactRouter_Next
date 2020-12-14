import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Collapse, ListItem, makeStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
	title: string;
	path: string;
	end: boolean;
	depth: number;
	icon?: any;
	info?: any;
	open?: boolean;
	children?: ReactNode;
}

interface StyleProps {
	depth: number;
}

export const NavRouteItem: React.FC<Props> = ({
	title,
	path,
	end,
	depth,
	icon: Icon,
	info: Info,
	open: openProp = false,
	children,
}) => {
	const [open, setOpen] = useState<boolean>(openProp);

	const styleProps: StyleProps = { depth };
	const classes = useStyles(styleProps);

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
			<ListItem key={title} disableGutters className={classes.item}>
				<Button onClick={handleToggle} style={style} className={classes.button}>
					{Icon && <Icon className={classes.icon} size='20' />}
					<span className={classes.title}>{title}</span>
					{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</Button>
				<Collapse in={open}>{children}</Collapse>
			</ListItem>
		);
	}

	return (
		<ListItem key={title} button disableGutters className={classes.itemLeaf}>
			<Button
				disableRipple
				style={style}
				className={clsx(classes.buttonLeaf, `depth-${depth}`)}
				component={NavLink}
				end={end}
				to={path}
				activeClassName={classes.active}
			>
				{Icon && <Icon className={classes.icon} size='20' />}
				<span className={classes.title}>{title}</span>
				{Info && <Info />}
			</Button>
		</ListItem>
	);
};

// const useStyles = makeStyles((theme) => ({
// 	listItem: {
// 		'&:hover': { backgroundColor: theme.palette.grey.A100 },
// 		'&.active': {
// 			borderRight: `3px solid ${theme.palette.secondary.dark}`,
// 			backgroundColor: `${theme.palette.secondary.light}50`,
// 			color: theme.palette.secondary.dark,
// 			'& svg': {
// 				color: theme.palette.secondary.dark,
// 			},
// 		},
// 	},
// }));

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
