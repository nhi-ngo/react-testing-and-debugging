import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('should have App snapshot test', () => {
	const component = renderer.create(<App />); // component constant to hold the complete UI
	const tree = component.toJSON(); // passing it to tree constant to render it to JSON
	expect(tree).toMatchSnapshot(); // JSON will be tested against what we have in the snapshot
});

/* press 'u' to update the snapshot */
