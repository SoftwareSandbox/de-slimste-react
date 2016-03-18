jest.unmock('../src/components/pages/finalePage');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import FinalePage from '../src/components/pages/finalePage';
import Navigator from '../src/components/common/navigator';

describe('FinalePage component', () => {
	it('renders div with Navigator', () => {
		let finalePage = ReactTestUtils.renderIntoDocument(<FinalePage/>);
		let navigator = ReactTestUtils.scryRenderedComponentsWithType(finalePage, Navigator);
		expect(navigator).toBeTruthy();
	});

});
