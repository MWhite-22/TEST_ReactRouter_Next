import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useIsMobile } from '../../hooks/useIsMobile';

interface Props {
	title: string;
	openNav: () => void;
}

export const HeaderTitle: React.FC<Props> = ({ openNav, title }) => {
	const isMobile = useIsMobile();
	const classes = useStyles({});

	return (
		<div className={classes.root}>
			{isMobile ? (
				<IconButton onClick={openNav}>
					<MenuIcon />
				</IconButton>
			) : (
				<Link to='/' className={classes.titleLink}>
					<Typography variant='h3'>{title}</Typography>
				</Link>
			)}
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		marginRight: theme.spacing(2),
	},
	titleLink: {
		color: theme.palette.primary.contrastText,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));
