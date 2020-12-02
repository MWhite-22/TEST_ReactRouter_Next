import React from 'react';

const About: React.FC = () => {
	const routeName = 'About';
	console.log(`Render ${routeName} Route`);

	return <p>{`I am the ${routeName} route`}</p>;
};

export default About;
