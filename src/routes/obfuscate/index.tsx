import { Component, createRef, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import Settings from '../../settings';

class SavedInput extends Component<{
	type: any;
	name: any;
	value?: any;
	id?: string;
	required?: any;
}> {
	ref = createRef();
	render() {
		const r = (v: string) => {
			let x: any = v;
			if (this.props.type === 'checkbox') x = Boolean(x);
			if (this.props.type === 'password' && (x === 'false' || x === false))
				x = '';
			// console.log(x, typeof x, this.props.type);

			return x;
		};
		const x = () =>
			typeof window !== 'undefined'
				? r(
						localStorage.getItem(
							`savedInput-${this.props.type}-${this.props.name}`
						)
				  ) ??
				  this.props.value ??
				  false
				: null;
		return (
			<input
				ref={this.ref}
				type={this.props.type}
				name={this.props.name}
				value={x()}
				checked={x()}
				onChange={event => {
					localStorage.setItem(
						`savedInput-${this.props.type}-${this.props.name}`,
						// @ts-ignore
						this.ref.current.value ?? event.target.checked
					);
				}}
				id={this.props.id}
				required={this.props.required}
			/>
		);
	}
}

class Obfuscate extends Component {
	ref = createRef();
	rootRef = createRef();
	componentDidMount() {
		this.ref.current.style.display = 'block';
	}
	render() {
		let key: any = 'Insert your key here';
		if (typeof document !== typeof undefined)
			key = localStorage.getItem('ObfuscatorKey');
		return (
			<div>
				<div class={style.obfuscateBg}></div>
				<div class={style.obfuscate} ref={this.rootRef}>
					<div class={style.contents} ref={this.ref}>
						<form
							id="uploadForm"
							action={
								document.location.host == 'localhost:8080'
									? 'http://localhost:6438/out.lua'
									: '/out.lua'
							}
							method="post"
							encType="multipart/form-data"
						>
							<div
								style={{
									display: 'inline-block',
									width: '100%',
									paddingBottom: '10px',
								}}
								class="row"
							>
								<div class={`${style.left} col s12 m8`}>
									<h2>Options</h2>
									<hr />
									{Settings.map(v => (
										<div class="switch">
											<label>
												{v.Display}
												<SavedInput type="checkbox" name={v.Name} />
												<span class="lever" />
											</label>
										</div>
									))}
									<br />
									<br />
									More Soon&trade;
								</div>
								<div class={`${style.right} col s12 m8`}>
									<h2>Script</h2>
									<hr />
									<label htmlFor="key" for="key">
										FerrisBrew Key
									</label>
									<SavedInput
										type="password"
										name="key"
										id="key"
										value={key}
										required={true}
									/>
									<br />
									<input type="hidden" name="MAX_FILE_SIZE" value="65536" />
									<input
										type="file"
										name="sourceFile"
										id="sourceFile"
										// style={{ textAlign: 'center' }}
										accept="text/plain,text/lua,application/lua"
										required={true}
									/>
									<label
										htmlFor="sourceFile"
										for="sourceFile"
										class="waves-effect waves-light btn purple"
										required={true}
									>
										Select Script
									</label>
									<hr />
									<input
										type="submit"
										value="Obfuscate"
										download={'script.bin.lua'}
										class="waves-effect waves-light btn purple"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Obfuscate;
