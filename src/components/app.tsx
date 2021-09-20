import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Obfuscate from '../routes/obfuscate';
import Header from './header';

const App: FunctionalComponent = () => {
	return (
		<div
			id="preact_root"
			data-template={true}
			data-templateName={'https://github.com/0J3/preact-typescript'}
			data-projectName={'FerrisBrew'}
			class="root"
		>
			<Header />
			<Router>
				<Route path="/" component={Home} />
				<Route path="/obfuscate" component={Obfuscate} />
				<NotFoundPage default />
			</Router>
		</div>
	);
};

export default App;
