import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header: FunctionalComponent = () => {
	return (
		<header class={style.header}>
			<h1>FerrisBrew</h1>
		</header>
	);
};

export default Header;
