import React from 'react';
import type { ReactNode } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { List } from '@material-ui/core';
import { useAuth } from '../../mocks/Auth';
import { NavRouteItem } from './NavRouteListItem';
import { Home, Person, QuestionAnswer } from '@material-ui/icons';

interface NavItem {
	title: string;
	path: string;
	end?: boolean;
	icon?: ReactNode;
	info?: ReactNode;
	children?: NavItem[];
}

const routes: NavItem[] = [
	{
		title: 'Home',
		path: '',
		icon: Home,
	},
	{
		title: 'About',
		path: 'about',
		icon: QuestionAnswer,
	},
	{
		title: 'People',
		path: 'person',
		icon: Person,
		children: [
			{
				title: 'People - All',
				path: 'person',
			},
			{
				title: 'People - One',
				path: 'person/1234',
			},
			{
				title: 'People - Me',
				path: 'person/me',
				end: false,
			},
		],
	},
	{
		title: 'Error',
		path: '/unknown',
	},
];

export const NavRouteList: React.FC = () => {
	const location = useLocation();
	const { userPermissions } = useAuth();

	return (
		<List disablePadding component='nav'>
			{renderNavItems(routes, location.pathname, userPermissions)}
		</List>
	);
};

const renderNavItems = (items: NavItem[], currentPathname: string, permissions: string[], depth: number = 0) => {
	return items.reduce((acc: JSX.Element[], navItem) => {
		const key = navItem.title + depth;

		if (navItem.children) {
			const open = matchPath({ path: navItem.path, end: navItem.end }, currentPathname);

			acc.push(
				<NavRouteItem
					key={key}
					title={navItem.title}
					path={navItem.path}
					end={typeof navItem.end !== 'undefined' ? navItem.end : true}
					icon={navItem.icon}
					info={navItem.info}
					depth={depth}
					open={Boolean(open)}
				>
					{renderNavItems(navItem.children, currentPathname, permissions, depth + 1)}
				</NavRouteItem>
			);
		} else {
			acc.push(
				<NavRouteItem
					key={key}
					title={navItem.title}
					path={navItem.path}
					end={typeof navItem.end !== 'undefined' ? navItem.end : true}
					icon={navItem.icon}
					info={navItem.info}
					depth={depth}
				/>
			);
		}

		return acc;
	}, []);
};
