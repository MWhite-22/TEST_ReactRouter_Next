import React, { ReactNode } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { List, makeStyles } from '@material-ui/core';
import NavItem from './NavItem';

interface Item {
	title: string;
	href: string;
	end?: boolean;
	icon?: ReactNode;
	info?: ReactNode;
	items?: Item[];
}

const routes: Item[] = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'About',
		href: '/about',
	},
	{
		title: 'People',
		href: '/person',
		items: [
			{
				title: 'People - All',
				href: '/person',
			},
			{
				title: 'People - One',
				href: '/person/1234',
			},
			{
				title: 'People - Me',
				href: '/person/me',
				end: false,
			},
		],
	},
	{
		title: 'Error',
		href: '/unknown',
	},
];

export const Sidebar: React.FC = () => {
	const classes = useStyles({});
	const location = useLocation();

	return (
		<div className={classes.root}>
			<List component='nav'>
				{renderNavItems({
					items: routes,
					pathname: location.pathname,
				})}
			</List>
		</div>
	);
};

function renderNavItems({ items, pathname, depth = 0 }: { items: Item[]; pathname: string; depth?: number }) {
	return items.reduce((acc: JSX.Element[], item) => {
		const key = item.title + depth;

		if (item.items) {
			const open = matchPath({ path: item.href, end: false }, pathname);

			acc.push(
				<NavItem
					depth={depth}
					icon={item.icon}
					info={item.info}
					key={key}
					open={Boolean(open)}
					title={item.title}
					end={false}
				>
					{renderNavItems({
						depth: depth + 1,
						pathname,
						items: item.items,
					})}
				</NavItem>
			);
		} else {
			acc.push(
				<NavItem
					depth={depth}
					href={item.href}
					icon={item.icon}
					info={item.info}
					key={key}
					title={item.title}
					end={typeof item.end !== 'undefined' ? item.end : true}
				/>
			);
		}

		return acc;
	}, []);
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: 150,
		borderRight: '1px solid black',
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(1),
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
