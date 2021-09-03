import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const Home: FunctionalComponent = () => {
	return (
		<div class={style.home}>
			<h1>FerrisBrew</h1>
			<p>
				Based on{' '}
				<a
					class="link"
					href="https://github.com/clv-2/ironbrew-2"
					target="_blank"
					rel="noopener noreferrer"
				>
					IronBrew2
				</a>
				, FerrisBrew (aka FBrew, FelixBrew) is a Lua Obfuscator designed for
				speed, efficiency and privacy.
			</p>
			<h2>Usage</h2>
			<p>
				To make it harder to "De-Obfuscate" FerrisBrew, for now, it is an
				on-demand-service. Contact me on discord{' '}
				<a
					class="link"
					target="_blank"
					rel="noopener noreferrer"
					href="https://discord.com/users/596425713347723269"
				>
					here
				</a>{' '}
				if you would like a FerrisBrew Obfuscated Script. This will <b>NOT</b>{' '}
				cost any money for now!
				<br />
				<br />
				In future, there will be a free limited version of FerrisBrew, and a
				paid, unrestricted version with a one-time-fee of approximately $5* to
				use.
				<br />
				<small>
					* Not guaranteed, may change
					<br />
					Please note: FerrisBrew Developers have no intent to open-source
					FerrisBrew anytime soon.
				</small>
			</p>
		</div>
	);
};

export default Home;
