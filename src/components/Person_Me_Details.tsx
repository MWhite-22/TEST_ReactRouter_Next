import React from 'react';

const PersonMeDetails: React.FC = (props) => {
	const routeName = 'PersonMeDetails';
	console.log(`Render ${routeName} Route`);

	return <p>{`I am the ${routeName} route`}</p>;
};

export default PersonMeDetails;
