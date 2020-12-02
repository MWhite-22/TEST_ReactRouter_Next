import React from 'react';

const Home: React.FC = () => {
	const routeName = 'Home';
	console.log(`Render ${routeName} Route`);

	return <p>{`I am the ${routeName} route`}</p>;
};

export default Home;
