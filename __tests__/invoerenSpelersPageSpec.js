jest.unmock('../src/components/pages/invoerenSpelersPage');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import InvoerenSpelersPage from '../src/components/pages/invoerenSpelersPage';

describe('InvoerenSpelersPage component', () => {
	
	describe('updateSpelersState', () => {
		it('should update the name of the speler that corresponds to the event targets name', () => {
			let page = ReactTestUtils.renderIntoDocument(<InvoerenSpelersPage/>);

			let event = { target: {name: '0', value:'derp'}};
			
			page.createSpelerUpdateHandler({naam:"doodoo"})(event);

			expect(page).toBeTruthy();
		});
	});

});
