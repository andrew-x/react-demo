import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app.jsx';
import Page1 from './components/page1.jsx';
import Page2 from './components/page2.jsx';

// We look at page 1 by default but render page 2 when requesting 2.
export default(
	<Route path='/' component={App}>
		<IndexRoute component={Page1} />
        <Route path="/2" component={Page2} />
	</Route>
)
