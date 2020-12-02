import React from 'react';

const PersonDashboard: React.FC = () => {
	const routeName = 'PersonDashboard';
	console.log(`Render ${routeName} Route`);

	return <p>{`I am the ${routeName} route`}</p>;
};

export default PersonDashboard;
