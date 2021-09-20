import { Component, createRef, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

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
							action="/out.lua"
							method="post"
							encType="multipart/form-data"
						>
							<div class={style.left}>
								<h2>Options</h2>
								<hr />
								Soon&trade;
							</div>
							<div class={style.right}>
								<h2>Script</h2>
								<hr />
								<label htmlFor="key" for="key">
									FerrisBrew Key
								</label>
								<input type="password" name="key" id="key" value={key} />
								<label htmlFor="sourceFile" for="sourceFile">
									Script
								</label>
								<br />
								<input type="hidden" name="MAX_FILE_SIZE" value="65536" />
								<input
									type="file"
									name="sourceFile"
									id="sourceFile"
									// style={{ textAlign: 'center' }}
								/>
								<input
									type="submit"
									value="Submit"
									download={'script.bin.lua'}
									class="waves-effect waves-light btn purple"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Obfuscate;
