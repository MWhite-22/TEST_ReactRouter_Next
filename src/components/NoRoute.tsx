import React from 'react';

const NoRoute: React.FC = () => {
	const routeName = '404';
	console.log(`Render ${routeName} Route`);

	return <p>{`I am the ${routeName} route`}</p>;
};

export default NoRoute;
