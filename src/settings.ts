import { readFileSync } from 'fs';
import { resolve } from 'path';

interface Setting {
	Display: string;
	Name: string;
}
// export const Settings: Setting[] = JSON.parse(
// 	readFileSync(resolve(__filename, '..', 'settings.json'), 'utf-8')
// );
// export default Settings;
export const Settings: Setting[] = [
	{
		Display: 'Encrypt Strings',
		Name: 'EncryptStrings',
	},
	{
		Display: 'Encrypt Important Strings',
		Name: 'EncryptImportantStrings',
	},
	{
		Display: 'Control Flow',
		Name: 'ControlFlow',
	},
	{
		Display: 'Memes',
		Name: 'Memes',
	},
];

export default Settings;
