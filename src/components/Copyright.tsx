import React from 'react';
import { Link, Typography } from '@material-ui/core';

export const Copyright: React.FC = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Typography variant='overline' color='textSecondary'>
				Copyright &copy;{' '}
				<Link href='https://www.mechanicalxadvantage.com/' target='_blank' color='textSecondary'>
					MechanicalXAdvantage, LLC
				</Link>
				{' 2018 - ' + String(new Date().getFullYear())}
			</Typography>
		</div>
	);
};

//TODO: FRONTEND - CONSTANT FOR COPYRIGHT TEXT & HREF
