const sendScript = async (script: string) => {
	const req = await fetch(
		'http://localhost:6438/obfuscate/f749779d0d6380c3f7c0dd406af9c36ed3280f05d0cc921a8e',
		{
			credentials: 'omit',
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0',
				Accept:
					'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
				'Accept-Language': 'en-US,en;q=0.5',
				'Content-Type':
					'multipart/form-data; boundary=---------------------------14836686483540075966137062037',
				'Upgrade-Insecure-Requests': '1',
				'Sec-Fetch-Dest': 'document',
				'Sec-Fetch-Mode': 'navigate',
				'Sec-Fetch-Site': 'same-origin',
				'Sec-Fetch-User': '?1',
				'Sec-GPC': '1',
			},
			referrer: document.location.href,
			body: `-----------------------------14836686483540075966137062037\r\nContent-Disposition: form-data; name=\"sourceFile\"; filename=\"helloworld.lua\"\r\nContent-Type: application/octet-stream\r\n\r\n${script}\r\n\r\n-----------------------------14836686483540075966137062037--\r\n`,
			method: 'POST',
			mode: 'cors',
		}
	);
	const json = await req.json();
	if (json.status !== 200) throw json;
	return {
		obfuscated: json.obfuscated.result,
		md5: json.obfuscated.md5,
		source: json.source,
		toString: () => json.obfuscated.result,
	};
};
export default sendScript;
