import { Component, h } from 'preact';
import style from './style.scss';

export default class UserControl extends Component {
	render() {
		return (
			<div class={`container ${style.ucontrol}`}>
				<h1>Add Account</h1>
				<form
					action={
						document.location.host == 'localhost:8080'
							? 'http://localhost:6438/addUser'
							: '/addUser'
					}
					method="post"
					encType="multipart/form-data"
				>
					<input
						type="email"
						name="_rootTextlabel_autosave"
						value="Root"
						readonly={true}
						readOnly={true}
						style={{
							display: 'block',
							height: '1px',
							position: 'fixed',
							top: '100vw',
						}}
					/>
					<input type="password" name="rootKey" required />
					<label htmlFor="rootKey" for="rootKey">
						Root Key
					</label>
					<input type="text" name="username" required />
					<label htmlFor="username" for="username">
						Username
					</label>
					<input type="text" name="userm" required />
					<label htmlFor="userm" for="userm">
						User 𝑒-mail - Used incase of key compromise
					</label>
					<input
						type="number"
						name="maxRequests"
						min="0"
						max="1000"
						value="50"
					/>
					<label htmlFor="maxRequests">Max Requests</label>
					<br />
					<br />
					<input type="submit" value="Add User" />
				</form>
				<br />
				<h1>Get User Information</h1>
				<form
					action={
						document.location.host == 'localhost:8080'
							? 'http://localhost:6438/user'
							: '/user'
					}
					method="get"
					encType="multipart/form-data"
				>
					<input type="password" name="key" required />
					<label htmlFor="key" for="key">
						Key
					</label>
					<br />
					<input type="submit" value="Get User Information" />
				</form>
			</div>
		);
	}
}
