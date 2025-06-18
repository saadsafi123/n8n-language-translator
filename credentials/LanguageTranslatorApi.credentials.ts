import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LanguageTranslatorApi implements ICredentialType {
	name = 'languageTranslatorApi';
	displayName = 'Deep Translate RapidAPI';
	documentationUrl = 'https://rapidapi.com/deep-translate-corp/api/deep-translate1/'; 
	properties: INodeProperties[] = [
		{
			displayName: 'RapidAPI Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			description: 'Your X-RapidAPI-Key for Deep Translate API.',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			headers: {
								'x-rapidapi-key': '={{$credentials.apiKey}}',
			},
			// Or if it's a query parameter:
			// qs: {
			// 	'key': '={{$credentials.apiKey}}'
			// }
		},
	} as IAuthenticateGeneric;
}