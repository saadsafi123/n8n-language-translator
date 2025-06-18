import { INodeType, INodeTypeDescription,IHttpRequestMethods,NodeConnectionType } from 'n8n-workflow';

export class LanguageTranslator implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Language Translator',
		name: 'languageTranslator',
		icon: 'file:languagetranslator.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Translate text using a Language Translator API',
		defaults: {
			name: 'Language Translator',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'languageTranslatorApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://deep-translate1.p.rapidapi.com', // Replace with actual API base URL
			headers: {
				'Content-Type': 'application/json',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
			},
		},

		properties: [
			// resource
        {
            displayName: 'Resource',
            name: 'resource',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'Text Translation',
                    value: 'textTranslation',
                },
            ],
            default: 'textTranslation',
        },

            // operation
        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            displayOptions: {
                show: {
                    resource: ['textTranslation'],
                },
            },
            options: [
                {
                    name: 'Translate',
                    value: 'translate',
                    action: 'Translate Text',
                    description: 'Translate from one language to another',
                    routing: {
                        request: {
                            method: 'POST' as IHttpRequestMethods, // Explicitly cast for type safety
                                // **MODIFIED:** Specific API endpoint for translation
                                url: '/language/translate/v2',
                        },
                    },
                },
            ],
            default: 'translate',
        },

            // , fields come next
        {
            displayName: 'Source Language',
            name: 'sourceLanguage',
            type: 'string',
            required: true,
            default: 'en',
            placeholder: 'en',
            description: 'The source language code (e.g., en)',
            displayOptions: {
                show: {
                    resource: ['textTranslation'],
                    operation: ['translate'],
                },
            },
            routing: {
                request: {
                    body: {
                        source: '={{$value}}',
                    },
                },
            },
        },
        {
            displayName: 'Target Language',
            name: 'targetLanguage',
            type: 'string',
            required: true,
            default: 'es',
            placeholder: 'es',
            description: 'The target language code (e.g., es)',
            displayOptions: {
                show: {
                    resource: ['textTranslation'],
                    operation: ['translate'],
                },
            },
            routing: {
                request: {
                    body: {
                        target: '={{$value}}',
                    },
                },
            },
        },
        {
            displayName: 'Text to Translate',
            name: 'textToTranslate',
            type: 'string',
            typeOptions: {
					rows: 4, // Make it a multiline input
			        },
            required: true,
            default: '',
            placeholder: 'Hello World!',
            description: 'The text to translate',
            displayOptions: {
                show: {
                    resource: ['textTranslation'],
                    operation: ['translate'],
                },
            },
            routing: {
                request: {
                    body: {
                        q: '={{$value}}',
                    },
                },
            },
        }

		],
	};
}
