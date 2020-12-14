import React from 'react';
import type { ReactNode } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { List } from '@material-ui/core';
import { useAuth } from '../../mocks/Auth';
import { NavRouteItem } from './NavRouteListItem';

interface NavItem {
	title: string;
	path: string;
	end?: boolean;
	icon?: ReactNode;
	info?: ReactNode;
	children?: NavItem[];
}

export const NavRouteList: React.FC = () => {
	const location = useLocation();

	return <List component='nav'>{renderNavItems([], location.pathname)}</List>;
};

const renderNavItems = (items: NavItem[], currentPathname: string, depth: number = 0) => {
	const { userPermissions } = useAuth();

	// const RouterLink = useMemo(
	// 	() =>
	// 		React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'innerRef' | 'to'>>((props, ref) => (
	// 			<NavLink to={path} innerRef={ref} exact={path === '/'} {...props} />
	// 		)),
	// 	[path]
	// );

	// return (
	// 	<ListItem button dense component={RouterLink} className={classes.listItem}>
	// 		<ListItemIcon>
	// 			<IconComponent />
	// 		</ListItemIcon>
	// 		<ListItemText primary={name} />
	// 	</ListItem>
	// );

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
					{renderNavItems(navItem.children, currentPathname, depth + 1)}
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
