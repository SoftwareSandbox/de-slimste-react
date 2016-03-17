jest.unmock('../src/components/pages/puzzelPage');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import PuzzelPage from '../src/components/pages/puzzelPage';
import Navigator from '../src/components/common/navigator';

describe('testRenderFunction', () => {
	it('renders div with navigator', () => {
		let puzzelPage = ReactTestUtils.renderIntoDocument(<PuzzelPage/>);
		let navigator = ReactTestUtils.scryRenderedComponentsWithType(puzzelPage, Navigator);
		expect(navigator.length).toBe(1);
	});

});
