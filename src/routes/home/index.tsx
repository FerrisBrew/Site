import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const Home: FunctionalComponent = () => {
	return (
		<>
			<div
				class={style.home}
				data-watchscroll={true}
				data-primaryScroller={true}
			>
				<div class={style.betterLuaEnv + ' ' + style.section}>
					<div class={style.left}>
						<h3>A better Lua Obfuscation Platform.</h3>
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
							, FerrisBrew (aka FBrew, FelixBrew) is a Lua Obfuscator designed
							for speed, efficiency and privacy. <br />
							This site **is a work-in-progress**! This is not a final version,
							but rather just what I have coded so far
						</p>
					</div>
					<div class={style.right}></div>
				</div>
				<div class={style.whyFerris + ' ' + style.section}>
					<div class={style.center}>
						<h3>Why FerrisBrew?</h3>
						<div class="row">
							<div class="col s12 m4">
								<div class={style.card}>
									<div class={style['card-content']}>
										<span class={style['card-title']}>Efficiency</span>
										<p>
											Despite of Obfuscation, FerrisBrew executes code at almost
											identical speeds to the source scripts, with minimal
											overhead.
										</p>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class={style.card}>
									<div class={style['card-content']}>
										<span class={style['card-title']}>Virtualization</span>
										<p>
											FerrisBrew implements a custom Lua5.1 VM with custom
											bytecode - This prevents attackers from using a
											traditional Lua Bytecode De-Obfuscator.
										</p>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class={style.card}>
									<div class={style['card-content']}>
										<span class={style['card-title']}>Bytecode Mutation</span>
										<p>
											FerrisBrew removes code your script doesn't need for it's
											functionality as to allow it to run faster, and not let
											any attackers re-construct the script.
										</p>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class={style.card}>
									<div class={style['card-content']}>
										<span class={style['card-title']}>Encryption</span>
										<p>
											FerrisBrew uses encryption extremely often in it's
											obfuscation process. It uses a combination of the default
											IB2 Encryption Algorithm, aswell as some custom
											algorithms.
										</p>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class={style.card}>
									<div class={style['card-content']}>
										<span class={style['card-title']}>Custom API</span>
										<p>
											FerrisBrew allows using custom functions not available in
											"vanilla" Lua
										</p>
										<button data-target="api" class="btn modal-trigger purple">
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class={style.card}>
									<div class={style['card-content']}>
										<span class={style['card-title']}>Security</span>
										<p>
											Our #1 Priority is your users' security. We will{' '}
											<b>never</b> execute <b>any</b> unwanted code you didn't
											put in the script.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class={style.right}></div>
				</div>
				{/* <h2>Usage</h2>
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
			</p> */}
			</div>
			<div id="api" class="modal black">
				<div class="modal-content">
					<h4>Custom API</h4>
					<p>
						Our Custom API allows you to call utility functions not available in
						vanilla lua. These can be re-implemented into vanilla lua, but that
						can be a pain in the ass sometimes.
						<br />
						The documentation for those is temporarily found below, until I make
						documentation for FerrisBrew.
					</p>
					<h5>Roblox-Only</h5>
					<h6>&lt;Unknown&gt; ProtectGUI(&lt;Instance&gt; GUI) *</h6>
					<p>
						This protects your GUI using your injector's environment function.
						Currently supports Synapse-X and Krnl.
						<br />
						* Exploit Only
						<br />
						&nbsp;&nbsp;Credit: <code>YieldingCoder#2904</code>
					</p>
					<h6>&lt;String&gt; Injector *</h6>
					<p>
						What your current Roblox Injector is. <code>Unknown</code> if not
						detected.
						<br />
						* Exploit Only
						<br />
						&nbsp;&nbsp;Credit: <code>YieldingCoder#2904</code>
					</p>
					<h6>&lt;Number&gt; sleep(&lt;Number&gt; time) *</h6>
					<p>
						Sleeps (Waits) <code>time - .01</code> Seconds or more
						<br />
						Returns DeltaTime (time slept)
						<br />* Local Only
					</p>
					<h5>Global</h5>
					<h6>&lt;Boolean&gt; Obfuscated</h6>
					<p>
						<code>true</code> if the script is obfuscated, <code>false</code> or{' '}
						<code>nil</code> if not. Meant to be used only if{' '}
						<a
							href="https://gist.github.com/0J3/26c10a68453cd4ecd0b88bf1a3b60743"
							target="_blank"
							rel="noopener noreferrer"
						>
							FerrisBrew's Development Script Env
						</a>{' '}
						is used.
					</p>
					<h6>&lt;fenv&gt;</h6>
					<p>
						Equal to <code>getfenv and getfenv(0) or _ENV</code>
					</p>
					<h5>Soon</h5>
					<h6>&lt;nil&gt; WatchFPS(&lt;boolean&gt; watch = true) *</h6>
					<p>
						Allows usage of FPS global
						<br />* Local Only
					</p>
					<h6>&lt;Number&gt; FPS *</h6>
					<p>
						Amount of Frames per Second. Must call <code>WatchFPS()</code>{' '}
						first!
					</p>
				</div>
				<div class="modal-footer black">
					<a
						href="#!"
						class="modal-close waves-effect waves-purple btn-flat white-text"
					>
						Close
					</a>
				</div>
			</div>
		</>
	);
};

export default Home;
