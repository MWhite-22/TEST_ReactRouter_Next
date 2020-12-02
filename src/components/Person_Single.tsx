import React from 'react';
import { useParams } from 'react-router-dom';

const PersonSingle: React.FC = () => {
	const { id } = useParams();
	const routeName = 'PersonSingle';
	console.log(`Render ${routeName} Route`);

	return <p>{`I am the ${routeName}-${id} route`}</p>;
};

export default PersonSingle;
