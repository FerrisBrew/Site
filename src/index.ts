// @ts-nocheck
// FerrisBrew
// Generated using https://github.com/0J3/preact-typescript

import './style/index.scss';
import App from './components/app';

const addScroll = el => {
	el.forEach(el => {
		console.log(el);

		// The debounce function receives our function as a parameter
		const debounce = fn => {
			// This holds the requestAnimationFrame reference, so we can cancel it if we wish
			let frame;

			// The debounce function returns a new function that can receive a variable number of arguments
			return (...params) => {
				// If the frame variable has been defined, clear it now, and queue for next frame
				if (frame) {
					cancelAnimationFrame(frame);
				}

				// Queue our function call for the next frame
				frame = requestAnimationFrame(() => {
					// Call our function and pass any params we received
					fn(...params);
				});
			};
		};

		// Reads out the scroll position and stores it in the data attribute
		// so we can use it in our stylesheets
		const storeScroll = () => {
			el.dataset.scroll = el.scrollY ?? el.scrollTop;
			if (el.getAttribute('data-primaryScroller') === 'true') {
				document.documentElement.dataset.scroll = el.dataset.scroll;
			}
		};

		// Listen for new scroll events, here we debounce our `storeScroll` function
		el.addEventListener('scroll', debounce(storeScroll), {
			passive: true,
		});

		// Update scroll position for first time
		storeScroll();
	});
};
setTimeout(
	() => addScroll(document.querySelectorAll('[data-watchscroll]')),
	500
);

export default App;
