import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Copyright } from '../../components/Copyright';

export const Footer: React.FC = () => {
	const classes = useStyles({});

	return (
		<footer className={`${classes.footer} noPrint`}>
			<Copyright />
		</footer>
	);
};

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.light,
		marginTop: 'auto',
	},
}));
